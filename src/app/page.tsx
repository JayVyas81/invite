"use client";

import { useState } from "react";
import FloatingEmojis from "@/components/FloatingEmojis";
import PasswordScreen from "@/components/screens/PasswordScreen";
import VerificationScreen from "@/components/screens/VerificationScreen";
import WelcomeScreen from "@/components/screens/WelcomeScreen";
import TimelineScreen from "@/components/screens/TimelineScreen";
import ExcitedAddScreen from "@/components/screens/ExcitedAddScreen";
import UnexpectedScreen from "@/components/screens/UnexpectedScreen";
import OutfitScreen from "@/components/screens/OutfitScreen";
import TravelScreen from "@/components/screens/TravelScreen";
import ReviewScreen from "@/components/screens/ReviewScreen";
import FinalScreen from "@/components/screens/FinalScreen";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setStep((prev) => prev + 1);
  };

  return (
    <main className="bg-gradient-animate relative w-full overflow-hidden font-sans min-h-screen selection:bg-pink-300 selection:text-pink-900">
      <FloatingEmojis />
      
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex justify-center items-center"
          >
            {step === 0 && <PasswordScreen onNext={nextStep} />}
            {step === 1 && <VerificationScreen onNext={nextStep} />}
            {step === 2 && <WelcomeScreen onNext={nextStep} />}
            {step === 3 && <TimelineScreen onNext={nextStep} />}
            {step === 4 && <ExcitedAddScreen onNext={nextStep} />}
            {step === 5 && <UnexpectedScreen onNext={nextStep} />}
            {step === 6 && <OutfitScreen onNext={nextStep} />}
            {step === 7 && <TravelScreen onNext={nextStep} />}
            {step === 8 && <ReviewScreen onNext={nextStep} />}
            {step === 9 && <FinalScreen />}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
