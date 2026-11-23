import { useEffect } from 'react';
import { siteConfig } from '../../config/siteConfig';

/**
 * SEO Manager Component
 * Dynamically modifies document title, meta tags, and injects JSON-LD structured data.
 */
export default function SEO({
  title = "",
  description = "",
  canonicalPath = "",
  type = "website",
  jsonLd = null
}) {
  const fullTitle = title 
    ? `${title} | ${siteConfig.shortName}` 
    : `${siteConfig.shortName} | Premium Corn Silage & Livestock Fodder Manufacturer India`;

  const metaDescription = description || siteConfig.supportingText;
  const canonicalUrl = `${siteConfig.websiteUrl}${canonicalPath}`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Helper to set or create meta tag
    const setMetaTag = (attribute, attrValue, content) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', metaDescription);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', metaDescription);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', metaDescription);

    // 3. Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Inject Dynamic JSON-LD if supplied
    let scriptTag = document.getElementById('dynamic-jsonld');
    if (jsonLd) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'dynamic-jsonld';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(jsonLd);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    // Scroll to top upon page navigation
    window.scrollTo(0, 0);

  }, [fullTitle, metaDescription, canonicalUrl, type, jsonLd]);

  return null;
}
