"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { assets } from "@/lib/assets"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function Sponsors() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const sponsorTiers = [
    {
      tier: "Platinum Sponsors",
      sponsors: [
        { name: "Sponsor 1", logo: assets.placeholders.logo },
        { name: "Sponsor 2", logo: assets.placeholders.logo },
      ],
    },
    {
      tier: "Gold Sponsors",
      sponsors: [
        { name: "Sponsor 3", logo: assets.placeholders.logo },
        { name: "Sponsor 4", logo: assets.placeholders.logo },
        { name: "Sponsor 5", logo: assets.placeholders.logo },
      ],
    },
    {
      tier: "Silver Sponsors",
      sponsors: [
        { name: "Sponsor 6", logo: assets.placeholders.logo },
        { name: "Sponsor 7", logo: assets.placeholders.logo },
        { name: "Sponsor 8", logo: assets.placeholders.logo },
        { name: "Sponsor 9", logo: assets.placeholders.logo },
      ],
    },
  ]

  return (
    <section id="sponsors" className="py-20 md:py-32 relative overflow-hidden theme-transition">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute top-0 left-0 w-full h-full ${
            isDark ? "bg-gradient-to-b from-black to-black/95" : "bg-gradient-to-b from-white to-gray-50"
          }`}
        ></div>
        <div
          className={`absolute top-1/3 left-1/4 w-96 h-96 rounded-full ${
            isDark ? "bg-tvh-red/10" : "bg-tvh-red/5"
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
            Our <span className="gradient-text">Sponsors</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            TVH is made possible by the generous support of our sponsors who believe in empowering the next generation
            of tech innovators.
          </p>
        </motion.div>

        <div className="space-y-16">
          {sponsorTiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: tierIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-2xl font-bold mb-8 text-center ${isDark ? "text-white" : "text-gray-800"}`}>
                {tier.tier}
              </h3>
              <div className={`grid grid-cols-2 md:grid-cols-${Math.min(tier.sponsors.length, 4)} gap-8`}>
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + sponsorIndex * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-6 rounded-xl flex items-center justify-center group transition-all ${
                      isDark
                        ? "bg-black/50 backdrop-blur-sm border border-white/10 hover:border-white/30"
                        : "bg-white shadow-md border border-gray-100 hover:border-gray-300"
                    }`}
                  >
                    <div className="relative h-24 w-full">
                      <Image
                        src={sponsor.logo || "/placeholder.svg"}
                        alt={sponsor.name}
                        fill
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-800"}`}>Become a Sponsor</h3>
          <p className={`mb-8 max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Interested in sponsoring TVH? Get in touch with us to learn about our sponsorship packages and how you can
            support the next generation of tech talent.
          </p>
          <Button className="bg-tvh-blue hover:bg-tvh-blue/80 text-white font-medium">Sponsorship Information</Button>
        </motion.div>
      </div>
    </section>
  )
}
