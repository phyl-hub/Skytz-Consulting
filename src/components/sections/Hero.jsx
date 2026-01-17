import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Users, Award, Calendar } from 'lucide-react';
import BentoCard from '../ui/BentoCard';
import GridBackground from '../ui/GridBackground';
import useLanguage from '../../hooks/useLanguage';

export default function Hero() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLanguage();

  return (
    <GridBackground className="min-h-screen flex items-center py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* 12-column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
          
          {/* TILE A: Main Hero (8 cols, 2 rows) */}
          <BentoCard 
            colSpan={6} 
            rowSpan={2} 
            variant="accent"
            className="md:col-span-8"
            delay={0}
          >
            <p className="text-blueprint-600 text-sm font-semibold tracking-wide mb-4">
              {t('hero.tagline')}
            </p>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-[1.1] mb-6 whitespace-pre-line">
              {t('hero.headline')}
            </h1>
            
            <p className="text-slate-600 text-lg lg:text-xl max-w-xl mb-8 leading-relaxed">
              {t('hero.subhead')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to={getLocalizedPath('/contact')}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-blueprint-600 hover:bg-blueprint-700 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-blueprint-600/20"
              >
                {t('hero.cta.primary')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to={getLocalizedPath('/testimonials')}
                className="inline-flex items-center justify-center px-6 py-3.5 border border-slate-300 hover:border-slate-400 text-slate-700 font-medium rounded-xl transition-colors"
              >
                {t('hero.cta.secondary')}
              </Link>
            </div>

            <p className="text-slate-500 text-sm">
              — {t('hero.signature')}
            </p>
          </BentoCard>

          {/* TILE B: Stats - Passive Candidates (4 cols) */}
          <BentoCard colSpan={4} variant="default" delay={0.1} className="md:col-span-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blueprint-50">
                <Users className="w-6 h-6 text-blueprint-600" />
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-1">
                  {t('stats.passive.value')}
                </div>
                <div className="text-slate-700 font-medium">{t('stats.passive.label')}</div>
                <div className="text-slate-500 text-sm mt-1">{t('stats.passive.subtext')}</div>
              </div>
            </div>
          </BentoCard>

          {/* TILE C: Stats - Rehire Rate (4 cols) */}
          <BentoCard colSpan={4} variant="default" delay={0.2} className="md:col-span-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-green-50">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-1">
                  {t('stats.rehire.value')}
                </div>
                <div className="text-slate-700 font-medium">{t('stats.rehire.label')}</div>
                <div className="text-slate-500 text-sm mt-1">{t('stats.rehire.subtext')}</div>
              </div>
            </div>
          </BentoCard>

          {/* TILE D: Megger Seal (6 cols) */}
          <BentoCard colSpan={6} variant="primary" delay={0.3}>
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium text-white/90 mb-4">
              {t('testimonials.clients.megger.badge')}
            </span>
            <img src="/recommendation/Megger_logo_without_slogan.svg" alt="Megger Group" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-blueprint-100 text-sm font-medium mb-3">{t('testimonials.clients.megger.outcome')}</p>
            <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2">
              "{t('testimonials.clients.megger.quote')}"
            </p>
            <p className="text-white/60 text-xs">
              — {t('testimonials.clients.megger.contact')}, {t('testimonials.clients.megger.role')}
            </p>
          </BentoCard>

        </div>
      </div>
    </GridBackground>
  );
}
