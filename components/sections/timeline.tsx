"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin } from "lucide-react"
import { useTheme } from "next-themes"

export default function Timeline() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const timelineEvents = [
    {
      day: "Day 1",
      date: "October 15, 2024",
      events: [
        { time: "08:00 - 09:00", title: "Registration & Check-in", location: "Main Hall" },
        { time: "09:30 - 10:30", title: "Opening Ceremony", location: "Auditorium" },
        { time: "11:00 - 12:00", title: "Team Formation", location: "Collaboration Space" },
        { time: "12:00 - 13:00", title: "Lunch Break", location: "Dining Area" },
        { time: "13:00 - 18:00", title: "Hacking Begins", location: "Hacking Zones" },
        { time: "18:00 - 19:00", title: "Dinner", location: "Dining Area" },
        { time: "19:00 - 21:00", title: "Workshop: AI Integration", location: "Workshop Room A" },
      ],
    },
    {
      day: "Day 2",
      date: "October 16, 2024",
      events: [
        { time: "08:00 - 09:00", title: "Breakfast", location: "Dining Area" },
        { time: "09:00 - 12:00", title: "Hacking Continues", location: "Hacking Zones" },
        { time: "12:00 - 13:00", title: "Lunch Break", location: "Dining Area" },
        { time: "14:00 - 15:00", title: "Mentor Sessions", location: "Mentoring Area" },
        { time: "18:00 - 19:00", title: "Dinner", location: "Dining Area" },
        { time: "19:00 - 21:00", title: "Workshop: Pitch Perfect", location: "Workshop Room B" },
      ],
    },
    {
      day: "Day 3",
      date: "October 17, 2024",
      events: [
        { time: "08:00 - 09:00", title: "Breakfast", location: "Dining Area" },
        { time: "09:00 - 12:00", title: "Final Hacking Hours", location: "Hacking Zones" },
        { time: "12:00", title: "Submission Deadline", location: "Online Platform" },
        { time: "12:00 - 13:00", title: "Lunch Break", location: "Dining Area" },
        { time: "14:00 - 16:00", title: "Project Presentations", location: "Auditorium" },
        { time: "16:30 - 17:30", title: "Judging", location: "Judging Rooms" },
        { time: "18:00 - 19:30", title: "Closing Ceremony & Awards", location: "Auditorium" },
      ],
    },
  ]

  const bgGradient = isDark ? "bg-gradient-to-b from-black/95 to-black" : "bg-gradient-to-b from-gray-50 to-white"
  const textColor = isDark ? "text-white" : "text-gray-900"
  const mutedTextColor = isDark ? "text-gray-300" : "text-gray-600"
  const cardBg = isDark ? "bg-black/50" : "bg-white/80"
  const cardBorder = isDark ? "border-white/10" : "border-gray-200"

  return (
    <section id="timeline" className="py-20 md:py-32 relative overflow-hidden theme-transition">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-0 left-0 w-full h-full ${bgGradient}`}></div>
        <div
          className={`absolute bottom-1/4 left-0 w-96 h-96 rounded-full ${
            isDark ? "bg-tvh-blue/10" : "bg-tvh-blue/5"
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
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 font-heading ${textColor}`}>
            Event <span className="gradient-text">Timeline</span>
          </h2>
          <p className={`text-xl ${mutedTextColor} max-w-3xl mx-auto`}>
            Your guide to the 48-hour hackathon journey. From kickoff to awards, here's what to expect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {timelineEvents.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: dayIndex * 0.2 }}
              viewport={{ once: true }}
              className={`${cardBg} backdrop-blur-sm rounded-xl ${cardBorder} overflow-hidden`}
            >
              <div
                className={`p-6 ${
                  dayIndex === 0
                    ? "bg-tvh-red/20 border-b border-tvh-red/30"
                    : dayIndex === 1
                      ? "bg-tvh-yellow/10 border-b border-tvh-yellow/30"
                      : "bg-tvh-blue/20 border-b border-tvh-blue/30"
                }`}
              >
                <h3 className={`text-2xl font-bold ${textColor} mb-2`}>{day.day}</h3>
                <div className={`flex items-center ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{day.date}</span>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-6">
                  {day.events.map((event, eventIndex) => (
                    <motion.li
                      key={event.title}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + eventIndex * 0.05 }}
                      viewport={{ once: true }}
                      className={`relative pl-6 border-l-2 ${
                        isDark ? "border-gray-700" : "border-gray-300"
                      } hover:border-tvh-yellow transition-colors`}
                    >
                      <div
                        className={`absolute -left-[5px] top-0 h-2 w-2 rounded-full ${
                          isDark ? "bg-gray-700" : "bg-gray-300"
                        } group-hover:bg-tvh-yellow`}
                      ></div>
                      <p className={`${isDark ? "text-gray-400" : "text-gray-500"} flex items-center mb-1`}>
                        <Clock className="h-3 w-3 mr-1" />
                        <span className="text-sm">{event.time}</span>
                      </p>
                      <h4 className={`${textColor} font-medium mb-1`}>{event.title}</h4>
                      <p className={`${isDark ? "text-gray-400" : "text-gray-500"} text-sm flex items-center`}>
                        <MapPin className="h-3 w-3 mr-1" />
                        {event.location}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
