import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import NotFound from './Pages/Notfound'
import Fouter from './Components/Fouter'
import Navbar from './Components/Navbar'
import Projects from './pages/Projects'





function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />

      </Routes>

      <Fouter />
      
    </div>
  )
}

export default App