import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const SUPPORTED_LANGS = ['en', 'de'];
const DEFAULT_LANG = 'en'; // English is the primary language of the site

export function useLanguage() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  // Extract language from URL path
  const pathLang = location.pathname.split('/')[1];
  const currentLang = SUPPORTED_LANGS.includes(pathLang) ? pathLang : null;

  useEffect(() => {
    // Sync i18n with URL
    if (currentLang && currentLang !== i18n.language) {
      i18n.changeLanguage(currentLang);
    }
  }, [currentLang, i18n]);

  const switchLanguage = (newLang) => {
    if (!SUPPORTED_LANGS.includes(newLang)) return;

    // Get current path without language prefix
    const pathParts = location.pathname.split('/').filter(Boolean);
    const hasLangPrefix = SUPPORTED_LANGS.includes(pathParts[0]);
    const pathWithoutLang = hasLangPrefix ? pathParts.slice(1).join('/') : pathParts.join('/');

    // Navigate to new language path
    const newPath = `/${newLang}${pathWithoutLang ? '/' + pathWithoutLang : ''}`;
    navigate(`${newPath}${location.search}${location.hash}`);
    i18n.changeLanguage(newLang);
  };

  const getLocalizedPath = (path) => {
    const lang = currentLang || i18n.language || DEFAULT_LANG;
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `/${lang}${cleanPath ? '/' + cleanPath : ''}`;
  };

  return {
    currentLang: currentLang || i18n.language || DEFAULT_LANG,
    switchLanguage,
    getLocalizedPath,
    supportedLangs: SUPPORTED_LANGS,
  };
}

export default useLanguage;
