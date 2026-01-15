import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import useLanguage from '../../hooks/useLanguage';

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const { getLocalizedPath, currentLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: '', label: t('nav.home') },
    { to: 'case-studies', label: t('nav.caseStudies') },
    { to: 'about', label: t('nav.about') },
    { to: 'contact', label: t('nav.contact') },
  ];

  const isActive = (path) => {
    const localizedPath = getLocalizedPath(path);
    return location.pathname === localizedPath || location.pathname === localizedPath + '/';
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-50/90 backdrop-blur-md border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to={getLocalizedPath('')} className="flex items-center gap-1.5">
          <span className="text-xl font-bold text-slate-900">Skytz</span>
          <span className="text-blueprint-600 font-semibold">Consulting</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={getLocalizedPath(link.to)}
              className={`text-sm font-medium transition-colors ${
                isActive(link.to)
                  ? 'text-blueprint-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <Link
            to={getLocalizedPath('contact')}
            className="hidden sm:inline-flex items-center px-5 py-2.5 bg-blueprint-600 hover:bg-blueprint-700 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            {t('hero.cta.primary')}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 bg-white"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={getLocalizedPath(link.to)}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 text-sm font-medium ${
                    isActive(link.to) ? 'text-blueprint-600' : 'text-slate-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to={getLocalizedPath('contact')}
                onClick={() => setMobileOpen(false)}
                className="block w-full mt-4 px-5 py-3 bg-blueprint-600 text-white text-sm font-semibold rounded-lg text-center"
              >
                {t('hero.cta.primary')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
