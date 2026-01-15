import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

export default function ProcessSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    { key: 'calibration', icon: '01' },
    { key: 'mapping', icon: '02' },
    { key: 'outreach', icon: '03' },
    { key: 'shortlist', icon: '04' },
  ];

  return (
    <section ref={ref} className="bg-slate-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {t('process.title')}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </motion.div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Connector line (hidden on last item) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-emerald-500/50 to-transparent -translate-x-4 z-0" />
              )}
              
              <div className="relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors z-10">
                {/* Step number */}
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4">
                  <span className="text-emerald-400 font-bold text-lg">{step.icon}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {t(`process.steps.${step.key}.title`)}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t(`process.steps.${step.key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
