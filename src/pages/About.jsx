import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Users, TrendingUp, Award, Lightbulb, Building2 } from 'lucide-react';
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

export default function About() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('nav.about')} | Skytz Consulting`;
  }, [t]);

  const beliefs = [
    {
      icon: Target,
      title: t('about.beliefs.expertise.title'),
      description: t('about.beliefs.expertise.description')
    },
    {
      icon: Shield,
      title: t('about.beliefs.alignment.title'),
      description: t('about.beliefs.alignment.description')
    },
    {
      icon: Lightbulb,
      title: t('about.beliefs.decision.title'),
      description: t('about.beliefs.decision.description')
    }
  ];

  const operations = [
    {
      icon: Users,
      title: t('about.operations.direct.title'),
      description: t('about.operations.direct.description')
    },
    {
      icon: Shield,
      title: t('about.operations.documented.title'),
      description: t('about.operations.documented.description')
    },
    {
      icon: TrendingUp,
      title: t('about.operations.honest.title'),
      description: t('about.operations.honest.description')
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
              {t('about.subtitle')}
            </motion.p>
            <motion.h1 variants={fadeIn} className="mt-4 text-4xl font-bold tracking-tighter text-slate-900 md:text-5xl lg:text-6xl">
              {t('about.title')}
            </motion.h1>
            <motion.p variants={fadeIn} className="mt-6 text-lg text-slate-600">
              {t('about.description')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Beliefs & Operations */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid gap-8 lg:grid-cols-2"
          >
            {/* What We Believe */}
            <motion.div variants={fadeIn}>
              <BentoCard className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blueprint-50">
                    <Award className="h-5 w-5 text-blueprint-600" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">{t('about.beliefsTitle')}</h2>
                </div>
                
                <div className="space-y-6">
                  {beliefs.map((belief, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                        <belief.icon className="h-4 w-4 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{belief.title}</h3>
                        <p className="mt-1 text-sm text-slate-600">{belief.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </BentoCard>
            </motion.div>

            {/* How We Operate */}
            <motion.div variants={fadeIn}>
              <BentoCard className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                    <TrendingUp className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">{t('about.operationsTitle')}</h2>
                </div>
                
                <div className="space-y-6">
                  {operations.map((op, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                        <op.icon className="h-4 w-4 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{op.title}</h3>
                        <p className="mt-1 text-sm text-slate-600">{op.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </BentoCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Legal Entity - Strategic Global vs Local Partner */}
      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <BentoCard className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Building2 className="h-5 w-5 text-slate-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">{t('about.legal.title')}</h2>
              </div>
              <p className="text-slate-600 mb-6">{t('about.legal.description')}</p>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Strategic Global Base</p>
                  <address className="text-sm not-italic text-slate-700">
                    Laurasia LLC<br />
                    1309 Coffeen Avenue STE 1200<br />
                    Sheridan, WY 82801, USA
                  </address>
                </div>
                <div className="p-4 bg-blueprint-50 rounded-xl border border-blueprint-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-blueprint-600 mb-1">DACH Executive Partner</p>
                  <p className="text-sm text-slate-700 font-medium">
                    Philipp Hoffschröer<br />
                    Germany · Switzerland · Austria
                  </p>
                </div>
              </div>
            </BentoCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
