interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
}

export function SEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogUrl,
}: SEOProps) {
  // Update document title
  document.title = title;

  // Update or create meta tags
  const updateMetaTag = (name: string, content: string, property?: string) => {
    let tag = document.querySelector(
      property ? `meta[property="${property}"]` : `meta[name="${name}"]`
    ) as HTMLMetaElement;

    if (!tag) {
      tag = document.createElement("meta");
      if (property) {
        tag.setAttribute("property", property);
      } else {
        tag.setAttribute("name", name);
      }
      document.head.appendChild(tag);
    }
    tag.content = content;
  };

  // Update canonical link
  let canonicalLink = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
  if (!canonicalLink) {
    canonicalLink = document.createElement("link");
    canonicalLink.rel = "canonical";
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.href = canonical;

  // Update meta tags
  updateMetaTag("description", description);
  updateMetaTag("robots", "index, follow");

  // Update Open Graph tags
  updateMetaTag("og:type", "website", "og:type");
  updateMetaTag("og:url", ogUrl, "og:url");
  updateMetaTag("og:title", ogTitle, "og:title");
  updateMetaTag("og:description", ogDescription, "og:description");
  updateMetaTag("og:image", "https://i.imgur.com/KTSBU1c.png", "og:image");

  return null;
}
