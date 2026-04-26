"use client";

import { motion } from "framer-motion";
import { Headphones, PenTool, Lightbulb, Share2 } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Listen, Read, Watch",
    desc: "Absorb knowledge through attentive listening, thoughtful reading, and mindful observation[cite: 6, 7].",
    icon: <Headphones className="w-6 h-6" />,
    color: "bg-blue-50 text-blue-600 border-blue-200"
  },
  {
    id: 2,
    title: "Practice",
    desc: "Deep learning begins with deliberate and consistent practice through recollection and repetition[cite: 9, 10, 11, 12].",
    icon: <PenTool className="w-6 h-6" />,
    color: "bg-orange-50 text-orange-600 border-orange-200"
  },
  {
    id: 3,
    title: "Apply Knowledge",
    desc: "Put understanding into action. Solve problems, create value, and engage in real-world tasks[cite: 14, 15].",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "bg-amber-50 text-amber-600 border-amber-200"
  },
  {
    id: 4,
    title: "Solidify & Share",
    desc: "Knowledge becomes permanent when lived and shared. Teach others to reinforce understanding[cite: 17, 18, 20].",
    icon: <Share2 className="w-6 h-6" />,
    color: "bg-emerald-50 text-emerald-600 border-emerald-200"
  }
];

export function Methodology() {
  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-gurukul-dark mb-4"
          >
            Our 4-Step Teaching Methodology
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "96px" }}
            viewport={{ once: true }}
            className="h-1 bg-gurukul-saffron mx-auto rounded-full mb-6" 
          />
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A systematic approach combining ancient discipline with modern cognitive science to transform theory into meaningful practice[cite: 4, 16].
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 transition-transform group-hover:scale-110 group-active:scale-95 ${step.color}`}>
                {step.icon}
              </div>
              <div className="text-sm font-bold text-slate-400 mb-2">STEP {step.id}</div>
              <h3 className="text-xl font-bold text-gurukul-dark mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}