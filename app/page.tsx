import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Timeline from "@/components/sections/timeline"
import Sponsors from "@/components/sections/sponsors"
import FAQ from "@/components/sections/faq"
import Contact from "@/components/sections/contact"
import Announcements from "@/components/sections/announcements"
import FloatingParticles from "@/components/ui/floating-particles"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Dynamic background with particles */}
      <div className="fixed inset-0 z-0">
        <FloatingParticles />
      </div>

      <div className="relative z-10">
        <Hero />
        <About />
        <Timeline />
        <Announcements />
        <Sponsors />
        <FAQ />
        <Contact />
      </div>
    </main>
  )
}
