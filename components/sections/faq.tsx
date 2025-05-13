"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"

export default function FAQ() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const faqs = [
    {
      question: "Who can participate in TVH?",
      answer:
        "TVH is open to all registered students from universities across South Africa. You must be an enrolled student at the time of the hackathon to participate.",
    },
    {
      question: "Do I need to be a computer science student?",
      answer:
        "No, TVH welcomes students from all academic backgrounds. Whether you're studying engineering, design, business, or any other field, you're welcome to join and contribute your unique perspective.",
    },
    {
      question: "How big can teams be?",
      answer:
        "Teams can consist of 2-4 members. You can form a team in advance or find teammates during the team formation session at the beginning of the hackathon.",
    },
    {
      question: "What should I bring to the hackathon?",
      answer:
        "You should bring your laptop, charger, any other devices you might need, a valid student ID, comfortable clothes, toiletries, and a sleeping bag if you plan to stay overnight. Meals will be provided during the event.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "No, TVH is completely free for all participants. We provide meals, snacks, and beverages throughout the event, as well as a comfortable hacking space and Wi-Fi.",
    },
    {
      question: "What kind of projects can we build?",
      answer:
        "You can build any type of software or hardware project that addresses the hackathon theme or challenges. This includes web applications, mobile apps, games, IoT solutions, AI/ML projects, and more.",
    },
    {
      question: "Will there be prizes?",
      answer:
        "Yes! TVH offers over R100,000 in prizes across various categories including Best Overall Project, Most Innovative Solution, Best Technical Implementation, and more. Specific prize details will be announced at the opening ceremony.",
    },
  ]

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-32 relative overflow-hidden theme-transition">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute top-0 left-0 w-full h-full ${
            isDark ? "bg-gradient-to-b from-black/95 to-black" : "bg-gradient-to-b from-gray-50 to-white"
          }`}
        ></div>
        <div
          className={`absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full ${
            isDark ? "bg-tvh-yellow/10" : "bg-tvh-yellow/5"
          } blur-3xl`}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 font-heading ${isDark ? "text-white" : "text-gray-800"}`}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Got questions about TVH? Find answers to the most common queries below.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-6 rounded-xl flex justify-between items-center transition-all ${
                  activeIndex === index
                    ? isDark
                      ? "bg-black/70 border-2 border-tvh-yellow/30"
                      : "bg-white shadow-md border-2 border-tvh-yellow/30"
                    : isDark
                      ? "bg-black/50 border border-white/10 hover:border-white/30"
                      : "bg-white shadow-sm border border-gray-100 hover:border-gray-200"
                }`}
              >
                <h3 className={`text-lg font-medium ${isDark ? "text-white" : "text-gray-800"}`}>{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 ${isDark ? "text-gray-400" : "text-gray-500"} transition-transform ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 mt-2 rounded-xl bg-gray-50 dark:bg-black/50"
                >
                  <p className={`text-gray-700 dark:text-gray-300`}>{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
