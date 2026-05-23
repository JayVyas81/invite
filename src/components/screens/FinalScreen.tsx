"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Trophy, Sparkles } from "lucide-react";

const BADGES = [
  "Coffee Explorer",
  "Ice Cream Sponsor",
  "Professional Late-Warning Receiver",
  "Cat Dance Appreciator"
];

export default function FinalScreen() {
  const [showBadges, setShowBadges] = useState(false);

  useEffect(() => {
    const duration = 15 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff0000", "#ff69b4", "#ffd700"]
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff0000", "#ff69b4", "#ffd700"]
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    setTimeout(() => {
      setShowBadges(true);
    }, 2500);
  }, []);

  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center relative z-10 w-full px-4 py-20 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="glass-card rounded-3xl p-8 md:p-12 max-w-4xl w-full shadow-2xl relative"
      >
        <motion.div 
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="flex justify-center mb-6"
        >
          <div className="rounded-3xl overflow-hidden border-4 border-yellow-400 shadow-2xl w-48 h-48">
            <img src="https://media.tenor.com/EmZ0N3llkAkAAAAC/cat-cats.gif" alt="Celebration Cat" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-sm">
          Mission Accomplished! 🥳
        </h1>
        
        <div className="space-y-4 text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-10">
          <p>Thanks for surviving this chaotic website.</p>
          <p>You have officially completed the friendship challenge.</p>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            className="text-3xl md:text-4xl text-green-500 mt-4 py-4 bg-green-100/50 dark:bg-green-900/30 rounded-2xl border-2 border-green-400"
          >
            ✨ You unlocked +100 Friendship XP ✨
          </motion.div>
        </div>

        {showBadges && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
          >
            {BADGES.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 }}
                className="bg-white/60 dark:bg-black/40 border border-yellow-300 dark:border-yellow-600 rounded-xl p-4 flex items-center gap-4 shadow-md"
              >
                <div className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded-full">
                  <Trophy className="text-yellow-500" size={24} />
                </div>
                <span className="font-bold text-gray-800 dark:text-gray-200 text-left">{badge}</span>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.reload()}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-10 rounded-full shadow-2xl transition-all text-xl flex items-center justify-center gap-3 mx-auto w-full md:w-auto"
        >
          <Sparkles fill="currentColor" /> End Adventure <Sparkles fill="currentColor" />
        </motion.button>
      </motion.div>
    </div>
  );
}
