"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function ReviewScreen({ onNext }: { onNext: () => void }) {
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [finalState, setFinalState] = useState<"none" | "too-late" | "accepted">("none");

  const sendData = async (action: string) => {

    const fashionStrategy = localStorage.getItem("fashionStrategy") || "None";
    let targetUrl = "/send_mail.php";
    
    // Auto-detect local development server at port 8000 (running in root folder)
    if (typeof window !== "undefined" && window.location.hostname === "localhost") {
      targetUrl = "http://localhost:8000/public/send_mail.php";
    }

    console.log("Sending data to PHP endpoint:", targetUrl);

    try {
      const res = await fetch(targetUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fashionStrategy,
          reviewText: `${review} (Action decided: ${action})`,
        }),
      });
      const result = await res.json();
      console.log("Email result:", result);
    } catch (err) {
      console.error("Error sending email:", err);
    }
  };

  const handleSubmit = () => {
    if (review.trim()) {
      setSubmitted(true);
    }
  };

  const handleChangeReview = () => {
    setFinalState("too-late");
    sendData("Tried to Change Review");
    confetti({
      particleCount: 200,
      spread: 120,
      colors: ["#ffd1dc", "#ff69b4", "#fdfd96"],
      origin: { y: 0.6 }
    });
    setTimeout(() => onNext(), 3000);
  };

  const handleKeepReview = () => {
    setFinalState("accepted");
    sendData("Kept Review");
    setTimeout(() => onNext(), 3000);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative z-10 w-full px-4 text-center">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="glass-card rounded-3xl p-8 max-w-2xl w-full shadow-2xl"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold mb-8 text-gray-800 dark:text-white">
              How excited are you? 🤩
            </h1>
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
              Please write a highly detailed, 10-page essay (just kidding, write anything).
            </p>
            
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="I am so excited that I might explode..."
              className="w-full px-6 py-4 rounded-2xl glass-input focus:outline-none focus:ring-4 focus:ring-pink-300 text-xl resize-none min-h-[150px] mb-8 text-gray-800 dark:text-white"
            />
            
            <button
              onClick={handleSubmit}
              disabled={!review.trim()}
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 text-xl w-full md:w-auto"
            >
              Submit Excitement Levels 🚀
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="reaction"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-3xl p-8 max-w-2xl w-full shadow-2xl flex flex-col items-center"
          >
            {finalState === "none" && (
              <>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="mb-6 rounded-3xl overflow-hidden border-4 border-gray-300 shadow-xl"
                >
                  <img src="https://media.tenor.com/EGneBJlyNGoAAAAC/cat-crying-cat.gif" alt="Crying Cat" className="w-48 h-48 object-cover" />
                </motion.div>
                
                <div className="space-y-4 mb-8">
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">
                    I expected <span className="text-pink-500 text-3xl">1000000</span> / 1000000 😂😭
                  </p>
                  <p className="text-xl font-medium text-gray-600 dark:text-gray-300">
                    But you gave only:
                  </p>
                  <div className="bg-white/50 dark:bg-black/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 max-w-md mx-auto italic break-words">
                    "{review}"
                  </div>
                  <p className="text-xl font-bold text-gray-500">
                    / 1000000
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center w-full">
                  <button
                    onClick={handleChangeReview}
                    className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all transform hover:scale-105"
                  >
                    Change Review 😭
                  </button>
                  <button
                    onClick={handleKeepReview}
                    className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all transform hover:scale-105"
                  >
                    Keep Review 😅
                  </button>
                </div>
              </>
            )}

            {finalState === "too-late" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 flex flex-col items-center"
              >
                <div className="rounded-3xl overflow-hidden border-4 border-pink-400 shadow-xl mb-6">
                  <img src="https://media.tenor.com/_hUq1BSUsiMAAAAC/cat-cute.gif" alt="Happy Cat" className="w-64 h-64 object-cover" />
                </div>
                <h2 className="text-5xl font-black text-pink-500">Too late 😂</h2>
              </motion.div>
            )}

            {finalState === "accepted" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 flex flex-col items-center"
              >
                <div className="rounded-3xl overflow-hidden border-4 border-blue-400 shadow-xl mb-6">
                  <img src="https://media.tenor.com/Lg21skpXtU4AAAAC/cat-meme.gif" alt="Crying Cat" className="w-64 h-64 object-cover" />
                </div>
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Crying moment accepted 😭</h2>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
