import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const trustCards = [
  { key: 'megger', accent: 'emerald' },
  { key: 'sebakmt', accent: 'amber' },
  { key: 'otopront', accent: 'sky' },
  { key: 'swr', accent: 'violet' },
  { key: 'swiss', accent: 'rose' },
];

const accentStyles = {
  emerald: 'border-emerald-500/30 bg-emerald-500/5',
  amber: 'border-amber-500/30 bg-amber-500/5',
  sky: 'border-sky-500/30 bg-sky-500/5',
  violet: 'border-violet-500/30 bg-violet-500/5',
  rose: 'border-rose-500/30 bg-rose-500/5',
};

const badgeStyles = {
  emerald: 'bg-emerald-500/20 text-emerald-300',
  amber: 'bg-amber-500/20 text-amber-300',
  sky: 'bg-sky-500/20 text-sky-300',
  violet: 'bg-violet-500/20 text-violet-300',
  rose: 'bg-rose-500/20 text-rose-300',
};

export default function ProofCarousel() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-slate-950 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Verified Track Record
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real partnerships. Named references. Documented outcomes.
          </p>
        </motion.div>

        {/* Bento Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          
          {/* Megger - Featured large card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`md:col-span-2 lg:col-span-2 rounded-2xl border p-8 ${accentStyles.emerald}`}
          >
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${badgeStyles.emerald}`}>
              {t('trust.megger.badge')}
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">{t('trust.megger.title')}</h3>
            <p className="text-emerald-400 text-sm font-medium mb-3">{t('trust.megger.subtitle')}</p>
            <p className="text-slate-300 mb-4">{t('trust.megger.description')}</p>
            <p className="text-slate-500 text-sm italic">— {t('trust.megger.contact')}</p>
          </motion.div>

          {/* SebaKMT - Special "dual perspective" */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`rounded-2xl border p-6 ${accentStyles.amber}`}
          >
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${badgeStyles.amber}`}>
              {t('trust.sebakmt.badge')}
            </span>
            <h3 className="text-xl font-bold text-white mb-2">{t('trust.sebakmt.title')}</h3>
            <p className="text-amber-400 text-sm font-medium mb-3">{t('trust.sebakmt.subtitle')}</p>
            <p className="text-slate-300 text-sm mb-4">{t('trust.sebakmt.description')}</p>
            <p className="text-slate-500 text-xs italic">— {t('trust.sebakmt.contact')}</p>
          </motion.div>

          {/* Otopront */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`rounded-2xl border p-6 ${accentStyles.sky}`}
          >
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${badgeStyles.sky}`}>
              {t('trust.otopront.badge')}
            </span>
            <h3 className="text-xl font-bold text-white mb-2">{t('trust.otopront.title')}</h3>
            <p className="text-sky-400 text-sm font-medium mb-3">{t('trust.otopront.subtitle')}</p>
            <p className="text-slate-300 text-sm mb-4">{t('trust.otopront.description')}</p>
            <p className="text-slate-500 text-xs italic">— {t('trust.otopront.contact')}</p>
          </motion.div>

          {/* SWR */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`rounded-2xl border p-6 ${accentStyles.violet}`}
          >
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${badgeStyles.violet}`}>
              {t('trust.swr.badge')}
            </span>
            <h3 className="text-xl font-bold text-white mb-2">{t('trust.swr.title')}</h3>
            <p className="text-violet-400 text-sm font-medium mb-3">{t('trust.swr.subtitle')}</p>
            <p className="text-slate-300 text-sm mb-4">{t('trust.swr.description')}</p>
            <p className="text-slate-500 text-xs italic">— {t('trust.swr.contact')}</p>
          </motion.div>

          {/* Swiss Family Office - Confidential */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`rounded-2xl border p-6 ${accentStyles.rose}`}
          >
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${badgeStyles.rose}`}>
              {t('trust.swiss.badge')}
            </span>
            <h3 className="text-xl font-bold text-white mb-2">{t('trust.swiss.title')}</h3>
            <p className="text-rose-400 text-sm font-medium mb-3">{t('trust.swiss.subtitle')}</p>
            <p className="text-slate-300 text-sm">{t('trust.swiss.description')}</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
