import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar.jsx"
import Hero from './components/hero.jsx'
import Sponsors from './components/Sponsors.jsx'
import FAQ from "./components/FAQ.jsx"
import PastProjects from "./PastProjects.jsx"
import ArduinoUnoQ from './arduinoq.jsx';
import siteConfig from './config/siteConfig.js'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <section id="home" className="home-section">
              <Hero
                date={`Date: ${siteConfig.dateText}`}
                location={`Location: ${siteConfig.location}`}
                form={siteConfig.signupForm}
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