import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

/**
 * SEO KEYWORD STRATEGY - 100+ High-Intent Keywords for Sales Engineering Recruitment
 * 
 * PRIMARY KEYWORDS (High Commercial Intent):
 * 1. sales engineer recruiter
 * 2. sales engineering headhunter
 * 3. technical sales recruiter
 * 4. engineering recruitment agency
 * 5. sales engineer executive search
 * 6. presales engineer recruiter
 * 7. solution engineer headhunter
 * 8. technical account manager recruiter
 * 9. field application engineer recruiter
 * 10. sales engineering talent acquisition
 * 
 * SECONDARY KEYWORDS (Industry-Specific):
 * 11. medical device sales recruiter
 * 12. industrial equipment sales recruiter
 * 13. manufacturing sales engineer headhunter
 * 14. electrical engineering recruiter
 * 15. measurement technology sales recruiter
 * 16. test equipment sales recruiter
 * 17. B2B technical sales recruiter
 * 18. enterprise sales engineer recruiter
 * 19. OEM sales recruiter Germany
 * 20. capital equipment sales recruiter
 * 
 * GEOGRAPHIC KEYWORDS (DACH + USA):
 * 21. sales engineer recruiter Germany
 * 22. sales engineer recruiter Switzerland
 * 23. sales engineer recruiter USA
 * 24. DACH sales recruiter
 * 25. German speaking sales recruiter
 * 26. Munich sales engineer headhunter
 * 27. Zurich sales recruiter
 * 28. Stuttgart engineering recruiter
 * 29. Frankfurt technical sales recruiter
 * 30. Hamburg sales engineer headhunter
 * 
 * ROLE-SPECIFIC KEYWORDS:
 * 31. VP sales engineering recruiter
 * 32. sales director headhunter
 * 33. regional sales manager recruiter
 * 34. key account manager recruiter Germany
 * 35. business development manager recruiter
 * 36. channel sales manager headhunter
 * 37. inside sales engineer recruiter
 * 38. sales operations manager recruiter
 * 39. customer success engineer recruiter
 * 40. technical sales manager headhunter
 * 
 * EXECUTIVE SEARCH KEYWORDS:
 * 41. executive search sales engineering
 * 42. C-level sales recruiter
 * 43. CRO recruiter Germany
 * 44. chief revenue officer headhunter
 * 45. VP of sales headhunter DACH
 * 46. sales leadership recruiter
 * 47. commercial director headhunter
 * 48. managing director sales recruiter
 * 49. sales executive search firm
 * 50. senior sales recruiter Germany
 * 
 * METHODOLOGY KEYWORDS:
 * 51. direct search sales engineer
 * 52. retained search sales engineer
 * 53. executive headhunting sales
 * 54. confidential search sales
 * 55. passive candidate recruiting
 * 56. talent mapping sales engineering
 * 57. market mapping sales recruiter
 * 58. competitor mapping recruiter
 * 59. succession planning sales
 * 60. leadership assessment sales
 * 
 * INDUSTRY VERTICAL KEYWORDS:
 * 61. SaaS sales engineer recruiter
 * 62. IoT sales engineer recruiter
 * 63. automation sales recruiter
 * 64. robotics sales engineer headhunter
 * 65. semiconductor sales recruiter
 * 66. cleantech sales recruiter
 * 67. energy sector sales recruiter
 * 68. automotive sales engineer recruiter
 * 69. aerospace sales recruiter
 * 70. defense sales engineer headhunter
 * 
 * SPECIALIZATION KEYWORDS:
 * 71. application engineer recruiter
 * 72. systems engineer sales recruiter
 * 73. product specialist recruiter
 * 74. technical consultant recruiter
 * 75. solutions architect recruiter
 * 76. demo engineer recruiter
 * 77. proof of concept engineer recruiter
 * 78. integration engineer recruiter
 * 79. implementation engineer recruiter
 * 80. technical trainer recruiter
 * 
 * GERMAN LANGUAGE KEYWORDS:
 * 81. Vertriebsingenieur Personalberater
 * 82. Headhunter Vertriebsingenieur
 * 83. Personalberatung Vertrieb
 * 84. Sales Engineer Personalvermittlung
 * 85. technischer Vertrieb Recruiter
 * 86. Direktsuche Vertriebsleiter
 * 87. Executive Search Vertrieb
 * 88. Personalberater Maschinenbau Vertrieb
 * 89. Headhunter technischer Vertrieb Deutschland
 * 90. Personalberatung DACH Vertrieb
 * 
 * LONG-TAIL KEYWORDS:
 * 91. hire sales engineers for engineering companies
 * 92. find sales engineer passive candidates
 * 93. recruit sales engineers Germany to Switzerland
 * 94. sales engineer headhunter with references
 * 95. boutique sales engineering recruiter
 * 96. specialized sales engineer recruitment
 * 97. sales engineer talent partner
 * 98. sales engineering staffing partner
 * 99. engineering sales recruitment consultant
 * 100. trusted sales engineer recruiter DACH
 * 
 * PAIN POINT KEYWORDS:
 * 101. hard to fill sales engineer positions
 * 102. confidential sales leadership search
 * 103. urgent sales engineer hiring
 * 104. quality sales engineer candidates
 * 105. sales engineer with technical background
 * 106. bilingual sales engineer Germany
 * 107. cross-border sales engineer recruitment
 * 108. sales engineer relocation support
 * 109. sales engineer market salary data
 * 110. sales engineer candidate assessment
 */

