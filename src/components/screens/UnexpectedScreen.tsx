"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";

export default function UnexpectedScreen({ onNext }: { onNext: () => void }) {
  const [surprise, setSurprise] = useState("");

  const handleNext = () => {
    localStorage.setItem("unexpectedFeel", surprise.trim());
    onNext();
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center relative z-10 w-full px-4 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-3xl p-8 max-w-xl w-full shadow-2xl relative text-center"
      >
        {/* Surprise box opening GIF */}
        <div className="flex justify-center mb-6">
          <div className="rounded-3xl overflow-hidden border-4 border-purple-400 shadow-xl w-44 h-44 bg-white/20">
            <img 
              src="https://media.giphy.com/media/l0Exd2T89yHPA6c3e/giphy.gif" 
              alt="Surprise Present Box" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-800 dark:text-white">
          What if you receive an instant surprise? 🎁✨
        </h1>
        <p className="text-gray-600 dark:text-gray-300 font-medium mb-8">
          What would you like to get as an instant surprise? (Something good! 🎁)
        </p>

        {/* Custom text field */}
        <div className="mb-8 text-left">
          <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2 ml-2 text-sm">
            Type your dream surprise here:
          </label>
          <textarea
            value={surprise}
            onChange={(e) => setSurprise(e.target.value)}
            placeholder="E.g., A giant box of cookies, a massive caramel macchiato, a custom mug..."
            className="w-full px-4 py-4 rounded-xl glass-input focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg resize-none min-h-[140px] text-gray-800 dark:text-white"
          />
        </div>

        <button
          onClick={handleNext}
          disabled={!surprise.trim()}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-purple-600 text-white font-bold py-4 px-6 rounded-2xl transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 shadow-xl text-lg flex items-center justify-center gap-2"
        >
          <Gift size={20} />
          Submit My Dream Surprise! 👉
        </button>
      </motion.div>
    </div>
  );
}
