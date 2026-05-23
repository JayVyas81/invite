"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NO_MESSAGES = [
  "Why would you do this 😭",
  "I can't take this 😭",
  "Please reconsider 🥺",
  "Are you clicking by mistake? 😟",
  "This is getting painful... 😵",
  "I'm literally crying now 🌧️",
  "Okay fine, I give up 💀",
];

export default function VerificationScreen({ onNext }: { onNext: () => void }) {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const handleNo = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    return noCount === 0 ? "NO 😈" : NO_MESSAGES[Math.min(noCount - 1, NO_MESSAGES.length - 1)];
  };

  // Base values for normal padding/fontsize
  const baseFontSize = 24; 
  const yesFontSize = Math.min(baseFontSize + (noCount * 12), 100); 
  
  // Padding logic: scale padding up gently but cap it so it doesn't break the screen
  const padY = Math.min(16 + (noCount * 5), 60);
  const padX = Math.min(32 + (noCount * 10), 120);

  const emojiSize = Math.min(noCount * 30 + 80, 250); 

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative z-10 w-full px-4 overflow-hidden">
      <AnimatePresence mode="wait">
        {!yesPressed ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            className="flex flex-col items-center justify-center text-center w-full"
          >
            <div className="h-[250px] flex items-end justify-center mb-4">
              {noCount > 0 ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                  className="drop-shadow-2xl rounded-3xl overflow-hidden border-4 border-gray-300"
                >
                  <img 
                    src="https://media.tenor.com/Lg21skpXtU4AAAAC/cat-meme.gif" 
                    alt="Crying Cat" 
                    style={{ width: `${emojiSize}px`, height: `${emojiSize}px` }}
                    className="object-cover" 
                  />
                </motion.div>
              ) : (
                <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-gray-300">
                  <img src="https://media.tenor.com/ReQxtH3IKfgAAAAC/cat-fbi.gif" alt="Detective Cat" className="w-48 h-48 object-cover" />
                </div>
              )}
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold mb-10 text-gray-800 dark:text-white glass-card px-8 py-4 rounded-3xl shadow-xl border border-white/40">
              🤔 Are you really Avantika?
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-6 w-full justify-center mt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setYesPressed(true);
                  setTimeout(onNext, 2000);
                }}
                className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold rounded-3xl shadow-2xl transition-all whitespace-nowrap z-20"
                style={{ 
                  fontSize: `${yesFontSize}px`, 
                  padding: `${padY}px ${padX}px`,
                }}
              >
                YES 😇
              </motion.button>

              {noCount < NO_MESSAGES.length && (
                <motion.button
                  whileHover={{ 
                    scale: 0.9, 
                    x: (Math.random() - 0.5) * 150, 
                    y: (Math.random() - 0.5) * 150 
                  }}
                  onClick={handleNo}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl transition-all z-10"
                >
                  {getNoButtonText()}
                </motion.button>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-[150px] mb-6 drop-shadow-2xl"
            >
              🎉
            </motion.div>
            <h2 className="text-5xl font-extrabold text-gray-800 dark:text-white glass-card px-10 py-6 rounded-3xl shadow-2xl">
              I knew it! 🥳
            </h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
