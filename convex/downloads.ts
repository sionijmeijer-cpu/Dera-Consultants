"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";
import Stripe from "stripe";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const getStripe = () => {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY not set");
  return new Stripe(key, { apiVersion: "2025-04-30.basil" as any });
};

const getS3Client = () => {
  const region = process.env.AWS_REGION;
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

  if (!region) throw new Error("AWS_REGION not set");
  if (!accessKeyId) throw new Error("AWS_ACCESS_KEY_ID not set");
  if (!secretAccessKey) throw new Error("AWS_SECRET_ACCESS_KEY not set");

  return new S3Client({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
};

const getBucketName = () => {
  const bucket = process.env.S3_BUCKET_NAME;
  if (!bucket) throw new Error("S3_BUCKET_NAME not set");
  return bucket;
};

const GUIDE_DOWNLOADS: Record<
  string,
  {
    filename: string;
    s3Key: string;
    contentType: string;
    disposition: "inline" | "attachment";
  }
> = {
  "golden-visa": {
    filename: "Golden_Visa_2026_Guide.pdf",
    s3Key: "Golden Visa 2026.pdf",
    contentType: "application/pdf",
    disposition: "attachment",
  },
  "d7-visa": {
    filename: "D7 Visa Blueprint.zip",
    s3Key: "D7 Visa Blueprint.zip",
    contentType: "application/zip",
    disposition: "attachment",
  },
  "d8-visa": {
    filename: "D8_Digital_Nomad_Visa.pdf",
    s3Key: "D8 Digital Nomad Visa.pdf",
    contentType: "application/pdf",
    disposition: "attachment",
  },
  "caribbean-bundle": {
    filename: "Complete_Caribbean_Bundle.pdf",
    s3Key: "Caribbean Bundle.pdf",
    contentType: "application/pdf",
    disposition: "attachment",
  },
  "all-guides": {
    filename: "Complete_Guide_Collection.pdf",
    s3Key: "Complete Guide Collection.pdf",
    contentType: "application/pdf",
    disposition: "attachment",
  },
};

export const getSignedGuideDownloadUrl = action({
  args: {
    sessionId: v.string(),
  },
  handler: async (_ctx, args) => {
    const stripe = getStripe();
    const s3 = getS3Client();
    const bucket = getBucketName();

    const session = await stripe.checkout.sessions.retrieve(args.sessionId);

    if (session.payment_status !== "paid") {
      throw new Error("Payment not completed");
    }

    const guideId = session.metadata?.guideId;
    if (!guideId) {
      throw new Error("No guide ID found for this session");
    }

    const guide = GUIDE_DOWNLOADS[guideId];
    if (!guide) {
      throw new Error(`No download configured for guide: ${guideId}`);
    }

    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: guide.s3Key,
      ResponseContentDisposition: `${guide.disposition}; filename="${guide.filename}"`,
      ResponseContentType: guide.contentType,
    });

    const url = await getSignedUrl(s3, command, { expiresIn: 3600 });

    return {
      url,
      filename: guide.filename,
      guideId,
    };
  },
});
