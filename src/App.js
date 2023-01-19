import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import SignUp from './components/SignUp'


function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <About />
      <ContactUs />
      <Footer />
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  )
}

export default App
