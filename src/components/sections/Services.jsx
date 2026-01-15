import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { Check, Users, Building2, Settings } from 'lucide-react';

export default function Services() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const serviceBlocks = [
    { key: 'salesEngineering', icon: Users },
    { key: 'leadership', icon: Building2 },
  ];

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {serviceBlocks.map((block, i) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={block.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-blueprint-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-blueprint-100 text-blueprint-600 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {t(`services.${block.key}.title`)}
                </h3>

                <ul className="space-y-3">
                  {t(`services.${block.key}.items`, { returnObjects: true }).map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-700">
                      <Check className="w-5 h-5 text-blueprint-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
