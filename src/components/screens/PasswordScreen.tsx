"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, LockOpen } from "lucide-react";
import confetti from "canvas-confetti";

export default function PasswordScreen({ onNext }: { onNext: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toUpperCase() === "LADYDON") {
      setSuccess(true);
      setError(false);
      
      // Fire confetti
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ffd1dc", "#ff69b4", "#e6e6fa"]
      });

      setTimeout(() => onNext(), 2000);
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative z-10 w-full px-4">
      <AnimatePresence mode="wait">
        {!error ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="glass-card rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"
          >
            <div className="flex justify-center mb-6 text-pink-500">
              {success ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <LockOpen size={64} className="text-green-500 drop-shadow-md" />
                </motion.div>
              ) : (
                <Lock size={64} className="drop-shadow-md" />
              )}
            </div>
            
            <h1 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100">
              🚨 Secret Access Required 🚨
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8 font-medium">
              Enter the master password to continue.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password..."
                className="w-full px-4 py-3 rounded-xl glass-input focus:outline-none focus:ring-2 focus:ring-pink-400 text-center text-xl uppercase tracking-widest text-gray-800 dark:text-white font-bold"
                disabled={success}
              />
              <button
                type="submit"
                disabled={!password || success}
                className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 shadow-lg"
              >
                {success ? "Unlocking..." : "Submit"}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="error"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="flex flex-col items-center text-center animate-shake"
          >
            <div className="mb-4 drop-shadow-2xl rounded-3xl overflow-hidden border-4 border-red-300">
              <img src="https://media.tenor.com/V8KBWRxy95wAAAAC/pooping-poop.gif" alt="Funny Poop" className="w-48 h-48 object-cover" />
            </div>
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-extrabold text-red-500 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-3xl shadow-xl border-2 border-red-200"
            >
              Hag diya na 😂💩
            </motion.h2>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setError(false)}
              className="mt-8 bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-xl transition-all transform hover:scale-110 shadow-lg"
            >
              Try Again 🥺
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
