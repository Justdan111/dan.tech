import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'
import { About } from '@/components/sections/about'
import { Hero } from '@/components/sections/hero'
import { Projects } from '@/components/sections/projects'
import { Research } from '@/components/sections/research'
import { Skills } from '@/components/sections/skills'
import { Contact } from 'lucide-react'


export default function page() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
}
