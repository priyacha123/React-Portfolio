import { useEffect } from 'react'
import './App.css'
import About2 from './components/custom/About'
import Contact from './components/custom/Contact'
import Footer from './components/custom/Footer'
import Header from './components/custom/Header'
import Projects from './components/custom/Projects'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // ── Section transitions — smooth opacity on scroll
    const sections = document.querySelectorAll('section')
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0.7 },
        {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 0.5,
          },
        }
      )
    })
  }, [])

  return (
    <>
      <Header />
      <About2 />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
