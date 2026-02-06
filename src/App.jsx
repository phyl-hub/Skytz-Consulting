import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const Home = lazy(() => import('./pages/Home'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Vacancies = lazy(() => import('./pages/Vacancies'));

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-blueprint-600 text-lg font-medium">Loading...</div>
    </div>
  );
}

// Layout wrapper for language-prefixed routes
function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

const SUPPORTED_LANGS = ['en', 'de', 'fr'];
const DEFAULT_LANG = 'de';

function normalizeLang(lang) {
  if (!lang) return null;
  const code = String(lang).toLowerCase().split('-')[0];
  return SUPPORTED_LANGS.includes(code) ? code : null;
}

function DetectedRedirect({ suffix = '' }) {
  const { i18n } = useTranslation();
  const detected = normalizeLang(i18n.resolvedLanguage || i18n.language) || DEFAULT_LANG;
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
  const effectiveSuffix = suffix || (hostname.startsWith('vacancies.') ? 'vacancies' : '');
  const path = effectiveSuffix ? `/${detected}/${effectiveSuffix}` : `/${detected}`;
  return <Navigate to={path} replace />;
}

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          {/* Language-prefixed routes */}
          <Route path="/:lang" element={<Layout><Home /></Layout>} />
          <Route path="/:lang/testimonials" element={<Layout><Testimonials /></Layout>} />
          <Route path="/:lang/about" element={<Layout><About /></Layout>} />
          <Route path="/:lang/meet-philipp" element={<Layout><Contact /></Layout>} />
          <Route path="/:lang/vacancies" element={<Layout><Vacancies /></Layout>} />
          <Route path="/:lang/privacy" element={<Layout><Privacy /></Layout>} />
          <Route path="/:lang/terms" element={<Layout><Terms /></Layout>} />
          
          {/* Direct access routes (without language prefix) - redirect to default language */}
          <Route path="/meet-philipp" element={<DetectedRedirect suffix="meet-philipp" />} />
          <Route path="/testimonials" element={<DetectedRedirect suffix="testimonials" />} />
          <Route path="/about" element={<DetectedRedirect suffix="about" />} />
          <Route path="/vacancies" element={<DetectedRedirect suffix="vacancies" />} />
          <Route path="/privacy" element={<DetectedRedirect suffix="privacy" />} />
          <Route path="/terms" element={<DetectedRedirect suffix="terms" />} />
          
          {/* Redirect root to default language */}
          <Route path="/" element={<DetectedRedirect />} />
          <Route path="*" element={<DetectedRedirect />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
