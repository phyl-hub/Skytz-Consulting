import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useLanguage from '../../hooks/useLanguage';

export default function Footer() {
  const { t } = useTranslation();
  const { getLocalizedPath, currentLang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand & Legal Entity */}
          <div>
            <div className="flex items-center gap-1.5 mb-4">
              <span className="text-xl font-bold text-slate-900">Skytz</span>
              <span className="text-blueprint-600 font-semibold">Consulting</span>
            </div>
            <p className="text-slate-600 text-sm mb-3 font-medium">
              {t('footer.legal')}
            </p>
            <address className="text-slate-400 text-xs not-italic leading-relaxed">
              {t('footer.address')}
            </address>
          </div>

          {/* Contact - DACH Partner */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-4">
              {currentLang === 'en' ? 'DACH Executive Partner' : currentLang === 'de' ? 'DACH Executive Partner' : 'Partenaire Exécutif DACH'}
            </h4>
            <div className="space-y-2 text-sm">
              <p className="text-slate-700 font-medium">Philipp Hoffschröer</p>
              <a 
                href="mailto:philipp@skytz.de" 
                className="block text-slate-600 hover:text-blueprint-600 transition-colors"
              >
                philipp@skytz.de
              </a>
              <a 
                href="tel:+4917680178907" 
                className="block text-slate-600 hover:text-blueprint-600 transition-colors"
              >
                +49 176 8017 8907
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Legal</h4>
            <div className="space-y-2 text-sm">
              <Link 
                to={getLocalizedPath('privacy')} 
                className="block text-slate-600 hover:text-blueprint-600 transition-colors"
              >
                {t('footer.links.privacy')}
              </Link>
              <Link 
                to={getLocalizedPath('terms')} 
                className="block text-slate-600 hover:text-blueprint-600 transition-colors"
              >
                {t('footer.links.terms')}
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-100">
          <p className="text-slate-400 text-sm text-center">
            {t('footer.copyright', { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
