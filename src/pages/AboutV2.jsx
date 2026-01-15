import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef, useEffect } from 'react';

export default function About() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    document.title = 'About | Skytz Consulting';
  }, []);

  return (
    <section ref={ref} className="bg-slate-950 py-20 lg:py-28 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('nav.about')}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Skytz Consulting is a specialist search firm focused exclusively on 
            Sales Engineering, Technical Sales, and Leadership roles for engineering companies.
          </p>
        </motion.div>

        {/* Founder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Philipp Hoffschröer</h2>
          <p className="text-emerald-400 text-sm font-medium mb-4">Founder & Principal Consultant</p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Since 2015, I've specialized in one thing: placing Sales Engineers, 
            Technical Sales professionals, and commercial leadership for engineering companies 
            across Germany, Switzerland, and the United States.
          </p>
          <p className="text-slate-300 leading-relaxed">
            I don't run a factory. Every search is conducted personally — no hand-offs, 
            no junior researchers, no sub-contractors. When you work with me, 
            you get my network, my judgment, and my commitment.
          </p>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Philosophy</h2>
          <ul className="space-y-4 text-slate-300">
            <li className="flex gap-3">
              <span className="text-emerald-400">→</span>
              <span><strong className="text-white">Direct search only.</strong> 85% of my placements come from passive candidates who weren't looking.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400">→</span>
              <span><strong className="text-white">Narrow focus.</strong> I only work in technical/engineering B2B contexts. If it's outside my expertise, I'll tell you.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400">→</span>
              <span><strong className="text-white">Long-term thinking.</strong> 95% of my clients return. That only happens when placements stick.</span>
            </li>
          </ul>
        </motion.div>

        {/* Legal Entity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Legal Entity</h2>
          <p className="text-slate-400 mb-2">
            Skytz Consulting is a brand of <strong className="text-white">Laurasia LLC</strong>
          </p>
          <p className="text-slate-500 text-sm">
            1309 Coffeen Avenue STE 1200, Sheridan, WY 82801, USA
          </p>
        </motion.div>
      </div>
    </section>
  );
}
