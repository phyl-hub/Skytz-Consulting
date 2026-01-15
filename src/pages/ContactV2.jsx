import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef, useEffect } from 'react';

export default function Contact() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    document.title = 'Contact | Skytz Consulting';
  }, []);

  return (
    <section ref={ref} className="bg-slate-950 py-20 lg:py-28 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Email */}
          <motion.a
            href="mailto:info@skytz-consulting.com"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{t('contact.email')}</h3>
            <p className="text-emerald-400 font-medium">info@skytz-consulting.com</p>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+13074290181"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{t('contact.phone')}</h3>
            <p className="text-emerald-400 font-medium">+1 307-429-0181</p>
          </motion.a>

          {/* Calendly */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">{t('contact.calendly')}</h3>
            <p className="text-emerald-100 mb-6 max-w-md mx-auto">
              {t('contact.hint')}
            </p>
            <a
              href="mailto:info@skytz-consulting.com?subject=Search Inquiry"
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-slate-100 text-emerald-700 font-semibold rounded-xl transition-colors"
            >
              {t('hero.cta.primary')}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Address */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center text-slate-500 text-sm"
        >
          <p className="mb-1">Skytz Consulting — a brand of Laurasia LLC</p>
          <p>1309 Coffeen Avenue STE 1200, Sheridan, WY 82801, USA</p>
        </motion.div>
      </div>
    </section>
  );
}
