"use client";

import { motion } from "framer-motion";

export default function GussaScreen({ onNext }: { onNext: () => void }) {
  const handleChoice = (choice: string) => {
    localStorage.setItem("gussaSelection", choice);
    onNext();
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center relative z-10 w-full px-4 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-3xl p-8 max-w-xl w-full shadow-2xl relative text-center"
      >
        {/* Sad crying cat GIF */}
        <div className="flex justify-center mb-6">
          <div className="rounded-3xl overflow-hidden border-4 border-pink-400 shadow-xl w-44 h-44">
            <img 
              src="https://media.tenor.com/EGneBJlyNGoAAAAC/cat-crying-cat.gif" 
              alt="Crying Cat" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold mb-8 text-gray-800 dark:text-white leading-relaxed">
          Subeh subeh koi masum bache pe gussa kon karta he? 🥺🍼
        </h1>

        <div className="flex flex-col gap-4 w-full justify-center">
          <button
            onClick={() => handleChoice("Ha to kya hua me to karuge 😈")}
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all transform hover:scale-105 active:scale-95 text-lg"
          >
            Ha to kya hua, me to karuge! 😈
          </button>
          <button
            onClick={() => handleChoice("Nai but gussa aa raha to kya karu 🥺")}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all transform hover:scale-105 active:scale-95 text-lg"
          >
            Nai but gussa aa raha to kya karu... 🥺
          </button>
        </div>
      </motion.div>
    </div>
  );
}
