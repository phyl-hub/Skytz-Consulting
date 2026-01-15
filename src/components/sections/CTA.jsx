import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import useLanguage from '../../hooks/useLanguage';

export default function CTA() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-slate-900 rounded-3xl p-10 lg:p-16 text-center"
        >
          {/* Grid background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(37, 99, 235, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(37, 99, 235, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '32px 32px',
            }}
          />
          
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              {t('cta.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to={getLocalizedPath('/contact')}
                className="inline-flex items-center px-8 py-4 bg-blueprint-600 hover:bg-blueprint-500 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-blueprint-600/30"
              >
                {t('cta.button')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <a
                href="mailto:info@skytz-consulting.com"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                {t('cta.email')}: info@skytz-consulting.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
