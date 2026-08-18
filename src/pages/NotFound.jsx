import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import useLanguage from '../hooks/useLanguage';

// Rendered for any unsupported /:lang segment (e.g. /xx) and for any
// sub-path that doesn't match a known route within a supported language
// (e.g. /de/abuot). Always noindexed — this is a soft-404 handled client
// side by the SPA; see App.jsx for the routing guards that render it.
export default function NotFound() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLanguage();

  return (
    <>
      <SEO
        title={t('notFound.title', 'Page Not Found')}
        description={t('notFound.description', "The page you're looking for doesn't exist or may have moved.")}
        noindex
      />
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
        <div className="text-center px-6 py-24">
          <p className="text-sm font-semibold text-blueprint-600 mb-2">404</p>
          <h1 className="text-3xl font-bold tracking-tighter text-slate-900 md:text-4xl mb-4">
            {t('notFound.title', 'Page Not Found')}
          </h1>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">
            {t('notFound.description', "The page you're looking for doesn't exist or may have moved.")}
          </p>
          <Link
            to={getLocalizedPath('')}
            className="inline-flex items-center px-5 py-3 bg-blueprint-600 hover:bg-blueprint-700 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            {t('notFound.cta', 'Back to homepage')}
          </Link>
        </div>
      </div>
    </>
  );
}