const SITE_NAME = 'Skytz Consulting';
const SITE_URL = 'https://skytz-consulting.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/philipp-hoffschroer/';

// Kept in sync with App.jsx's SUPPORTED_LANGS / DEFAULT_LANG. Every route in
// this app exists at the same sub-path under both /en and /de (see App.jsx),
// so hreflang alternates can be derived generically by swapping the leading
// language segment of the current path rather than hardcoding per-page URLs.
const SUPPORTED_LANGS = ['en', 'de'];
const DEFAULT_LANG = 'en';

// Single source of truth for the OG/Twitter share image, so it only needs
// to change in one place (previously hardcoded separately in index.html's
// og:image/twitter:image and here). Still points at the 2MB header logo
// (public/brand/Logo-Skytz-Consulting.png) because no dedicated share-image
// asset exists on disk and no image tooling is available in this
// environment to create one safely — see the audit fix notes for the
// target spec (1200x630, <300KB) a human still needs to produce at
// public/brand/og-image.jpg. Once that file exists, change this one
// constant (and the two tags in index.html) to point at it.
const OG_IMAGE_PATH = 'brand/Logo-Skytz-Consulting.png';

const KEYWORDS_BY_LANG = {
  en: 'sales engineer recruiter, industrial automation sales recruiter, process instrumentation recruiter, motion control drives recruiter, sensor sales engineer recruiting, technical sales recruiter, German manufacturer US subsidiary hiring',
  de: 'Vertriebsingenieur Personalberater, Sales Engineer Recruiter, Headhunter technischer Vertrieb, Personalberatung Vertrieb Deutschland, Direktsuche Vertriebsleiter, Executive Search Sales Engineering, Personalvermittlung DACH, technischer Vertrieb Headhunter',
};

// Structured data for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Skytz Consulting",
  "legalName": "Laurasia LLC",
  "url": SITE_URL,
  "logo": `${SITE_URL}/brand/Logo-Skytz-Consulting.png`,
  "description": "Technical sales recruiting for measurement and test equipment manufacturers. Industrial automation, sensors, drives, and process instrumentation. Germany and the United States.",
  "foundingDate": "2015",
  "founder": {
    "@type": "Person",
    "name": "Philipp Hoffschröer",
    "jobTitle": "Founder",
    "image": `${SITE_URL}/brand/Philipp-Hoffschroer.jpg`,
    "sameAs": LINKEDIN_URL
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1309 Coffeen Avenue STE 1200",
    "addressLocality": "Sheridan",
    "addressRegion": "WY",
    "postalCode": "82801",
    "addressCountry": "US"
  },
  "email": "info@skytz-consulting.com",
  "telephone": "+1-307-429-0181",
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Germany" },
    { "@type": "Country", "name": "Switzerland" },
    { "@type": "Country", "name": "Austria" }
  ],
  "knowsAbout": [
    "Sales Engineer Recruitment",
    "Industrial Automation and Sensor Technologies",
    "Motion Control and Drives",
    "Process Instrumentation and Valve Automation",
    "Test and Measurement Equipment",
    "Technical Sales Recruiting"
  ],
  "sameAs": [LINKEDIN_URL]
};

// Structured data for LocalBusiness (for local SEO)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  "name": "Skytz Consulting",
  "image": `${SITE_URL}/brand/Logo-Skytz-Consulting.png`,
  "url": SITE_URL,
  "priceRange": "$$$$",
  "telephone": "+1-307-429-0181",
  "description": "Technical sales recruiting for industrial manufacturers: industrial automation and sensors, motion control and drives, process instrumentation, and test and measurement equipment. Working since 2015.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1309 Coffeen Avenue STE 1200",
    "addressLocality": "Sheridan",
    "addressRegion": "WY",
    "postalCode": "82801",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 44.7972,
    "longitude": -106.9564
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "serviceArea": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Germany" },
    { "@type": "Country", "name": "Switzerland" }
  ]
};

