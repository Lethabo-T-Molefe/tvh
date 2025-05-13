"use client"
import { useTheme } from "next-themes"
import Image from "next/image"
import type { TeamMember } from "@/lib/team-data"

interface TeamMemberDetailsProps {
  member: TeamMember
}

export default function TeamMemberDetails({ member }: TeamMemberDetailsProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const cardBg = isDark ? "bg-black/50" : "bg-white/80"
  const cardBorder = isDark ? "border-white/10" : "border-gray-200"
  const textColor = isDark ? "text-white" : "text-gray-900"
  const mutedTextColor = isDark ? "text-gray-300" : "text-gray-600"

  return (
    <div className="container mx-auto px-4 py-16">
      <div className={`${cardBg} backdrop-blur-sm rounded-xl border ${cardBorder} overflow-hidden`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="relative h-80 md:h-full w-full">
              <Image
                src={member.image || "/placeholder.svg?height=400&width=400&text=Team+Member"}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="p-8 md:col-span-2">
            <h1 className={`text-3xl md:text-4xl font-bold mb-2 ${textColor}`}>{member.name}</h1>
            <p className={`text-xl ${mutedTextColor} mb-4`}>{member.title}</p>

\
