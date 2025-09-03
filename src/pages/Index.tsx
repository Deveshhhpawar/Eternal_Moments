import HeroSection from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import { PortfolioGrid } from '@/components/PortfolioGrid';import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';
import Photography from '@/components/photography';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PortfolioGrid />
            <Photography/>

      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default Index;