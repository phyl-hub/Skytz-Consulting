import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand & Legal */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white">Skytz</span>
              <span className="text-emerald-400 font-medium">Consulting</span>
            </div>
            <p className="text-slate-400 text-sm mb-2">
              {t('footer.legal')}
            </p>
            <p className="text-slate-500 text-xs">
              {t('footer.address')}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <a 
                href="mailto:info@skytz-consulting.com" 
                className="block text-slate-400 hover:text-emerald-400 transition-colors"
              >
                info@skytz-consulting.com
              </a>
              <a 
                href="tel:+13074290181" 
                className="block text-slate-400 hover:text-emerald-400 transition-colors"
              >
                +1 307-429-0181
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <div className="space-y-2 text-sm">
              <Link 
                to="/privacy" 
                className="block text-slate-400 hover:text-emerald-400 transition-colors"
              >
                {t('footer.links.privacy')}
              </Link>
              <Link 
                to="/terms" 
                className="block text-slate-400 hover:text-emerald-400 transition-colors"
              >
                {t('footer.links.terms')}
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm text-center">
            {t('footer.copyright', { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
