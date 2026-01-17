import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './i18n';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Testimonials from './pages/Testimonials';
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

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <BrowserRouter>
        <Routes>
          {/* Language-prefixed routes */}
          <Route path="/:lang" element={<Layout><Home /></Layout>} />
          <Route path="/:lang/testimonials" element={<Layout><Testimonials /></Layout>} />
          <Route path="/:lang/about" element={<Layout><About /></Layout>} />
          <Route path="/:lang/meet-philipp" element={<Layout><Contact /></Layout>} />
          <Route path="/:lang/privacy" element={<Layout><Privacy /></Layout>} />
          <Route path="/:lang/terms" element={<Layout><Terms /></Layout>} />
          
          {/* Direct access routes (without language prefix) - redirect to default language */}
          <Route path="/meet-philipp" element={<Navigate to="/de/meet-philipp" replace />} />
          <Route path="/testimonials" element={<Navigate to="/de/testimonials" replace />} />
          <Route path="/about" element={<Navigate to="/de/about" replace />} />
          <Route path="/privacy" element={<Navigate to="/de/privacy" replace />} />
          <Route path="/terms" element={<Navigate to="/de/terms" replace />} />
          
          {/* Redirect root to default language */}
          <Route path="/" element={<Navigate to="/de" replace />} />
          <Route path="*" element={<Navigate to="/de" replace />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
