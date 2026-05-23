"use client";

import { motion } from "framer-motion";

export default function RealHeartScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center relative z-10 w-full px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-3xl p-8 max-w-xl w-full shadow-2xl relative text-center flex flex-col items-center"
      >
        {/* Pulsing real beating anatomical heart emoji */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-8xl mb-8 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)] select-none cursor-pointer"
        >
          🫀
        </motion.div>

        <h1 className="text-2xl md:text-3xl font-black mb-4 text-red-500 dark:text-red-400 drop-shadow-sm leading-relaxed">
          Jab tumne bola ki achhe se invite nai kiya...
        </h1>
        <p className="text-xl md:text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center justify-center gap-2">
          To idhar lag gai... 🫀 🥺
        </p>
        <p className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          To mene ye banaya he tere liye <span className="text-pink-500 font-extrabold">special invitation ✨</span>
        </p>

        <button
          onClick={onNext}
          className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-2xl shadow-xl transition-all transform hover:scale-105 active:scale-95 text-lg flex items-center justify-center gap-2"
        >
          Open Special Invitation 💌👉
        </button>
      </motion.div>
    </div>
  );
}
