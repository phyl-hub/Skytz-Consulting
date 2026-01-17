import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function BentoHero() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-slate-950 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          
          {/* Main Hero Tile - spans 8 cols */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 border border-slate-700/50"
          >
            <p className="text-emerald-400 text-sm font-medium tracking-wide mb-4">
              {t('hero.tagline')}
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              {t('hero.headline')}
            </h1>
            <p className="text-slate-300 text-lg lg:text-xl max-w-2xl mb-8 leading-relaxed">
              {t('hero.subhead')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold rounded-xl transition-colors"
              >
                {t('hero.cta.primary')}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/testimonials"
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 hover:border-slate-500 text-white font-medium rounded-xl transition-colors"
              >
                {t('hero.cta.secondary')}
              </Link>
            </div>

            <p className="text-slate-500 text-sm italic">
              — {t('hero.signature')}
            </p>
          </motion.div>

          {/* Stats Stack - spans 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-6">
            
            {/* Stat 1: Passive Candidates */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1 bg-slate-900/80 backdrop-blur rounded-2xl p-6 border border-slate-700/50"
            >
              <div className="text-4xl lg:text-5xl font-bold text-emerald-400 mb-1">
                {t('stats.passive.value')}
              </div>
              <div className="text-white font-medium mb-1">{t('stats.passive.label')}</div>
              <div className="text-slate-400 text-sm">{t('stats.passive.subtext')}</div>
            </motion.div>

            {/* Stat 2: Rehire Rate */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 bg-slate-900/80 backdrop-blur rounded-2xl p-6 border border-slate-700/50"
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-1">
                {t('stats.rehire.value')}
              </div>
              <div className="text-white font-medium mb-1">{t('stats.rehire.label')}</div>
              <div className="text-slate-400 text-sm">{t('stats.rehire.subtext')}</div>
            </motion.div>

            {/* Stat 3: Since */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-1 bg-slate-900/80 backdrop-blur rounded-2xl p-6 border border-slate-700/50"
            >
              <div className="text-4xl lg:text-5xl font-bold text-slate-300 mb-1">
                {t('stats.since.value')}
              </div>
              <div className="text-white font-medium mb-1">{t('stats.since.label')}</div>
              <div className="text-slate-400 text-sm">{t('stats.since.subtext')}</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
