import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef, useEffect } from 'react';

export default function CaseStudies() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    document.title = 'Case Studies | Skytz Consulting';
  }, []);

  const cases = [
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

  const textStyles = {
    emerald: 'text-emerald-400',
    amber: 'text-amber-400',
    sky: 'text-sky-400',
    violet: 'text-violet-400',
    rose: 'text-rose-400',
  };

  return (
    <section ref={ref} className="bg-slate-950 py-20 lg:py-28 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('nav.caseStudies')}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real partnerships. Named references. Documented outcomes.
          </p>
        </motion.div>

        {/* Cases */}
        <div className="space-y-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl border p-8 ${accentStyles[c.accent]}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${badgeStyles[c.accent]}`}>
                    {t(`trust.${c.key}.badge`)}
                  </span>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {t(`trust.${c.key}.title`)}
                  </h2>
                  <p className={`text-sm font-medium mb-3 ${textStyles[c.accent]}`}>
                    {t(`trust.${c.key}.subtitle`)}
                  </p>
                  <p className="text-slate-300 mb-4 max-w-2xl">
                    {t(`trust.${c.key}.description`)}
                  </p>
                  {t(`trust.${c.key}.contact`, { defaultValue: '' }) && (
                    <p className="text-slate-500 text-sm italic">
                      — {t(`trust.${c.key}.contact`)}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
