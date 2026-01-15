import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import BentoHero from '../components/home/BentoHero';
import ProofCarousel from '../components/home/ProofCarousel';
import ProcessSection from '../components/home/ProcessSection';
import ServicesSection from '../components/home/ServicesSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('meta.title');
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description'));
  }, [t]);

  return (
    <>
      <BentoHero />
      <ProofCarousel />
      <ProcessSection />
      <ServicesSection />
      <CTASection />
    </>
  );
}
