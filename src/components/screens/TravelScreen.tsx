"use client";

import { motion } from "framer-motion";
import { TrainFront, Ticket, Calendar, Clock, MapPin, AlertTriangle } from "lucide-react";

export default function TravelScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center relative z-10 w-full px-4 py-12 overflow-hidden">
      
      {/* Moving Train Background */}
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: "100vw" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 md:top-20 opacity-20 text-[120px] pointer-events-none"
      >
        🚆💨
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -20 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ type: "spring", damping: 15 }}
        style={{ perspective: 1000 }}
        className="max-w-md w-full relative z-10"
      >
        {/* Ticket Design */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border-4 border-dashed border-gray-300 dark:border-gray-600 relative">
          
          {/* Top colored section */}
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 text-white text-center rounded-b-[40px] relative">
            <h2 className="text-3xl font-black uppercase tracking-widest flex items-center justify-center gap-3">
              <Ticket size={32} />
              Mission Details
              <Ticket size={32} />
            </h2>
          </div>

          {/* Ticket holes */}
          <div className="absolute left-[-20px] top-[90px] w-[40px] h-[40px] bg-[#fff0f5] dark:bg-[#2d1b2e] rounded-full z-20"></div>
          <div className="absolute right-[-20px] top-[90px] w-[40px] h-[40px] bg-[#fff0f5] dark:bg-[#2d1b2e] rounded-full z-20"></div>

          <div className="p-8 space-y-6 mt-4">
            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-200 border-b border-gray-100 dark:border-gray-700 pb-4">
              <Calendar className="text-pink-500" size={28} />
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wide">Date</p>
                <p className="text-xl font-bold">Monday, 25 May 2026</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-200 border-b border-gray-100 dark:border-gray-700 pb-4">
              <Clock className="text-blue-500" size={28} />
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wide">Time</p>
                <p className="text-xl font-bold">10:58 AM</p>
              </div>
            </div>

            <div className="flex items-start gap-4 text-gray-700 dark:text-gray-200 pb-4">
              <MapPin className="text-green-500 mt-1" size={28} />
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wide">Instructions</p>
                <p className="text-lg font-medium leading-tight mt-1">Take the 10:58 train to Croydon.</p>
                <p className="text-lg font-medium text-pink-600 dark:text-pink-400 mt-1">Platform 1.</p>
                <p className="text-lg font-bold mt-1">Sit in the last compartment.</p>
              </div>
            </div>

            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="bg-red-100 dark:bg-red-900/40 border border-red-300 rounded-xl p-4 flex items-center justify-center gap-3 text-red-700 dark:text-red-300"
            >
              <AlertTriangle size={24} />
              <p className="font-extrabold uppercase tracking-wide">DO NOT BE LATE ⏰😂</p>
            </motion.div>

            <div className="text-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl text-gray-600 dark:text-gray-300 font-medium italic">
              "I'll join from Wembley and reveal the next part of the plan." 🕵️‍♂️
            </div>
          </div>
        </div>

        <button
          onClick={onNext}
          className="w-full mt-8 bg-gray-900 dark:bg-white dark:text-gray-900 text-white font-bold py-4 px-6 rounded-2xl shadow-xl transition-all transform hover:scale-105 active:scale-95 text-lg flex items-center justify-center gap-3"
        >
          <TrainFront size={24} />
          Acknowledged!
        </button>
      </motion.div>
    </div>
  );
}
