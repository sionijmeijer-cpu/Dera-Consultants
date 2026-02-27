/**
 * S3 Guide Download Utilities
 * 
 * Configure your S3 bucket URLs below. You have two options:
 * 
 * OPTION 1: Public S3 URLs (simplest)
 * - Make your PDF files publicly readable in S3
 * - Use direct URLs like: https://your-bucket.s3.eu-west-1.amazonaws.com/guides/golden-visa.pdf
 * 
 * OPTION 2: Pre-signed URLs (more secure)
 * - Keep files private in S3
 * - Generate pre-signed URLs via a backend/Lambda function
 * - URLs expire after a set time (e.g., 5 minutes)
 * 
 * To set up:
 * 1. Upload your PDFs to an S3 bucket
 * 2. Update the GUIDE_DOWNLOAD_URLS in DownloadModal.tsx with your actual URLs
 * 3. If using pre-signed URLs, replace the direct URL approach with the 
 *    getPresignedDownloadUrl function below
 */

// Direct S3 URLs - replace with your actual bucket and file paths
export const S3_CONFIG = {
  bucket: 'your-bucket-name',
  region: 'eu-west-1',
  guides: {
    'golden-visa': 'guides/golden-visa-2026.pdf',
    'd7-visa': 'guides/d7-visa-blueprint.pdf',
    'd8-visa': 'guides/d8-digital-nomad-visa.pdf',
    'caribbean-bundle': 'guides/caribbean-bundle.pdf',
    'all-guides': 'guides/all-guides-collection.pdf',
  } as Record<string, string>,
};

/**
 * Get the direct S3 download URL for a guide
 */
export function getGuideDownloadUrl(guideId: string): string | null {
  const key = S3_CONFIG.guides[guideId];
  if (!key) return null;
  return `https://${S3_CONFIG.bucket}.s3.${S3_CONFIG.region}.amazonaws.com/${key}`;
}

/**
 * For pre-signed URLs: Call your backend API to generate a temporary download link
 * Uncomment and configure this if you want time-limited secure downloads
 */
// export async function getPresignedDownloadUrl(guideId: string): Promise<string | null> {
//   try {
//     const response = await fetch(`/api/get-download-url?guideId=${guideId}`);
//     if (!response.ok) throw new Error('Failed to get download URL');
//     const data = await response.json();
//     return data.url;
//   } catch (error) {
//     console.error('Error getting pre-signed URL:', error);
//     return null;
//   }
// }

/**
 * Trigger a file download from a URL
 */
export function triggerDownload(url: string, filename?: string): void {
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
  if (filename) {
    link.setAttribute('download', filename);
  }
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