// Service schema for recruitment services
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Executive Recruitment",
  "provider": {
    "@type": "Organization",
    "name": "Skytz Consulting"
  },
  "name": "Sales Engineer Search",
  "description": "Recruiting sales engineers, application engineers, and sales leadership for industrial manufacturers in the United States and Germany.",
  "areaServed": ["United States", "Germany", "Switzerland", "Austria"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Recruitment Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sales Engineer Search — Industrial Automation and Sensors",
          "description": "Field sales engineers for factory automation, sensing, connectivity, and plant-floor control"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sales Engineer Search — Motion Control and Drives",
          "description": "Technical sales for gear motors, variable-frequency drives, and power transmission"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sales Engineer Search — Process Instrumentation",
          "description": "Technical sales for control valves, flow measurement, and instrumentation in process industries"
        }
      }
    ]
  }
};

export default function SEO({ 
  title, 
  description, 
  canonical,
  noindex = false,
  article = false,
  image
}) {
  const { i18n } = useTranslation();
  const location = useLocation();
  const lang = i18n.language || 'en';
  
  const defaultTitle = lang === 'de'
    ? 'Skytz Consulting | Personalberatung für technischen Vertrieb und Engineering'
    : 'Skytz Consulting | Sales Engineer Recruiting for Industrial Manufacturers';

  const defaultDescription = lang === 'de'
    ? 'Recruiting im technischen Vertrieb für Hersteller von Mess- und Prüftechnik seit 2015. Industrieautomation, Sensorik, Antriebstechnik, Prozessmesstechnik. Deutschland und USA.'
    : 'Technical sales recruiting for measurement and test equipment manufacturers since 2015. Industrial automation, sensors, drives, and process instrumentation. Germany and the United States.';

  const pageTitle = title ? `${title} | ${SITE_NAME}` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageUrl = canonical || `${SITE_URL}${location.pathname}`;
  const baseUrl = import.meta.env.BASE_URL || '/';
  const pageImage = image || `${SITE_URL}${baseUrl}${OG_IMAGE_PATH}`;

  // Hreflang alternates: swap the leading /:lang segment of the current
  // path for each supported language. Every route lives at the same
  // sub-path under both /en and /de (see App.jsx), so this is generic and
  // doesn't need a per-page URL map. Skipped for noindex pages (typo'd
  // paths, unsupported /:lang segments) since there's no real alternate to
  // point to and Google ignores hreflang on noindex pages anyway.
  const hreflangUrls = useMemo(() => {
    if (noindex) return null;
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const pathRest = (SUPPORTED_LANGS.includes(pathSegments[0]) ? pathSegments.slice(1) : pathSegments).join('/');
    return {
      ...Object.fromEntries(SUPPORTED_LANGS.map((l) => [l, `${SITE_URL}/${l}${pathRest ? '/' + pathRest : ''}`])),
      'x-default': `${SITE_URL}/${DEFAULT_LANG}${pathRest ? '/' + pathRest : ''}`,
    };
  }, [location.pathname, noindex]);

  useEffect(() => {
    // Update document title
    document.title = pageTitle;
    
    // Update or create meta tags
    const updateMeta = (name, content, property = false) => {
      const attr = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    // Basic meta tags
    updateMeta('description', pageDescription);
    updateMeta('keywords', KEYWORDS_BY_LANG[lang] || KEYWORDS_BY_LANG.en);
    updateMeta('author', 'Philipp Hoffschröer, Skytz Consulting');
    updateMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    
    // Open Graph
    updateMeta('og:type', article ? 'article' : 'website', true);
    updateMeta('og:url', pageUrl, true);
    updateMeta('og:title', pageTitle, true);
    updateMeta('og:description', pageDescription, true);
    updateMeta('og:image', pageImage, true);
    updateMeta('og:site_name', SITE_NAME, true);
    updateMeta('og:locale', lang === 'de' ? 'de_DE' : 'en_US', true);
    
    // Twitter
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:url', pageUrl);
    updateMeta('twitter:title', pageTitle);
    updateMeta('twitter:description', pageDescription);
    updateMeta('twitter:image', pageImage);
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', pageUrl);

    // Update hreflang alternates (en, de, x-default). Previously this
    // component never touched hreflang at all, so every inner page (e.g.
    // /de/about) inherited whatever static block was last in index.html
    // instead of pointing at its own /en/about counterpart.
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
    if (hreflangUrls) {
      Object.entries(hreflangUrls).forEach(([hreflang, href]) => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', hreflang);
        link.setAttribute('href', href);
        document.head.appendChild(link);
      });
    }

    // Update html lang
    document.documentElement.lang = lang;

    // Add structured data
    const existingScript = document.querySelector('script[data-seo="structured-data"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo', 'structured-data');
    script.textContent = JSON.stringify([organizationSchema, localBusinessSchema, serviceSchema]);
    document.head.appendChild(script);
    
    // Cleanup function
    return () => {
      // Keep meta tags for SEO crawlers
    };
  }, [pageTitle, pageDescription, pageUrl, pageImage, lang, noindex, article, hreflangUrls]);

  return null; // This component doesn't render anything
}
