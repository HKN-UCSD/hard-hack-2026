import './App.css'

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/media/logos/HARD Hack 2026 logo.png" alt="Hard Hack Logo" />
        </div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#past-projects">Past Projects</a>
          <a href="#sponsor">Sponsor</a>
        </div>
      </nav>
      <section id="home" className="home-section">
        <div className="home-content">
          <img src="/media/banner/2026 HARD HACK Banner Design.png" alt="Hard Hack 2026" className="banner" />
          
          <div className="logos-container">
            <img src="/media/logos/Yonder-Logo-White.png" alt="Yonder Logo" className="sponsor-logo" />
            <img src="/media/logos/HKN-Logo-White.png" alt="HKN Logo" className="sponsor-logo" />
            <img src="/media/logos/IEEE-Logo-White.png" alt="IEEE Logo" className="sponsor-logo" />
          </div>
          
          <div className="event-details">
            <p className="event-date">Date: January 24th & 25th, 2026</p>
            <p className="event-location">Location: Qualcomm Conference Center</p>
            <button className="signup-button">Sign Up</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
