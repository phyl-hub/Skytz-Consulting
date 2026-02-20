import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, Globe, ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import useLanguage from '../hooks/useLanguage';
import { useEffect, useMemo, useRef, useState } from 'react';
import SEO from '../components/SEO';
import { pageSEOConfig } from '../content/pageSEOConfig';
import { assetUrl } from '../utils/assetUrl';

export default function Home() {
  const { t, i18n } = useTranslation();
  const { getLocalizedPath } = useLanguage();
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, margin: "-100px" });
  const lang = i18n.language || 'de';
  const seoConfig = pageSEOConfig.home[lang] || pageSEOConfig.home.en;

  const carouselKeys = useMemo(() => ['megger', 'eurasiagroup', 'swr'], []);
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHoverPaused, setIsHoverPaused] = useState(false);

  const isAutoplaying = !isPaused && !isHoverPaused;
  const activeKey = carouselKeys[activeSlideIdx] || 'megger';

  const logoByClient = useMemo(
    () => ({
      megger: {
        src: assetUrl('recommendation/Megger_logo_without_slogan.svg'),
        alt: 'Megger Group',
        className: 'h-12',
      },
      eurasiagroup: {
        src: assetUrl('recommendation/Eurasia-logo.png'),
        alt: 'Eurasia Group',
        className: 'h-24',
      },
      swr: {
        src: assetUrl('recommendation/SWR_logo.jpeg'),
        alt: 'SWR Engineering',
        className: 'h-24',
      },
    }),
    []
  );

  const activeLogo = logoByClient[activeKey] || logoByClient.megger;

  useEffect(() => {
    if (!isAutoplaying) return;
    const id = setInterval(() => {
      setActiveSlideIdx((idx) => (idx + 1) % carouselKeys.length);
    }, 3500);
    return () => clearInterval(id);
  }, [isAutoplaying, carouselKeys.length]);

  const goPrev = () => setActiveSlideIdx((idx) => (idx - 1 + carouselKeys.length) % carouselKeys.length);
  const goNext = () => setActiveSlideIdx((idx) => (idx + 1) % carouselKeys.length);

  // Framer Motion: "Clarity Transition" for premium headshot reveal
  const imageVariants = {
    initial: { 
      filter: 'grayscale(100%) blur(2px)', 
      opacity: 0.8,
      scale: 1 
    },
    active: { 
      filter: 'grayscale(0%) blur(0px)', 
      opacity: 1,
      scale: 1.02,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <>
      <SEO title={seoConfig.title} description={seoConfig.description} />
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 min-h-screen">
      {/* 12-Column Bento Grid with Swiss Air */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
        
        {/* TILE 1: HERO IDENTITY (8 cols) - Verified Trust & Identity */}
        <motion.div 
          ref={heroRef}
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-8 bg-white rounded-[2rem] p-8 lg:p-12 border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center gap-8 lg:gap-12 relative overflow-hidden"
        >
          {/* Premium Headshot with "Clarity Transition" */}
          <motion.div 
            className="relative shrink-0 cursor-pointer mb-6"
            initial="initial"
            animate={isInView ? "active" : "initial"}
            whileHover="active"
          >
            <motion.div 
              className="w-40 sm:w-48 lg:w-56 rounded-2xl overflow-hidden border border-slate-200/60 shadow-xl aspect-[4/5]"
              variants={imageVariants}
            >
              <img 
                src={assetUrl('brand/Philipp-Hoffschroer.jpg')} 
                alt="Philipp Hoffschröer – Founder, Skytz Consulting" 
                className="w-full h-full object-cover object-top" 
                loading="lazy"
                decoding="async"
              />
            </motion.div>
            {/* Trust Verification Badge */}
            <div className="absolute -bottom-2 -right-2 w-9 h-9 bg-blueprint-600 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
              <ShieldCheck className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            
            {/* Founder Name - Below Image */}
            <div className="mt-4 text-center">
              <p className="text-sm font-bold text-slate-900">
                Philipp Hoffschröer
              </p>
              <p className="text-xs text-blueprint-600 font-semibold uppercase tracking-wide mt-1">
                Skytz Consulting
              </p>
            </div>
          </motion.div>
          
          <div className="flex-1 text-center md:text-left">
            <span className="text-blueprint-600 font-bold tracking-[0.2em] text-[11px] uppercase mb-4 block">
              {t('hero.tagline')}
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-extrabold text-slate-900 mb-5 leading-[1.05] tracking-[-0.03em] whitespace-pre-line">
              {t('hero.headline')}
            </h1>
            <p className="text-slate-600 text-lg lg:text-xl leading-relaxed mb-8 max-w-xl">
              {t('hero.subhead')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://calendly.com/philipp-ho/meet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-blueprint-600 hover:bg-blueprint-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blueprint-600/25 hover:shadow-xl hover:shadow-blueprint-600/30"
              >
                {t('hero.cta.primary')}
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </a>
              <Link
                to={getLocalizedPath('testimonials')}
                className="inline-flex items-center justify-center px-7 py-3.5 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-xl transition-all"
              >
                {t('hero.cta.secondary')}
              </Link>
            </div>
            </div>
          </motion.div>

        {/* TILE 3: MEGGER TIMELINE (4 cols) - PROVEN LONGEVITY */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-4 bg-white rounded-[2rem] p-8 border border-slate-200/80 shadow-sm flex flex-col h-full"
          onMouseEnter={() => setIsHoverPaused(true)}
          onMouseLeave={() => setIsHoverPaused(false)}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5 text-blueprint-600">
              <ShieldCheck size={20} strokeWidth={2.5} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                {t(`testimonials.clients.${activeKey}.badge`, { defaultValue: t('testimonials.subtitle') })}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsPaused((p) => !p)}
                aria-label={isPaused ? 'Play carousel' : 'Pause carousel'}
                aria-pressed={isPaused}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50"
              >
                {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next testimonial"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="flex-1" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeKey}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={activeLogo.src}
                  alt={activeLogo.alt}
                  className={`${activeLogo.className || 'h-12'} mb-4 object-contain max-w-[220px]`}
                />

                {t(`testimonials.clients.${activeKey}.outcome`, { defaultValue: '' }) ? (
                  <p className="text-slate-500 text-sm font-semibold mb-5">
                    {t(`testimonials.clients.${activeKey}.outcome`)}
                  </p>
                ) : null}

                <p className="text-slate-600 italic text-sm leading-relaxed mb-6 border-l-2 border-slate-200 pl-4">
                  "{t(`testimonials.clients.${activeKey}.quote`)}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
            <div className="text-xs text-slate-500">
              <strong className="text-slate-900 block font-bold">{t(`testimonials.clients.${activeKey}.contact`)}</strong>
              {t(`testimonials.clients.${activeKey}.role`)}
            </div>

            <div className="flex items-center gap-1.5">
              {carouselKeys.map((key, idx) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveSlideIdx(idx)}
                  aria-label={`Show ${t(`testimonials.clients.${key}.company`)}`}
                  className={`h-2 w-2 rounded-full transition-colors ${idx === activeSlideIdx ? 'bg-blueprint-600' : 'bg-slate-200 hover:bg-slate-300'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* TILE 4: PASSIVE TALENT STAT (5 cols) - THE CONVERSION HOOK */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5 bg-blueprint-600 rounded-[2rem] p-8 lg:p-10 text-white flex flex-col justify-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <Users className="text-blueprint-200" size={24} />
              <span className="text-blueprint-100 text-[11px] font-bold uppercase tracking-[0.2em]">
                {t('stats.passive.label')}
              </span>
            </div>
            <div className="text-6xl lg:text-7xl font-black mb-3 tracking-[-0.04em]">
              {t('stats.passive.value')}
            </div>
            <p className="text-blueprint-100 font-medium text-lg leading-snug max-w-xs">
              {t('stats.passive.subtext')}
            </p>
          </div>
        </motion.div>

        {/* TILE 5: GLOBAL REACH (3 cols) - CROSS BORDER EXPERTISE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-3 bg-white rounded-[2rem] p-8 border border-slate-200/80 shadow-sm flex flex-col justify-center items-center text-center"
        >
          <div className="flex gap-4 mb-6">
            <span className="text-3xl filter grayscale hover:grayscale-0 transition-all duration-300 cursor-default" title="Deutschland">🇩🇪</span>
            <span className="text-3xl filter grayscale hover:grayscale-0 transition-all duration-300 cursor-default" title="Schweiz">🇨🇭</span>
            <span className="text-3xl filter grayscale hover:grayscale-0 transition-all duration-300 cursor-default" title="USA">🇺🇸</span>
          </div>
          <h3 className="text-slate-900 font-bold text-lg mb-1 tracking-tight">
            Key Markets
          </h3>
          <p className="text-slate-500 text-xs uppercase tracking-[0.15em]">
            DACH & United States
          </p>
        </motion.div>

      </div>
    </div>
    </>
  );
}