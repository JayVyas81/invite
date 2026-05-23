import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrainFront, Ticket, Calendar, Clock, MapPin, AlertTriangle, ScanFace, CheckCircle } from "lucide-react";

export default function TravelScreen({ onNext }: { onNext: () => void }) {
  const [scanState, setScanState] = useState<"idle" | "scanning" | "completed">("idle");
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("🤖 Initializing scanner...");

  useEffect(() => {
    if (scanState !== "scanning") return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 5;
        if (next >= 100) {
          clearInterval(interval);
          setScanState("completed");
          return 100;
        }
        return next;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [scanState]);

  useEffect(() => {
    if (progress < 25) {
      setMessage("🤖 Retinal scan in progress...");
    } else if (progress < 50) {
      setMessage("✨ Alert: Extremely high levels of gossip energy detected!");
    } else if (progress < 75) {
      setMessage("🐦 Analyzing pigeon-brain intelligence index...");
    } else if (progress < 100) {
      setMessage("👑 Upgrading automatically to VIP status...");
    } else {
      setMessage("✅ 1000000% VIP Pigeon Status Activated!");
    }
  }, [progress]);

  const handleStartScan = () => {
    setScanState("scanning");
    setProgress(0);
  };

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

            {scanState === "scanning" && (
              <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 rounded-2xl p-5 text-center space-y-4">
                <div className="text-lg font-bold text-blue-800 dark:text-blue-200 animate-pulse">{message}</div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-6 rounded-full overflow-hidden relative shadow-inner">
                  <motion.div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full"
                    style={{ width: `${progress}%` }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-black text-white mix-blend-difference">{progress}%</span>
                </div>
              </div>
            )}

            {scanState === "completed" && (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-4 border-double border-green-500 rounded-2xl p-5 text-center flex flex-col items-center gap-3"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-500 shadow-lg">
                  <img src="https://media.tenor.com/1p1jgLuzTBoAAAAC/bussieana.gif" alt="Funny VIP" className="w-full h-full object-cover" />
                </div>
                <div className="text-lg font-black text-green-600 dark:text-green-400 tracking-wider uppercase flex items-center gap-2">
                  <CheckCircle size={20} />
                  VIP Status Granted!
                </div>
                <p className="text-sm font-bold text-gray-600 dark:text-gray-300">Gossip energy score: 999999/10</p>
              </motion.div>
            )}

            {scanState === "idle" && (
              <div className="text-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl text-gray-600 dark:text-gray-300 font-medium italic">
                "I'll join from Wembley and reveal the next part of the plan." 🕵️‍♂️
              </div>
            )}
          </div>
        </div>

        {scanState === "idle" && (
          <button
            onClick={handleStartScan}
            className="w-full mt-8 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-2xl shadow-xl transition-all transform hover:scale-105 active:scale-95 text-lg flex items-center justify-center gap-3 animate-bounce"
          >
            <ScanFace size={24} />
            Scan Face to Get Ticket 🎫
          </button>
        )}

        {scanState === "completed" && (
          <button
            onClick={onNext}
            className="w-full mt-8 bg-gray-900 dark:bg-white dark:text-gray-900 text-white font-bold py-4 px-6 rounded-2xl shadow-xl transition-all transform hover:scale-105 active:scale-95 text-lg flex items-center justify-center gap-3"
          >
            <TrainFront size={24} />
            Acknowledged! Let's Go 👉
          </button>
        )}
      </motion.div>
    </div>
  );
}
