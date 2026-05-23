"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const EMOJIS = ["🌟", "✨", "🌸", "🦋", "☕", "🍦", "😂", "🥺"];

interface FloatingEmoji {
  id: number;
  emoji: string;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

export default function FloatingEmojis() {
  const [particles, setParticles] = useState<FloatingEmoji[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      x: Math.random() * 100, 
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 20,
      size: 0.8 + Math.random() * 1.5, 
    }));
    setParticles(generated);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bottom-[-10%]"
          initial={{ y: "110vh", x: `${p.x}vw`, opacity: 0, scale: p.size }}
          animate={{
            y: "-20vh",
            x: `${p.x + (Math.random() * 20 - 10)}vw`,
            opacity: [0, 0.7, 0.7, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span className="text-2xl drop-shadow-md">{p.emoji}</span>
        </motion.div>
      ))}
    </div>
  );
}
