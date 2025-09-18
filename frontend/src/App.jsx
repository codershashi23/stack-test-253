import React from 'react'
import ContactSection from './components/ContactSection'
import Hero from './components/Hero'
import Footer from './components/footer'
import Header from './components/header'
import About from './components/About'
import Services from './components/Service'
import Testimonials from './components/Testimonial'
import Features from './components/Features'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Features />
      <ContactSection />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App