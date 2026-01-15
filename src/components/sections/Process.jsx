import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { Target, Map, Phone, FileCheck } from 'lucide-react';

export default function Process() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    { key: 'calibration', icon: Target, num: '01' },
    { key: 'mapping', icon: Map, num: '02' },
    { key: 'outreach', icon: Phone, num: '03' },
    { key: 'shortlist', icon: FileCheck, num: '04' },
  ];

  return (
    <section ref={ref} className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            {t('process.title')}
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </motion.div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-slate-300 to-transparent -translate-x-6 z-0" />
                )}
                
                <div className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-blueprint-300 hover:shadow-lg transition-all duration-300 z-10">
                  {/* Step number & icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blueprint-50 border border-blueprint-200 flex items-center justify-center group-hover:bg-blueprint-100 transition-colors">
                      <Icon className="w-5 h-5 text-blueprint-600" />
                    </div>
                    <span className="text-3xl font-bold text-slate-200 group-hover:text-blueprint-200 transition-colors">
                      {step.num}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {t(`process.steps.${step.key}.title`)}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t(`process.steps.${step.key}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
