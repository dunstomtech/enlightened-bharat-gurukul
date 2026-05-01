"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the 'Vedic Soul' in your modern education approach?",
    answer: "While our academic curriculum strictly follows modern CBSE standards, our 'Vedic Soul' refers to the environment and discipline. We integrate ancient practices like focused morning routines, meditation, respect for Gurus (teachers), and holistic character building (Purusharths) to ensure students are grounded and emotionally strong."
  },
  {
    question: "Which grades are currently open for admission?",
    answer: "We are currently accepting applications for Grades 6, 7, and 8. This age group (11-13 years) is the perfect time to build strong foundational habits before entering higher secondary education."
  },
  {
    question: "Is this a boarding school or a day school?",
    answer: "EnlightenedBharat operates as a highly structured Day Boarding School. Students spend extended hours with us to complete their academics, practice, and physical activities on campus, ensuring when they go home, their time is strictly for family bonding and rest."
  },
  {
    question: "How do you track student progress?",
    answer: "We use a rigorous Goal-Based Tracking system. Students have daily stand-ups to plan their day, weekly reviews, and monthly goal assessments covering four pillars: Knowledge, Skills, Healthy Mind, and Healthy Body."
  },
  {
    question: "What is the admissions process?",
    answer: "Step 1: Submit the online application. Step 2: An introductory interaction with the parents and child to align on our Gurukul philosophy. Step 3: A basic academic foundation check. Step 4: Final enrollment."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white px-6 md:px-12 border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-orange-600 font-bold tracking-wider text-sm uppercase">Got Questions?</p>
          <h2 className="text-4xl font-serif font-bold text-[#0A192F]">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition-colors hover:border-blue-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-[#0A192F] pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180 text-blue-600" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}