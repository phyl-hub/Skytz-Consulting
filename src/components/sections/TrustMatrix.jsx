import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { Quote, CheckCircle2 } from 'lucide-react';
import BentoCard from '../ui/BentoCard';

const proofItems = [
  { key: 'megger', accent: 'blueprint' },
  { key: 'swr', accent: 'green' },
  { key: 'sebakmt', accent: 'amber' },
  { key: 'otopront', accent: 'sky' },
  { key: 'eurasia', accent: 'rose' },
];

const accentConfig = {
  blueprint: { badge: 'bg-blueprint-100 text-blueprint-700', border: 'border-blueprint-200' },
  green: { badge: 'bg-green-100 text-green-700', border: 'border-green-200' },
  amber: { badge: 'bg-amber-100 text-amber-700', border: 'border-amber-200' },
  sky: { badge: 'bg-sky-100 text-sky-700', border: 'border-sky-200' },
  rose: { badge: 'bg-rose-100 text-rose-700', border: 'border-rose-200' },
};

export default function TrustMatrix() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Verified Track Record
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Real partnerships. Named references. Documented outcomes.
          </p>
        </motion.div>

        {/* Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Featured: Megger - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-blueprint-50 to-white rounded-2xl border border-blueprint-200 p-8"
          >
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${accentConfig.blueprint.badge}`}>
              {t('proof.megger.badge')}
            </span>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('proof.megger.title')}</h3>
            <p className="text-blueprint-600 text-sm font-medium mb-4">{t('proof.megger.subtitle')}</p>
            
            <div className="flex gap-3 mb-4">
              <Quote className="w-8 h-8 text-blueprint-300 flex-shrink-0" />
              <p className="text-slate-700 leading-relaxed italic">
                "{t('proof.megger.quote')}"
              </p>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-blueprint-100">
              <div>
                <p className="text-slate-900 font-medium">{t('proof.megger.contact')}</p>
                <p className="text-slate-500 text-sm">{t('proof.megger.role')}</p>
              </div>
              <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>{t('proof.megger.outcome')}</span>
              </div>
            </div>
          </motion.div>

          {/* SebaKMT - Dual Perspective */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`rounded-2xl border p-6 bg-white ${accentConfig.amber.border}`}
          >
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${accentConfig.amber.badge}`}>
              {t('proof.sebakmt.badge')}
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{t('proof.sebakmt.title')}</h3>
            <p className="text-amber-600 text-sm font-medium mb-3">{t('proof.sebakmt.subtitle')}</p>
            <p className="text-slate-600 text-sm mb-4 line-clamp-3">"{t('proof.sebakmt.quote')}"</p>
            <p className="text-slate-500 text-xs">— {t('proof.sebakmt.contact')}, {t('proof.sebakmt.role')}</p>
          </motion.div>

          {/* SWR */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`rounded-2xl border p-6 bg-white ${accentConfig.green.border}`}
          >
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${accentConfig.green.badge}`}>
              {t('proof.swr.badge')}
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{t('proof.swr.title')}</h3>
            <p className="text-green-600 text-sm font-medium mb-3">{t('proof.swr.subtitle')}</p>
            <p className="text-slate-600 text-sm mb-4 line-clamp-3">"{t('proof.swr.quote')}"</p>
            <p className="text-slate-500 text-xs">— {t('proof.swr.contact')}, {t('proof.swr.role')}</p>
          </motion.div>

          {/* Otopront */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`rounded-2xl border p-6 bg-white ${accentConfig.sky.border}`}
          >
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${accentConfig.sky.badge}`}>
              {t('proof.otopront.badge')}
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{t('proof.otopront.title')}</h3>
            <p className="text-sky-600 text-sm font-medium mb-3">{t('proof.otopront.subtitle')}</p>
            <p className="text-slate-600 text-sm mb-4 line-clamp-3">"{t('proof.otopront.quote')}"</p>
            <p className="text-slate-500 text-xs">— {t('proof.otopront.contact')}, {t('proof.otopront.role')}</p>
          </motion.div>

          {/* Eurasia Group AG */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`rounded-2xl border p-6 bg-gradient-to-br from-rose-50 to-white ${accentConfig.rose.border}`}
          >
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${accentConfig.rose.badge}`}>
              {t('proof.eurasia.badge')}
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{t('proof.eurasia.client')}</h3>
            <p className="text-rose-600 text-sm font-medium mb-3">{t('proof.eurasia.title')}</p>
            <p className="text-slate-600 text-sm mb-4 line-clamp-4">
              {t('proof.eurasia.description')}
            </p>
            <div className="flex items-center gap-2 text-rose-600 text-xs font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>{t('proof.eurasia.role')}</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
