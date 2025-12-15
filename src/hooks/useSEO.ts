import { useEffect } from 'react';

interface SEOConfig {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
  canonicalUrl: string;
  pageName?: string;
  pageUrl?: string;
  structuredData?: {
    services?: boolean;
    faq?: Array<{ question: string; answer: string }>;
  };
}

export const useSEO = (config: SEOConfig) => {
  useEffect(() => {
    // Update title
    document.title = config.title;

    // Update meta description
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute('content', config.description);

    // Update robots meta tag
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', 'index, follow');

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', config.canonicalUrl);

    // Update OG type
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.setAttribute('content', 'website');

    // Update OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', config.canonicalUrl);

    // Update OG title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', config.ogTitle);

    // Update OG description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', config.ogDescription);

    // Update OG image
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', config.ogImage || 'https://i.imgur.com/KTSBU1c.png');

    // Remove any existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Add Organization Schema (on all pages)
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Dera Consultants",
      "url": "https://www.getsecondpassport.eu",
      "logo": "https://i.imgur.com/KTSBU1c.png",
      "sameAs": [
        "https://www.instagram.com",
        "https://www.facebook.com",
        "https://www.linkedin.com"
      ]
    };

    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.textContent = JSON.stringify(organizationSchema);
    document.head.appendChild(orgScript);

    // Add Breadcrumb Schema (dynamic based on route)
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.getsecondpassport.eu/"
      }
    ];

    if (config.pageName && config.pageUrl && config.pageUrl !== 'https://www.getsecondpassport.eu/') {
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 2,
        "name": config.pageName,
        "item": config.pageUrl
      });
    }

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    // Add Services Schema (homepage only)
    if (config.structuredData?.services) {
      const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Second Passport & Residency by Investment Advisory",
        "provider": {
          "@type": "Organization",
          "name": "Dera Consultants"
        },
        "areaServed": "Worldwide",
        "serviceType": [
          "Citizenship by Investment",
          "Residency by Investment",
          "Second Passport Consulting",
          "EU Residency Solutions"
        ],
        "url": "https://www.getsecondpassport.eu"
      };

      const servicesScript = document.createElement('script');
      servicesScript.type = 'application/ld+json';
      servicesScript.textContent = JSON.stringify(servicesSchema);
      document.head.appendChild(servicesScript);
    }

    // Add FAQ Schema (FAQ page only)
    if (config.structuredData?.faq && config.structuredData.faq.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": config.structuredData.faq.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      };

      const faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(faqScript);
    }
  }, [config]);
};
