import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Articles from './components/Articles'
import Skills from './components/Skills'
import Footer from './components/Footer'

export default function App() {
  // Apply stored theme on initial mount
  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'dark'
    document.documentElement.setAttribute('data-theme', stored)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        {/* <Articles /> */}
        <Skills />
      </main>
      <Footer />
    </>
  )
}
