"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"
import { X, Linkedin, Twitter, Mail, Globe, MapPin, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { TeamMember } from "@/lib/team-data"

interface TeamMemberModalProps {
  member: TeamMember | null
  onClose: () => void
}

export default function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const modalBg = isDark ? "bg-black/90" : "bg-white/90"
  const cardBg = isDark ? "bg-black/50" : "bg-white/80"
  const cardBorder = isDark ? "border-white/10" : "border-gray-200"
  const textColor = isDark ? "text-white" : "text-gray-900"
  const mutedTextColor = isDark ? "text-gray-300" : "text-gray-600"

  if (!member) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl ${modalBg} backdrop-blur-md ${cardBorder} border shadow-xl`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 z-10 bg-black/20 text-white rounded-full p-2 hover:bg-black/40 transition-colors"
            onClick={onClose}
          >
            <X size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="relative h-80 md:h-full rounded-lg overflow-hidden">
              <Image
                src={member.image || "/placeholder.svg?height=400&width=400&text=Team+Member"}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className={`text-3xl font-bold mb-2 ${textColor}`}>{member.name}</h2>
              <p className={`text-xl ${mutedTextColor} mb-4`}>{member.title}</p>

              <div className="flex items-center mb-6">
                <Briefcase className={`h-5 w-5 ${mutedTextColor} mr-2`} />
                <span className={mutedTextColor}>{member.department}</span>
                {member.location && (
                  <>
                    <span className={`mx-2 ${mutedTextColor}`}>•</span>
                    <MapPin className={`h-5 w-5 ${mutedTextColor} mr-2`} />
                    <span className={mutedTextColor}>{member.location}</span>
                  </>
                )}
              </div>

              <div className={`space-y-4 ${mutedTextColor} mb-6`}>
                {member.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {member.skills && member.skills.length > 0 && (
                <div className="mb-6">
                  <h3 className={`text-lg font-bold mb-3 ${textColor}`}>Skills & Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDark
                            ? "bg-tvh-blue/20 text-tvh-blue border border-tvh-blue/30"
                            : "bg-tvh-blue/10 text-tvh-blue border border-tvh-blue/20"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                {member.email && (
                  <Button
                    variant="outline"
                    className={`${isDark ? "border-white/20 hover:bg-white/10" : "border-gray-300 hover:bg-gray-100"}`}
                    asChild
                  >
                    <a href={`mailto:${member.email}`}>
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </a>
                  </Button>
                )}
                {member.linkedin && (
                  <Button
                    variant="outline"
                    className={`${isDark ? "border-white/20 hover:bg-white/10" : "border-gray-300 hover:bg-gray-100"}`}
                    asChild
                  >
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                )}
                {member.twitter && (
                  <Button
                    variant="outline"
                    className={`${isDark ? "border-white/20 hover:bg-white/10" : "border-gray-300 hover:bg-gray-100"}`}
                    asChild
                  >
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="mr-2 h-4 w-4" />
                      Twitter
                    </a>
                  </Button>
                )}
                {member.website && (
                  <Button
                    variant="outline"
                    className={`${isDark ? "border-white/20 hover:bg-white/10" : "border-gray-300 hover:bg-gray-100"}`}
                    asChild
                  >
                    <a href={member.website} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      Website
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
