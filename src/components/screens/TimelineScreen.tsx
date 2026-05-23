"use client";

import { motion } from "framer-motion";
import { Coffee, Map, IceCream, Dice5 } from "lucide-react";

export default function TimelineScreen({ onNext }: { onNext: () => void }) {
  const steps = [
    {
      icon: <Coffee size={32} />,
      title: "Step 1: Grab Coffee ☕",
      color: "bg-orange-500",
      content: [
        "First mission: caffeine acquisition.",
        "Because functioning humans require coffee."
      ],
      gif: "https://media.tenor.com/u5Hg9SEis_sAAAAC/coffee-vec50.gif"
    },
    {
      icon: <Map size={32} />,
      title: "Step 2: Explore Nearby Area 🚶",
      color: "bg-blue-500",
      content: [
        "Walk around.",
        "Judge random pigeons 🐦",
        "Take unnecessary photos 📸",
        "Pretend we're in a travel vlog 📹"
      ],
      gif: "https://media.tenor.com/9PB8op4txJYAAAAC/love.gif"
    },
    {
      icon: <IceCream size={32} />,
      title: "Step 3: Ice Cream Time 🍦",
      color: "bg-pink-500",
      content: [
        "You will purchase me an ice cream.",
        "Unfortunately this is mandatory by international best friendship law, Section 42, Paragraph 9: Under no circumstances can you deny your bestie an ice cream 🍦⚖️"
      ],
      gif: "https://media.tenor.com/zc5tGYgASGUAAAAC/icecream-national-chocolate-ice-cream-day.gif"
    },
    {
      icon: <Dice5 size={32} />,
      title: "Step 4: Random Fun Challenge 😂",
      color: "bg-purple-500",
      content: [
        "🐕 Rate nearby dogs.",
        "🏪 Find weirdest shop sign.",
        "😎 Spot someone wearing sunglasses indoors."
      ],
      gif: "https://media.tenor.com/1p1jgLuzTBoAAAAC/bussieana.gif"
    }
  ];

  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center relative z-10 w-full px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl w-full"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-800 dark:text-white glass-card px-8 py-4 rounded-3xl mx-auto w-fit">
          🗺️ The Master Plan
        </h1>

        <div className="relative border-l-4 border-pink-300 dark:border-pink-800 ml-4 md:ml-8 space-y-12 pb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[22px] top-2 ${step.color} w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white dark:border-gray-900 z-10`}>
                {step.icon}
              </div>

              {/* Card */}
              <div className="glass-card p-6 md:p-8 rounded-3xl shadow-xl transform transition-transform hover:scale-[1.02] flex flex-col sm:flex-row gap-6 items-center sm:items-start text-left">
                <div className="flex-1 w-full">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 flex items-center justify-between">
                    {step.title}
                  </h2>
                  <ul className="space-y-3">
                    {step.content.map((text, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        className="text-lg text-gray-700 dark:text-gray-300 flex items-start"
                      >
                        <span className="mr-2 mt-1 text-pink-500">•</span>
                        {text}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border-4 border-pink-400 dark:border-pink-600 shadow-xl flex-shrink-0 mx-auto sm:mx-0">
                  <img src={step.gif} alt="Funny Reaction" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="bg-gray-800 dark:bg-white dark:text-gray-900 text-white font-bold py-4 px-10 rounded-2xl shadow-xl text-xl w-full md:w-auto"
          >
            Sounds like a plan! Let's continue 👉
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
