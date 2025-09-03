import { useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";

// Wedding Photography Images (replace with your real assets)
import brideImage from "@/assets/engagement.jpeg";
import groomImage from "@/assets/hero-bride.jpg";
import coupleImage from "@/assets/BrideandGroom.jpeg";
import haldiImage from "@/assets/recep.jpeg";
import mehendiImage from "@/assets/hero-bride1.jpg";
import sangeetImage from "@/assets/haldi.jpg";

const photos = [
  { id: "1", title: "The Bride", image: brideImage },
  { id: "2", title: "The Groom", image: groomImage },
  { id: "3", title: "The Couple", image: coupleImage },
  { id: "4", title: "Haldi Ceremony", image: haldiImage },
  { id: "5", title: "Mehendi Moments", image: mehendiImage },
  { id: "6", title: "Sangeet Night", image: sangeetImage },
  // Duplicate for seamless loop
  { id: "7", title: "The Bride", image: brideImage },
  { id: "8", title: "The Groom", image: groomImage },
  { id: "9", title: "The Couple", image: coupleImage },
];

const CARD_WIDTH = 360;
const GAP = 40;
const TOTAL_WIDTH = (CARD_WIDTH + GAP) * photos.length;

interface PhotoRowProps {
  direction: "left" | "right";
  paused: boolean;
}

const PhotoRow = ({ direction, paused }: PhotoRowProps) => {
  const x = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    if (!paused) {
      x.current += direction === "left" ? -delta * 0.07 : delta * 0.07;

      if (direction === "left" && x.current <= -TOTAL_WIDTH / 2) x.current = 0;
      if (direction === "right" && x.current >= 0) x.current = -TOTAL_WIDTH / 2;

      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(${x.current}px)`;
      }
    }
  });

  return (
    <div
      ref={containerRef}
      className="flex"
      style={{ width: TOTAL_WIDTH, willChange: "transform" }}
    >
      {photos.map((photo, idx) => (
        <motion.div
          key={`${direction}-${photo.id}-${idx}`}
          className="relative mx-5 flex-shrink-0 rounded-2xl overflow-hidden
            backdrop-blur-md bg-white/30 border border-white/20
            shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(255,192,203,0.25)]"
          style={{ width: CARD_WIDTH, height: 240 }}
          whileHover={{
            scale: 1.08,
            rotateX: direction === "left" ? 8 : -8,
            rotateY: direction === "left" ? -8 : 8,
          }}
          animate={{
            y: [0, -6, 0, 6, 0], // idle floating
            rotateX: [0, direction === "left" ? 2 : -2, 0, direction === "left" ? -2 : 2, 0],
            rotateY: [0, direction === "left" ? -2 : 2, 0, direction === "left" ? 2 : -2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={photo.image}
            alt={photo.title}
            className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
            draggable={false}
            style={{ pointerEvents: "none", userSelect: "none" }}
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 text-center">
            <h3 className="text-lg md:text-xl font-heading font-semibold text-white drop-shadow-lg">
              {photo.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Photography = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-16 md:py-24 relative bg-gradient-to-b from-background via-white/40 to-background">
      <h2
        className="text-4xl md:text-6xl font-heading font-bold text-center mb-12
        bg-gradient-to-r from-pink-400 via-rose-500 to-yellow-500 
        bg-clip-text text-transparent drop-shadow-sm"
      >
        Wedding Photography Moments
      </h2>

      <div
        className="overflow-hidden w-full relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <PhotoRow direction="left" paused={paused} />
        <div className="mt-8" />
        <PhotoRow direction="right" paused={paused} />
      </div>
    </section>
  );
};

export default Photography;
