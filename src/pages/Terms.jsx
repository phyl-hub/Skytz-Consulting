import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export default function Terms() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('nav.terms')} | Skytz Consulting`;
  }, [t]);

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-3xl font-bold tracking-tighter text-slate-900 md:text-4xl">
              {t('terms.title')}
            </h1>
            <p className="mt-4 text-sm text-slate-500">{t('terms.lastUpdated')}</p>

            <div className="prose prose-slate mt-8 max-w-none">
              <p className="text-slate-600 leading-relaxed">
                {t('terms.intro')}
              </p>

              <h2 className="mt-8 text-xl font-bold text-slate-900">{t('terms.scope.title')}</h2>
              <p className="text-slate-600">{t('terms.scope.description')}</p>

              <h2 className="mt-8 text-xl font-bold text-slate-900">{t('terms.noGuarantee.title')}</h2>
              <p className="text-slate-600">{t('terms.noGuarantee.description')}</p>

              <h2 className="mt-8 text-xl font-bold text-slate-900">{t('terms.ip.title')}</h2>
              <p className="text-slate-600">{t('terms.ip.description')}</p>

              <h2 className="mt-8 text-xl font-bold text-slate-900">{t('terms.liability.title')}</h2>
              <p className="text-slate-600">{t('terms.liability.description')}</p>

              <h2 className="mt-8 text-xl font-bold text-slate-900">{t('terms.externalLinks.title')}</h2>
              <p className="text-slate-600">{t('terms.externalLinks.description')}</p>

              <h2 className="mt-8 text-xl font-bold text-slate-900">{t('terms.governing.title')}</h2>
              <p className="text-slate-600">{t('terms.governing.description')}</p>

              <h2 className="mt-8 text-xl font-bold text-slate-900">{t('terms.contact.title')}</h2>
              <p className="text-slate-600">
                {t('terms.contact.description')}: <a href="mailto:contact@skytz.de" className="text-blueprint-600 hover:underline">contact@skytz.de</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
