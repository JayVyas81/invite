"use client";

import { motion } from "framer-motion";

export default function WelcomeScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center relative z-10 w-full px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-3xl p-8 md:p-12 max-w-2xl w-full text-center shadow-2xl relative overflow-hidden"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="flex justify-center mb-6"
        >
          <div className="rounded-full overflow-hidden border-4 border-pink-400 shadow-xl w-32 h-32">
            <img src="https://media.tenor.com/Km11GYbvYY0AAAAC/good-morning.gif" alt="Dancing Cat" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-pink-600 dark:text-pink-400 drop-shadow-sm">
          Hello Avantika ✨
        </h1>
        
        <div className="space-y-6 text-lg md:text-xl text-gray-700 dark:text-gray-200 font-medium leading-relaxed">
          <motion.p 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}
          >
            Thank you for being my absolute best friend 😊
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2 }}
          >
            I wanted to make something fun for you.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3 }}
          >
            I had two plans in mind, but since you're going to Central London with your *other* best friend (who isn't as cool as me, obviously) 😜, we'll save one adventure for later.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 4 }}
            className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-8"
          >
            And finally...
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 5 }}
          >
            The café I've wanted to visit for 3–4 months can wait too ☕😂
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 6 }}
            className="font-bold text-gray-900 dark:text-white bg-white/40 dark:bg-black/40 p-4 rounded-xl"
          >
            But I know one peaceful hidden spot where we can chill and have fun. ✨
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 7.5 }}
          className="mt-12"
        >
          <button
            onClick={onNext}
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all transform hover:scale-105 active:scale-95 text-xl w-full md:w-auto"
          >
            Show Me The Master Plan 🎉
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
