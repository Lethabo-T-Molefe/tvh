import GalleryHeader from "@/components/gallery/gallery-header"
import GalleryGrid from "@/components/gallery/gallery-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TVH Gallery | The Varsity Hackathon",
  description: "Browse photos from TVH events from 2019 to 2024",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background to-background/80 dark:from-black dark:to-black/90"></div>

      <div className="container mx-auto px-4 relative z-10 py-16">
        <GalleryHeader />
        <GalleryGrid />
      </div>
    </main>
  )
}
