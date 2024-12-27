import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Transport from './pages/Transport'
import Contact from './pages/Contact_Locations'
import Clients from './pages/Clients'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Clients />} />
      </Routes>
    </Router>
  )
}

export default App
