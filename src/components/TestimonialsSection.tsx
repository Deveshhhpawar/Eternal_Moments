"use client";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion, useScroll, useTransform, animate, inView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Testimonial {
  id: string;
  name: string;
  relation: string;
  wedding: string;
  rating: number;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya & Arjun",
    relation: "Bride & Groom",
    wedding: "Rajasthani Royal Wedding",
    rating: 5,
    review:
      "The team captured our wedding with such artistry and emotion. Every photograph tells our story beautifully. The cinematic quality of their work is simply outstanding.",
  },
  {
    id: "2",
    name: "Meera Sharma",
    relation: "Mother of the Bride",
    wedding: "Traditional Punjabi Wedding",
    rating: 5,
    review:
      "Professional, creative, and so respectful of our traditions. They made everyone comfortable and captured moments we'll treasure forever.",
  },
  {
    id: "3",
    name: "Vikram & Kavya",
    relation: "Couple",
    wedding: "Destination Wedding - Goa",
    rating: 5,
    review:
      "From our mehendi to reception, every ceremony was documented with such care and creativity. The quality exceeds all expectations.",
  },
  {
    id: "4",
    name: "Rajesh Gupta",
    relation: "Father of the Groom",
    wedding: "Bengali Traditional Wedding",
    rating: 5,
    review:
      "They understood our cultural nuances perfectly and delivered photographs that preserve our memories with elegance and grace.",
  },
];

// ✅ Smooth counter using Framer Motion animate()
function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLDivElement>(null);

 useEffect(() => {
  if (inView) {
    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent = Math.floor(v).toString();
        }
      },
    });

    return () => controls.stop();
  }
}, [inView, value]);


  return <div ref={ref} />;
}

// Motion Variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export const TestimonialsSection = () => {
  const stats = [
    { label: "Weddings Captured", value: 500 },
    { label: "Years Experience", value: 15 },
    { label: "Precious Moments", value: 50000 },
    { label: "Happy Families", value: 98 },
  ];

  // Parallax for Quote icons
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 400], [0, -15]);

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Families Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-elegant">
            The greatest honor is earning the trust of families on their most
            precious day. Here are heartfelt words from couples who trusted us
            with their eternal moments.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              custom={i}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="p-8 border-0 bg-gradient-card rounded-xl shadow-soft hover:shadow-lg transition-all duration-500">
                {/* Quote Icon with parallax */}
                <motion.div className="mb-6" style={{ y: parallaxY }}>
                  <Quote className="w-8 h-8 text-primary opacity-60" />
                </motion.div>

                <p className="text-foreground font-elegant leading-relaxed mb-6 text-base">
                  "{t.review}"
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      size={16}
                      className="text-primary fill-primary"
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-luxury flex items-center justify-center text-background font-luxury font-semibold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-luxury font-semibold text-foreground">
                      {t.name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {t.relation} • {t.wedding}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="font-luxury text-3xl md:text-4xl font-bold text-primary mb-2">
                <Counter value={stat.value} />
                {stat.value >= 500 ? "+" : stat.label.includes("%") ? "%" : ""}
              </div>
              <div className="text-muted-foreground font-elegant">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
