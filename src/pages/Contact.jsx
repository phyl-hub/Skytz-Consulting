import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageSquare, FileText } from 'lucide-react';
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

export default function Contact() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('nav.contact')} | Skytz Consulting`;
  }, [t]);

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
              {t('contact.subtitle')}
            </motion.p>
            <motion.h1 variants={fadeIn} className="mt-4 text-4xl font-bold tracking-tighter text-slate-900 md:text-5xl lg:text-6xl">
              {t('contact.title')}
            </motion.h1>
            <motion.p variants={fadeIn} className="mt-6 text-lg text-slate-600">
              {t('contact.description')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid gap-6 md:grid-cols-2"
          >
            {/* Primary Contact */}
            <motion.div variants={fadeIn}>
              <BentoCard className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blueprint-50 mb-6">
                  <MessageSquare className="h-6 w-6 text-blueprint-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">{t('contact.getInTouch.title')}</h2>
                <p className="mt-2 text-slate-600">{t('contact.getInTouch.description')}</p>
                
                <div className="mt-8 space-y-4">
                  <a 
                    href="mailto:contact@skytz.de"
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
                      <Mail className="h-5 w-5 text-blueprint-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <p className="font-medium text-slate-900 group-hover:text-blueprint-600 transition-colors">
                        contact@skytz.de
                      </p>
                    </div>
                  </a>
                  
                  <a 
                    href="tel:+4917680178907"
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
                      <Phone className="h-5 w-5 text-blueprint-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{t('contact.phone')}</p>
                      <p className="font-medium text-slate-900 group-hover:text-blueprint-600 transition-colors">
                        +49 176 8017 8907
                      </p>
                    </div>
                  </a>
                </div>
                
                <p className="mt-6 text-sm text-slate-500">{t('contact.noCommitment')}</p>
              </BentoCard>
            </motion.div>

            {/* What to Include */}
            <motion.div variants={fadeIn}>
              <BentoCard className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 mb-6">
                  <FileText className="h-6 w-6 text-emerald-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">{t('contact.fasterAlignment.title')}</h2>
                <p className="mt-2 text-slate-600">{t('contact.fasterAlignment.description')}</p>
                
                <div className="mt-6 space-y-3">
                  {['roleTitle', 'location', 'seniority', 'timeline', 'compensation'].map((key) => (
                    <div key={key} className="flex items-center gap-3 text-slate-600">
                      <ArrowRight className="h-4 w-4 text-blueprint-500 shrink-0" />
                      <span>{t(`contact.fasterAlignment.items.${key}`)}</span>
                    </div>
                  ))}
                </div>
              </BentoCard>
            </motion.div>
          </motion.div>

          {/* Office & Hours */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-6 grid gap-6 md:grid-cols-2"
          >
            <motion.div variants={fadeIn}>
              <BentoCard>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                    <MapPin className="h-5 w-5 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{t('contact.office.title')}</h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1 mb-2">Strategic Global Base</p>
                    <address className="text-sm not-italic text-slate-600">
                      Laurasia LLC<br />
                      1309 Coffeen Avenue STE 1200<br />
                      Sheridan, WY 82801, USA
                    </address>
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            <motion.div variants={fadeIn}>
              <BentoCard>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blueprint-50">
                    <MapPin className="h-5 w-5 text-blueprint-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">DACH Executive Partner</h3>
                    <p className="mt-1 text-sm text-slate-700 font-medium">
                      Philipp Hoffschröer
                    </p>
                    <p className="text-sm text-slate-500">
                      Germany · Switzerland · Austria
                    </p>
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            <motion.div variants={fadeIn}>
              <BentoCard>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                    <Clock className="h-5 w-5 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{t('contact.hours.title')}</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {t('contact.hours.weekdays')}<br />
                      {t('contact.hours.timezone')}
                    </p>
                  </div>
                </div>
              </BentoCard>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
