import { useEffect } from 'react';
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

// Structured data for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Skytz Consulting",
  "alternateName": "Laurasia LLC",
  "url": SITE_URL,
  "logo": `${SITE_URL}/brand/Logo-Skytz-Consulting.png`,
  "description": "Executive recruitment and direct search for Sales Engineering and technical leadership roles in Germany, Switzerland, and USA.",
  "foundingDate": "2015",
  "founder": {
    "@type": "Person",
    "name": "Philipp Hoffschröer",
    "jobTitle": "Founder",
    "image": `${SITE_URL}/brand/Philipp-Hoffschroer.jpg`
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
  "areaServed": [
    { "@type": "Country", "name": "Germany" },
    { "@type": "Country", "name": "Switzerland" },
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Austria" }
  ],
  "knowsAbout": [
    "Sales Engineer Recruitment",
    "Technical Sales Headhunting",
    "Executive Search",
    "Direct Search",
    "Engineering Leadership Recruitment",
    "DACH Market Recruitment"
  ],
  "sameAs": []
};

// Structured data for LocalBusiness (for local SEO)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  "name": "Skytz Consulting",
  "image": `${SITE_URL}/brand/Logo-Skytz-Consulting.png`,
  "url": SITE_URL,
  "priceRange": "$$$$",
  "description": "Specialist recruitment firm for Sales Engineering, technical sales, and engineering leadership positions. Direct search methodology with proven track record since 2015.",
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
    { "@type": "Country", "name": "Germany" },
    { "@type": "Country", "name": "Switzerland" },
    { "@type": "Country", "name": "United States" }
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
  "name": "Sales Engineer Direct Search",
  "description": "Direct search and executive recruitment for Sales Engineers, technical sales professionals, and engineering leadership roles in DACH and USA.",
  "areaServed": ["Germany", "Switzerland", "Austria", "United States"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Recruitment Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sales Engineer Recruitment",
          "description": "Direct search for Sales Engineers with technical expertise and commercial acumen"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Technical Sales Leadership Search",
          "description": "Executive search for VP Sales, Sales Directors, and Regional Sales Managers"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Engineering Management Recruitment",
          "description": "Headhunting for technical leadership and managing director positions"
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
  const lang = i18n.language || 'de';
  
  const defaultTitle = lang === 'de' 
    ? 'Sales Engineer Recruiter | Skytz Consulting – Direktsuche DACH & USA'
    : lang === 'fr'
    ? 'Recruteur Sales Engineer | Skytz Consulting – Recherche Directe'
    : 'Sales Engineer Recruiter | Skytz Consulting – Direct Search DACH & USA';
    
  const defaultDescription = lang === 'de'
    ? 'Spezialisierter Personalberater für Sales Engineers und technische Führungspositionen. Direktsuche ohne Datenbanken. Deutschland, Schweiz, USA. Seit 2015.'
    : lang === 'fr'
    ? 'Recruteur spécialisé pour Sales Engineers et postes de direction technique. Recherche directe. Allemagne, Suisse, USA. Depuis 2015.'
    : 'Specialist recruiter for Sales Engineers and technical leadership positions. Direct search methodology. Germany, Switzerland, USA. Since 2015.';

  const pageTitle = title ? `${title} | ${SITE_NAME}` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageUrl = canonical || `${SITE_URL}${location.pathname}`;
  const pageImage = image || `${SITE_URL}/brand/Logo-Skytz-Consulting.png`;

  // Language-specific keywords meta
  const keywordsByLang = {
    en: 'sales engineer recruiter, sales engineering headhunter, technical sales recruiter, executive search Germany, direct search sales engineer, engineering recruitment DACH, sales engineer headhunter USA, presales engineer recruiter, solution engineer recruitment, technical sales executive search',
    de: 'Vertriebsingenieur Personalberater, Sales Engineer Recruiter, Headhunter technischer Vertrieb, Personalberatung Vertrieb Deutschland, Direktsuche Vertriebsleiter, Executive Search Sales Engineering, Personalvermittlung DACH, technischer Vertrieb Headhunter',
    fr: 'recruteur sales engineer, chasseur de têtes ventes techniques, cabinet recrutement ingénieur commercial, recherche directe sales engineer, recrutement leadership technique'
  };

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
    updateMeta('keywords', keywordsByLang[lang] || keywordsByLang.en);
    updateMeta('author', 'Philipp Hoffschröer, Skytz Consulting');
    updateMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    
    // Open Graph
    updateMeta('og:type', article ? 'article' : 'website', true);
    updateMeta('og:url', pageUrl, true);
    updateMeta('og:title', pageTitle, true);
    updateMeta('og:description', pageDescription, true);
    updateMeta('og:image', pageImage, true);
    updateMeta('og:site_name', SITE_NAME, true);
    updateMeta('og:locale', lang === 'de' ? 'de_DE' : lang === 'fr' ? 'fr_FR' : 'en_US', true);
    
    // Twitter
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:url', pageUrl);
    updateMeta('twitter:title', pageTitle);
    updateMeta('twitter:description', pageDescription);
    updateMeta('twitter:image', pageImage);
    
    // Geo meta
    updateMeta('geo.region', 'DE');
    updateMeta('geo.placename', 'Germany, Switzerland, USA');
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', pageUrl);
    
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
  }, [pageTitle, pageDescription, pageUrl, pageImage, lang, noindex, article]);

  return null; // This component doesn't render anything
}

