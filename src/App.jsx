import React, { useEffect, useState, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const sections = useRef({})

  return (
    <div className="app">
      <Navbar theme={theme} setTheme={setTheme} sections={sections} />
      <main>
        <Hero forwardedRef={(el) => (sections.current.home = el)} />
        <About forwardedRef={(el) => (sections.current.about = el)} />
        <Skills forwardedRef={(el) => (sections.current.skills = el)} />
        <Projects forwardedRef={(el) => (sections.current.projects = el)} />
        <Experience forwardedRef={(el) => (sections.current.experience = el)} />
        <Contact forwardedRef={(el) => (sections.current.contact = el)} />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
