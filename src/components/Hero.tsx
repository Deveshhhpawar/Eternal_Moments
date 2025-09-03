import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

// Slideshow Images
import heroBride from '@/assets/hero-bride.jpg';
import heroGroom from '@/assets/hero-groom.jpg';
import heroCouple from '@/assets/hero-couple.jpg';

// Hero Video
import heroVideo from '@/assets/hero-video.mp4';

const heroImages = [
  { src: heroCouple, alt: 'Romantic Couple Moment' },
  { src: heroBride, alt: 'Elegant Indian Bride Portrait' },
  { src: heroGroom, alt: 'Regal Groom Portrait' }
];

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [useVideo, setUseVideo] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Delay intro animations
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Auto slideshow rotation (only after video ends/fallback)
  useEffect(() => {
    if (!useVideo) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [useVideo]);

  // Check connection quality before loading video
 useEffect(() => {
  const conn = navigator.connection;
  if (conn) {
    if (conn.saveData || ['slow-2g', '2g', '3g'].includes(conn.effectiveType)) {
      setUseVideo(false);
    }
  }
}, []);


  // Handle video fallback (error/timeout)
  useEffect(() => {
    if (!useVideo) return;

    const videoEl = videoRef.current;
    if (!videoEl) return;

    const fallbackTimer = setTimeout(() => {
      setUseVideo(false);
    }, 5000);

    const handleError = () => setUseVideo(false);
    videoEl.addEventListener('error', handleError);
    videoEl.addEventListener('stalled', handleError);

    return () => {
      clearTimeout(fallbackTimer);
      videoEl.removeEventListener('error', handleError);
      videoEl.removeEventListener('stalled', handleError);
    };
  }, [useVideo]);

  // ✅ Play video once, then switch to slideshow when it ends
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const handleEnded = () => setUseVideo(false);
    videoEl.addEventListener('ended', handleEnded);

    return () => videoEl.removeEventListener('ended', handleEnded);
  }, []);

  // Framer Motion parallax
  const { scrollY } = useScroll();
  const headingY = useTransform(scrollY, [0, 300], [0, -50]);
  const paraY = useTransform(scrollY, [0, 300], [0, -30]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video or Slideshow */}
      {useVideo ? (
        <motion.video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          // removed loop ✅ so it plays once
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <source src={heroVideo} type="video/mp4" />
        </motion.video>
      ) : (
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImage ? 1 : 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
            </motion.div>
          ))}
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-background">
        {/* Heading */}
        <motion.h1
          initial={{ y: 60, opacity: 0, scale: 0.95 }}
          animate={isVisible ? { y: 0, opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ y: headingY }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
        >
          Capturing
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="block text-primary-glow"
          >
            Eternal Moments
          </motion.span>
        </motion.h1>

        {/* Paragraph */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          style={{ y: paraY }}
        >
          <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 font-elegant max-w-2xl mx-auto">
            Luxury Indian Wedding Photography with Cinematic Storytelling
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ y: 60, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
        >
          <Button variant="luxury" size="xl" className="group px-8 py-3 h-14 text-base">
            View Portfolio
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="bg-background/10 backdrop-blur-sm border-background/20 hover:bg-background/20 px-8 py-3 h-14 text-base"
          >
            Book Your Wedding
          </Button>
        </motion.div>

        {/* Slideshow Dots */}
        {!useVideo && (
          <motion.div
            className="flex justify-center mt-12 gap-2"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
          >
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage
                    ? 'bg-primary-glow scale-125'
                    : 'bg-background/50 hover:bg-background/70'
                }`}
              />
            ))}
          </motion.div>
        )}

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut', delay: 1.2 }}
        >
          <ChevronDown size={32} className="animate-bounce text-background/70" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
