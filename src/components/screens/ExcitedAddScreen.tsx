"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Flame, Zap, ShieldAlert } from "lucide-react";

export default function ExcitedAddScreen({ onNext }: { onNext: () => void }) {
  const [suggestion, setSuggestion] = useState("");
  const [chaosLevel, setChaosLevel] = useState("Medium 🌶️");

  const handleNext = () => {
    const finalSuggestion = `Suggestion: ${suggestion.trim()} (Chaos Level Chosen: ${chaosLevel})`;
    localStorage.setItem("excitedAdd", finalSuggestion);
    onNext();
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center relative z-10 w-full px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-3xl p-8 max-w-xl w-full shadow-2xl relative overflow-hidden text-center"
      >
        {/* Top visual GIF */}
        <div className="flex justify-center mb-6">
          <div className="rounded-3xl overflow-hidden border-4 border-pink-400 shadow-xl w-44 h-44">
            <img 
              src="https://media.tenor.com/EmZ0N3llkAkAAAAC/cat-cats.gif" 
              alt="Excited Cat" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800 dark:text-white">
          Want to add something more EXCITED? 💥
        </h1>

        {/* Custom text field */}
        <div className="mb-6 text-left">
          <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2 ml-2 text-sm">
            What crazy or fun activity should we add to the plan?
          </label>
          <textarea
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            placeholder="Type your suggestion here... (e.g. staring contests, food runs, funny pigeons...)"
            className="w-full px-4 py-4 rounded-xl glass-input focus:outline-none focus:ring-2 focus:ring-pink-400 text-lg resize-none min-h-[140px] text-gray-800 dark:text-white"
          />
        </div>

        {/* Chaos Level Selector */}
        <div className="mb-8 bg-white/20 dark:bg-black/20 p-4 rounded-2xl border border-pink-200/20">
          <label className="block text-gray-700 dark:text-gray-200 font-bold mb-3 text-sm">
            Choose Chaos Intensity 🌋
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { name: "Chill 🍃", icon: <Zap size={16} /> },
              { name: "Medium 🌶️", icon: <Flame size={16} /> },
              { name: "Insane 🌋", icon: <ShieldAlert size={16} /> }
            ].map((lvl) => (
              <button
                key={lvl.name}
                type="button"
                onClick={() => setChaosLevel(lvl.name)}
                className={`py-2 px-3 rounded-xl border flex items-center justify-center gap-1 font-bold text-xs transition-all ${
                  chaosLevel === lvl.name 
                    ? "bg-gradient-to-r from-pink-400 to-purple-500 text-white border-transparent shadow-md scale-105"
                    : `bg-white/40 dark:bg-black/30 border-gray-200 dark:border-gray-700 hover:bg-white/60 dark:hover:bg-black/50 text-gray-700 dark:text-gray-200`
                }`}
              >
                {lvl.icon} {lvl.name}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={!suggestion.trim()}
          className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-2xl transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 shadow-xl text-lg flex items-center justify-center gap-2"
        >
          <Sparkles size={20} />
          Lock in Upgrades! 👉
        </button>
      </motion.div>
    </div>
  );
}
