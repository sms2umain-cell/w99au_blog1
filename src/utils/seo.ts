// SEO utility functions for dynamic meta tag updates

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  structuredData?: object;
}

export const updateSEO = (config: SEOConfig) => {
  // Update title
  document.title = config.title;

  // Update or create meta tags
  const updateMetaTag = (name: string, content: string, isProperty = false) => {
    const attribute = isProperty ? 'property' : 'name';
    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }
    
    element.setAttribute('content', content);
  };

  // Update basic meta tags
  updateMetaTag('description', config.description);
  updateMetaTag('keywords', config.keywords);

  // Update Open Graph tags
  updateMetaTag('og:title', config.ogTitle || config.title, true);
  updateMetaTag('og:description', config.ogDescription || config.description, true);
  updateMetaTag('og:url', config.canonical, true);
  if (config.ogType) {
    updateMetaTag('og:type', config.ogType, true);
  }

  // Update Twitter Card tags
  updateMetaTag('twitter:title', config.ogTitle || config.title);
  updateMetaTag('twitter:description', config.ogDescription || config.description);

  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', config.canonical);

  // Update last-modified
  const today = new Date().toISOString().split('T')[0];
  updateMetaTag('last-modified', today);

  // Add structured data if provided
  if (config.structuredData) {
    // Remove existing structured data script for this page
    const existingScript = document.querySelector('script[data-page-schema]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-page-schema', 'true');
    script.textContent = JSON.stringify(config.structuredData);
    document.head.appendChild(script);
  }
};

// Generate breadcrumb structured data
export const generateBreadcrumbs = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://w99aud.com${item.url}`
    }))
  };
};

// Generate article structured data
export const generateArticleSchema = (article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  category: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "W99AU Casino",
      "logo": {
        "@type": "ImageObject",
        "url": "https://w99aud.com/media/798cdb9ea92763fd4c097.gif"
      }
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "articleSection": article.category,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    }
  };
};

// Generate FAQ structured data
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
