import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Quote, ArrowRight, Building2, CheckCircle } from 'lucide-react';
import BentoCard from '../components/ui/BentoCard';

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

export default function CaseStudies() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('nav.caseStudies')} | Skytz Consulting`;
  }, [t]);

  const cases = [
    {
      company: 'Megger Germany GmbH',
      industry: t('caseStudies.megger.industry'),
      person: 'Friedrich Enkert',
      role: 'Managing Director',
      quote: t('proof.megger.quote'),
      outcome: t('caseStudies.megger.outcome'),
      highlights: [
        t('caseStudies.megger.highlight1'),
        t('caseStudies.megger.highlight2'),
        t('caseStudies.megger.highlight3')
      ]
    },
    {
      company: 'SWR (Südwestrundfunk)',
      industry: t('caseStudies.swr.industry'),
      person: 'Dirk Heesen',
      role: 'Head of Broadcast Technology',
      quote: t('proof.swr.quote'),
      outcome: t('caseStudies.swr.outcome'),
      highlights: [
        t('caseStudies.swr.highlight1'),
        t('caseStudies.swr.highlight2'),
        t('caseStudies.swr.highlight3')
      ]
    },
    {
      company: 'SebaKMT',
      industry: t('caseStudies.sebakmt.industry'),
      person: 'Sascha Kuflik',
      role: 'Managing Director',
      quote: t('proof.dualPerspective.quote'),
      outcome: t('caseStudies.sebakmt.outcome'),
      highlights: [
        t('caseStudies.sebakmt.highlight1'),
        t('caseStudies.sebakmt.highlight2'),
        t('caseStudies.sebakmt.highlight3')
      ]
    },
    {
      company: 'Otopront',
      industry: t('caseStudies.otopront.industry'),
      person: 'Carlo Happersberger',
      role: 'Managing Director',
      quote: t('proof.otopront.quote'),
      outcome: t('caseStudies.otopront.outcome'),
      highlights: [
        t('caseStudies.otopront.highlight1'),
        t('caseStudies.otopront.highlight2'),
        t('caseStudies.otopront.highlight3')
      ]
    }
  ];

  return (
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
              {t('caseStudies.subtitle')}
            </motion.p>
            <motion.h1 variants={fadeIn} className="mt-4 text-4xl font-bold tracking-tighter text-slate-900 md:text-5xl lg:text-6xl">
              {t('caseStudies.title')}
            </motion.h1>
            <motion.p variants={fadeIn} className="mt-6 text-lg text-slate-600">
              {t('caseStudies.description')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-8"
          >
            {cases.map((c, index) => (
              <motion.div key={c.company} variants={fadeIn}>
                <BentoCard className="p-0 overflow-hidden">
                  <div className="grid md:grid-cols-3">
                    {/* Company Info */}
                    <div className="p-8 md:border-r border-slate-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blueprint-50">
                          <Building2 className="h-6 w-6 text-blueprint-600" />
                        </div>
                        <div>
                          <h2 className="font-bold text-slate-900">{c.company}</h2>
                          <p className="text-sm text-slate-500">{c.industry}</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-slate-200">
                        <p className="text-sm font-medium text-slate-900">{c.person}</p>
                        <p className="text-sm text-slate-500">{c.role}</p>
                      </div>
                      
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm font-medium text-emerald-700">{c.outcome}</span>
                      </div>
                    </div>
                    
                    {/* Quote */}
                    <div className="md:col-span-2 p-8 bg-slate-50/50">
                      <div className="flex gap-4">
                        <Quote className="h-8 w-8 text-blueprint-200 shrink-0" />
                        <div>
                          <p className="text-slate-700 italic leading-relaxed">
                            "{c.quote}"
                          </p>
                          
                          <div className="mt-6 space-y-2">
                            {c.highlights.map((h, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                <ArrowRight className="h-4 w-4 text-blueprint-500" />
                                {h}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </BentoCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reference CTA */}
      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              {t('caseStudies.cta.title')}
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              {t('caseStudies.cta.description')}
            </p>
            <a
              href="mailto:contact@skytz.de"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
            >
              {t('caseStudies.cta.button')}
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
