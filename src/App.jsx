import { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import './i18n';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-blueprint-600 text-lg font-medium">Loading...</div>
    </div>
  );
}

// Hreflang SEO: Injects proper link tags for Google's language detection
function HreflangTags() {
  const location = useLocation();
  const { lang } = useParams();
  const basePath = location.pathname.replace(`/${lang}`, '') || '/';
  const baseUrl = 'https://skytz-consulting.com';
  
  useEffect(() => {
    // Remove existing hreflang tags
    document.querySelectorAll('link[hreflang]').forEach(el => el.remove());
    
    // Language mappings with regional targets
    const languages = [
      { code: 'de', hreflang: 'de-DE' },
      { code: 'de', hreflang: 'de-CH' },
      { code: 'de', hreflang: 'de-AT' },
      { code: 'en', hreflang: 'en-US' },
      { code: 'en', hreflang: 'en-GB' },
      { code: 'fr', hreflang: 'fr-CH' },
      { code: 'fr', hreflang: 'fr-FR' },
    ];
    
    languages.forEach(({ code, hreflang }) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = hreflang;
      link.href = `${baseUrl}/${code}${basePath === '/' ? '' : basePath}`;
      document.head.appendChild(link);
    });
    
    // x-default fallback
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = `${baseUrl}/de${basePath === '/' ? '' : basePath}`;
    document.head.appendChild(defaultLink);
    
  }, [location.pathname, lang, basePath]);
  
  return null;
}

// Layout wrapper for language-prefixed routes
function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <HreflangTags />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <BrowserRouter>
        <Routes>
          {/* Language-prefixed routes */}
          <Route path="/:lang" element={<Layout><Home /></Layout>} />
          <Route path="/:lang/case-studies" element={<Layout><CaseStudies /></Layout>} />
          <Route path="/:lang/about" element={<Layout><About /></Layout>} />
          <Route path="/:lang/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/:lang/privacy" element={<Layout><Privacy /></Layout>} />
          <Route path="/:lang/terms" element={<Layout><Terms /></Layout>} />
          
          {/* Redirect root to default language */}
          <Route path="/" element={<Navigate to="/de" replace />} />
          <Route path="*" element={<Navigate to="/de" replace />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
