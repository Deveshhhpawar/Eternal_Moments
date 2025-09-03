"use client";
import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Heart, Share2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import BrideandGroom  from "@/assets/BrideandGroom.jpeg";
import sangiiit from "@/assets/sangittt.jpeg"
import haldi from "@/assets/haldi.jpg"
import engagement from "@/assets/engagement.jpeg"
import recep from "@/assets/recep.jpeg"
import mehendi from "@/assets/mehendii.jpg"

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  likes: number;
  views: number;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Royal Wedding",
    category: "Wedding Ceremony",
    description:
      "A majestic palace wedding with traditional Rajasthani rituals",
    image: BrideandGroom, 
    tags: ["Traditional", "Palace", "Rajasthani"],
    likes: 234,
    views: 1520,
  },
  {
    id: "2",
    title: "Mehendi Ceremony Bliss",
    category: "Mehendi",
    description: "Intricate henna designs and joyful celebrations",
    image: mehendi,
    tags: ["Mehendi", "Henna", "Traditional"],
    likes: 189,
    views: 980,
  },
  {
    id: "3",
    title: "Sangeet Night Magic",
    category: "Sangeet",
    description: "Dancing, music and celebration under the stars",
    image: sangiiit,
    tags: ["Sangeet", "Dance", "Night"],
    likes: 312,
    views: 2100,
  },
  {
    id: "4",
    title: "Haldi Ceremony Joy",
    category: "Haldi",
    description: "Vibrant turmeric ceremony filled with laughter",
    image: haldi,
    tags: ["Haldi", "Turmeric", "Fun"],
    likes: 156,
    views: 890,
  },
  {
    id: "5",
    title: "Romantic Engagement",
    category: "Engagement",
    description: "Intimate moments of love and commitment",
    image: engagement,
    tags: ["Engagement", "Romance", "Couple"],
    likes: 267,
    views: 1340,
  },
  {
    id: "6",
    title: "Grand Reception",
    category: "Reception",
    description: "Elegant celebration with family and friends",
    image: recep,
    tags: ["Reception", "Glamour", "Celebration"],
    likes: 198,
    views: 1150,
  },
];

// Parallax Image Component
const ParallaxImage = ({ src, alt }: { src: string; alt: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // image will move -30px to +30px while scrolling
  const y = useTransform(scrollYProgress, [0, 1], ["-30px", "30px"]);

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      style={{ y }}
      className="w-full h-64 object-cover rounded-t-2xl"
    />
  );
};

export const PortfolioGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Portfolio
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-elegant">
            Every wedding tells a unique story. Explore our collection of
            cinematic moments that capture the essence of love, tradition, and
            celebration.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >

          
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                scale: 1.03,
                rotateX: 4,
                rotateY: -4,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card
                className="group overflow-hidden border-0 shadow-soft hover:shadow-luxury transition-all duration-500 bg-gradient-card rounded-2xl"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  {/* Parallax Image */}
                  <ParallaxImage src={item.image} alt={item.title} />

                  {/* Overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-hero transition-opacity duration-300 ${
                      hoveredItem === item.id ? "opacity-100" : "opacity-0"
                    } rounded-t-2xl`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center gap-4">
                      <button className="p-3 bg-background/20 backdrop-blur-sm rounded-full text-background hover:bg-background/30 transition-colors">
                        <Eye size={20} />
                      </button>
                      <button className="p-3 bg-background/20 backdrop-blur-sm rounded-full text-background hover:bg-background/30 transition-colors">
                        <Heart size={20} />
                      </button>
                      <button className="p-3 bg-background/20 backdrop-blur-sm rounded-full text-background hover:bg-background/30 transition-colors">
                        <Share2 size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-primary text-background">
                    {item.category}
                  </Badge>
                </div>

                <div className="p-6">
                  <motion.h3
                    className="font-luxury text-xl font-semibold text-foreground mb-2"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className="text-muted-foreground mb-4 font-elegant"
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {item.description}
                  </motion.p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Heart size={14} />
                      <span>{item.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>{item.views}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
