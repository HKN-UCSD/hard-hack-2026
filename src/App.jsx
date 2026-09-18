import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar.jsx"
import Hero from './components/hero.jsx'
import Sponsors from './components/Sponsors.jsx'
import FAQ from "./components/FAQ.jsx"
import PastProjects from "./PastProjects.jsx"
import ArduinoUnoQ from './arduinoq.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <section id="home" className="home-section">
              <Hero
                date="Date: January 24th & 25th, 2026"
                location="Location: Qualcomm Conference Center"
                form="https://docs.google.com/forms/d/e/1FAIpQLScf3--P9qzx-4njh8XrNIpzY50MXeqn6gGIpuoLH7RSs0G5Dw/viewform?usp=dialog"
              />
            </section>

            <Sponsors />
            <FAQ />
          </>
        } />

        <Route path="/past-projects" element={<PastProjects />} />
        <Route path="/arduinoq" element={<ArduinoUnoQ />} />
      </Routes>
    </div>
  )
}

export default App