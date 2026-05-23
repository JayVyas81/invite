"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun } from "lucide-react";

export default function OutfitScreen({ onNext }: { onNext: () => void }) {
  const [strategy, setStrategy] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("fashionStrategy");
    if (saved) {
      setStrategy(saved);
    }
  }, []);

  const handleNext = () => {
    localStorage.setItem("fashionStrategy", strategy);
    onNext();
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative z-10 w-full px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-3xl p-8 max-w-lg w-full shadow-2xl"
      >
        <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800 dark:text-white">
          What do you think you're gonna wear? 👗
        </h1>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-yellow-100 dark:bg-yellow-900/40 border-2 border-yellow-300 rounded-2xl p-6 mb-8 flex flex-col items-center text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="text-yellow-500 mb-4"
          >
            <Sun size={64} fill="currentColor" />
          </motion.div>
          <h2 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-2">Weather Warning!</h2>
          <p className="text-yellow-700 dark:text-yellow-300 font-medium">
            Temperature may be high. <br />
            Please wear something comfortable. <br />
            Stay hydrated 💧
          </p>
        </motion.div>

        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2 ml-2">
            Tell me your fashion strategy...
          </label>
          <textarea
            value={strategy}
            onChange={(e) => setStrategy(e.target.value)}
            placeholder="I will wear my coolest sunglasses and..."
            className="w-full px-4 py-4 rounded-xl glass-input focus:outline-none focus:ring-2 focus:ring-pink-400 text-lg resize-none min-h-[120px]"
          />
        </div>

        <button
          onClick={handleNext}
          disabled={!strategy.trim()}
          className="w-full bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 shadow-lg text-lg"
        >
          Save & Continue ✨
        </button>
      </motion.div>
    </div>
  );
}
