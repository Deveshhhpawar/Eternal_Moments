import HeroSection from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import { PortfolioGrid } from '@/components/PortfolioGrid';import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PortfolioGrid />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default Index;