import Image from 'next/image'
import HeroSection from './components/HeroSection'
import NavBar from './components/Navbar'
import AboutMe from './components/AboutMe'
import ProjectSection from './components/ProjectSection'
import EmailSection from './components/EmailSection'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[black]">
      <NavBar />
      <div class='container mt-24 mx-auto px-12 py-4'>
        <HeroSection />
        <AboutMe />
        <ProjectSection />
        <EmailSection />
      </div>
    </main>
  )
}
