import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, ArrowRight, MessageSquare, FileText, Calendar } from 'lucide-react';
import BentoCard from '../components/ui/BentoCard';
import SEO from '../components/SEO';
import { pageSEOConfig } from '../content/pageSEOConfig';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

export default function Contact() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'de';
  const seoConfig = pageSEOConfig.contact[lang] || pageSEOConfig.contact.en;

  useEffect(() => {
    document.title = `${t('nav.contact')} | Skytz Consulting`;
  }, [t]);

  return (
    <>
      <SEO title={seoConfig.title} description={seoConfig.description} />
      <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p variants={fadeIn} className="text-sm font-medium uppercase tracking-wider text-blueprint-600">
              {t('contact.subtitle')}
            </motion.p>
            <motion.h1 variants={fadeIn} className="mt-4 text-4xl font-bold tracking-tighter text-slate-900 md:text-5xl lg:text-6xl">
              {t('contact.title')}
            </motion.h1>
            <motion.p variants={fadeIn} className="mt-6 text-lg text-slate-600">
              {t('contact.description')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid gap-6 md:grid-cols-2"
          >
            {/* Primary Contact */}
            <motion.div variants={fadeIn} className="md:col-span-2">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Calendar - Primary - Takes 2 columns */}
                <a 
                  href="https://calendar.app.google/UCMkTD9Qe2Y4TMMF7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:col-span-2 flex flex-col items-center justify-center p-10 rounded-2xl bg-gradient-to-br from-blueprint-600 to-blueprint-700 hover:from-blueprint-700 hover:to-blueprint-800 transition-all shadow-xl shadow-blueprint-600/30 hover:shadow-2xl hover:shadow-blueprint-600/40 border border-blueprint-500 group"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 mb-4 group-hover:bg-white/30 transition-colors">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-center text-2xl font-bold text-white mb-3">{t('contact.booking.label')}</h3>
                  <p className="text-center text-blueprint-100 group-hover:text-white transition-colors">
                    {t('contact.booking.action')}
                  </p>
                </a>

                {/* Email Option */}
                <BentoCard>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blueprint-50 mb-6">
                    <Mail className="h-6 w-6 text-blueprint-600" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900">Email</h2>
                  <p className="mt-2 text-slate-600 text-sm">{t('contact.getInTouch.description')}</p>
                  
                  <a 
                    href="mailto:info@skytz-consulting.com"
                    className="mt-6 flex items-center justify-center w-full px-4 py-3 rounded-xl bg-slate-50 hover:bg-blueprint-50 transition-colors group"
                  >
                    <p className="font-medium text-slate-900 group-hover:text-blueprint-600 transition-colors text-sm">
                      info@skytz-consulting.com
                    </p>
                  </a>
                  
                  <p className="mt-4 text-xs text-slate-500">{t('contact.noCommitment')}</p>
                </BentoCard>
              </div>
            </motion.div>

            {/* What to Include */}
            <motion.div variants={fadeIn}>
              <BentoCard className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 mb-6">
                  <FileText className="h-6 w-6 text-emerald-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">{t('contact.fasterAlignment.title')}</h2>
                <p className="mt-2 text-slate-600">{t('contact.fasterAlignment.description')}</p>
                
                <div className="mt-6 space-y-3">
                  {['roleTitle', 'location', 'seniority', 'timeline', 'compensation'].map((key) => (
                    <div key={key} className="flex items-center gap-3 text-slate-600">
                      <ArrowRight className="h-4 w-4 text-blueprint-500 shrink-0" />
                      <span>{t(`contact.fasterAlignment.items.${key}`)}</span>
                    </div>
                  ))}
                </div>
              </BentoCard>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