// Page-specific SEO configurations
export const pageSEOConfig = {
  home: {
    en: {
      title: 'Sales Engineer Recruiter | Direct Search for Technical Sales Leadership',
      description: 'Specialist recruiter for Sales Engineers and engineering leadership. Direct search methodology – most placements from passive candidates. Germany, Switzerland, USA. Since 2015.'
    },
    de: {
      title: 'Sales Engineer Recruiter | Direktsuche für technische Vertriebsführung',
      description: 'Spezialisierter Personalberater für Sales Engineers und technische Führungskräfte. Direktsuche – die meisten Besetzungen aus passiven Kandidaten. Deutschland, Schweiz, USA. Seit 2015.'
    },
    fr: {
      title: 'Recruteur Sales Engineer | Recherche Directe Leadership Commercial Technique',
      description: 'Recruteur spécialisé pour Sales Engineers et leadership technique. Recherche directe – la plupart des placements de candidats passifs. Allemagne, Suisse, USA.'
    }
  },
  testimonials: {
    en: {
      title: 'Client References & Case Studies | Sales Engineer Recruitment Success',
      description: 'Proven track record with reference clients since 2016. 10+ placements at Megger Group. Real testimonials from managing directors and CEOs. Request reference calls.'
    },
    de: {
      title: 'Kundenreferenzen & Erfolgsgeschichten | Sales Engineer Recruiting Erfolge',
      description: 'Nachgewiesene Erfolgsbilanz mit Referenzkunden seit 2016. 10+ Besetzungen bei der Megger Group. Echte Testimonials von Geschäftsführern und CEOs.'
    },
    fr: {
      title: 'Références Clients & Études de Cas | Succès Recrutement Sales Engineer',
      description: 'Historique prouvé avec clients de référence depuis 2016. 10+ placements chez Megger Group. Témoignages réels de directeurs généraux.'
    }
  },
  about: {
    en: {
      title: 'About Skytz Consulting | Sales Engineering Recruitment Specialist Since 2015',
      description: 'Specialist recruitment for Sales Engineering and leadership roles. Direct search, documented trade-offs, honest feedback. DACH market expertise with US base.'
    },
    de: {
      title: 'Über Skytz Consulting | Sales Engineering Personalberatung seit 2015',
      description: 'Spezialisierte Personalberatung für Sales Engineering und Führungsrollen. Direktsuche, dokumentierte Abwägungen, ehrliches Feedback. DACH-Expertise.'
    },
    fr: {
      title: 'À Propos de Skytz Consulting | Spécialiste Recrutement Sales Engineering depuis 2015',
      description: 'Recrutement spécialisé pour Sales Engineering et postes de direction. Recherche directe, compromis documentés, feedback honnête.'
    }
  },
  contact: {
    en: {
      title: 'Meet Philipp | Schedule a Call with Skytz Consulting',
      description: 'Book a direct conversation about your Sales Engineer or technical leadership hiring needs. No gatekeepers, no forms. Free initial consultation.'
    },
    de: {
      title: 'Philipp treffen | Gespräch mit Skytz Consulting vereinbaren',
      description: 'Buchen Sie ein direktes Gespräch über Ihre Sales Engineer oder technische Führungskräfte-Anforderungen. Keine Gatekeeper, keine Formulare. Kostenlose Erstberatung.'
    },
    fr: {
      title: 'Rencontrer Philipp | Planifier un Appel avec Skytz Consulting',
      description: 'Réservez une conversation directe sur vos besoins en recrutement Sales Engineer ou leadership technique. Sans intermédiaire, sans formulaire.'
    }
  },
  privacy: {
    en: {
      title: 'Privacy Policy | GDPR & CCPA Compliant',
      description: 'Privacy Policy for Skytz Consulting. GDPR and CCPA compliant data handling. Learn how we protect your personal information.'
    },
    de: {
      title: 'Datenschutzerklärung | DSGVO & CCPA konform',
      description: 'Datenschutzerklärung von Skytz Consulting. DSGVO und CCPA-konforme Datenverarbeitung. Erfahren Sie, wie wir Ihre Daten schützen.'
    },
    fr: {
      title: 'Politique de Confidentialité | Conforme RGPD & CCPA',
      description: 'Politique de confidentialité de Skytz Consulting. Traitement des données conforme au RGPD et CCPA.'
    }
  },
  terms: {
    en: {
      title: 'Terms & Conditions | Skytz Consulting',
      description: 'Terms and Conditions for Skytz Consulting recruitment services. Legal framework for executive search engagements.'
    },
    de: {
      title: 'Allgemeine Geschäftsbedingungen | Skytz Consulting',
      description: 'AGB für Skytz Consulting Personalberatung. Rechtlicher Rahmen für Executive Search Mandate.'
    },
    fr: {
      title: 'Conditions Générales | Skytz Consulting',
      description: 'Conditions générales pour les services de recrutement Skytz Consulting.'
    }
  },
  vacancies: {
    en: {
      title: 'Open Positions | Skytz Consulting',
      description: 'Current open positions. Download role briefs as PDFs and contact us for details.'
    },
    de: {
      title: 'Offene Positionen | Skytz Consulting',
      description: 'Aktuelle offene Positionen. Rollenprofile als PDF herunterladen und bei Fragen Kontakt aufnehmen.'
    },
    fr: {
      title: 'Postes Ouverts | Skytz Consulting',
      description: 'Postes actuellement ouverts. Téléchargez les descriptifs en PDF et contactez-nous pour plus de détails.'
    }
  }
};
