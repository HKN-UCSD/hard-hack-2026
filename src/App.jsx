import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar.jsx"
import Hero from './components/hero.jsx'
import Sponsors from './components/Sponsors.jsx'
import FAQ from "./components/FAQ.jsx"
import PastProjects from "./PastProjects.jsx"
import SponsorSpotlight, { SponsorSpotlightEnable } from './SponsorSpotlight.jsx';

function App() {
  return (
    <div className="App">
      <Navbar logoSrc="/media/logos/HARD Hack 2026 logo.png" />

      <Routes>
        <Route path="/" element={
          <>
            <section id="home" className="home-section">
              <Hero
                bannerSrc="/media/banner/2026 HARD HACK Banner Design.png"
                bannerAlt="Hard Hack 2026"
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
        {SponsorSpotlightEnable && (<Route path="/sponsor-spotlight" element={<SponsorSpotlight />} />)}
      </Routes>
    </div>
  )
}

export default App