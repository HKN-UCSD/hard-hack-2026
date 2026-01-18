import './App.css'
import { useState, useEffect } from 'react'
function MLHBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 100); // allow initial render
  }, []);
  return (
    <a
      id="mlh-trust-badge"
      className={show ? 'mlh-banner-slide' : 'mlh-banner-initial'}
      href="https://mlh.io/eu?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=gray"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'block',
        maxWidth: '100px',
        minWidth: '60px',
        position: 'fixed',
        right: '50px',
        top: 0,
        width: '10%',
        zIndex: 10000,
      }}
    >
      <img
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-gray.svg"
        alt="Major League Hacking 2026 Hackathon Season"
        style={{ width: '100%' }}
      />
    </a>
  );
}
import { useFadeInOnScroll } from './useFadeInOnScroll.js';

import { Routes, Route, Link } from "react-router-dom"
import PastProjects from "./PastProjects.jsx"

import ArduinoUnoQ from './arduinoq.jsx';


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [flippedCards, setFlippedCards] = useState({})

  const toggleCard = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <>
      <MLHBanner />
      <div className="App">
      <nav className="navbar">
      <div className="navbar-logo">
        <img src="/media/logos/HARD Hack 2026 logo.png" alt="Hard Hack Logo" />
      </div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/past-projects" onClick={() => setMenuOpen(false)}>
          Past Projects
        </Link>
        <Link to="/arduinoq" onClick={() => setMenuOpen(false)}>
          Arduino Uno Q
        </Link>
      </div>
    </nav>

      <Routes>
        <Route path="/" element={
          <>
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
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScf3--P9qzx-4njh8XrNIpzY50MXeqn6gGIpuoLH7RSs0G5Dw/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="signup-button">Sign Up</button>
                  </a>
                </div>
              </div>
            </section>

            <section id="sponsors" className="faq-section">
              <div><h2 className="faq-title">Our Sponsors</h2></div>
              <div className="sponsor-grid">
                <div className="sponsor-item">
                  <img src="/media/logos/UCSDLogo_JSOE_BlueGold.png" alt="JSOE" />
                </div>
                <div className="sponsor-item">
                  <img src="/media/logos/digi_key_logo.png" alt="Digi-Key" />
                </div>
                <div className="sponsor-item">
                  <img src="/media/logos/monster.png" alt="Monster" />
                </div>
                <div className="sponsor-item">
                  <img src="/media/logos/qualcomm.png" alt="Qualcomm" />
                </div>
              </div>

            </section>

            <section id="faq" className="faq-section">

              <div><h2 className="faq-title">Frequently Asked Questions</h2></div>
              <div className="faq-list">

                {(() => {
                  const [ref0, visible0] = useFadeInOnScroll();
                  return (
                    <div
                      ref={ref0}
                      className={`faq-item${flippedCards[0] ? ' expanded' : ''}${visible0 ? ' fade-in' : ''}`}
                      onClick={() => toggleCard(0)}
                    >
                  <div className="faq-question">
                    <h3>What are the rules?</h3>
                    <div className="expand-arrow">{flippedCards[0] ? '−' : '+'}</div>
                  </div>
                  <div className="faq-answer">
                    <p>
                      HARD Hack follows the{" "}
                      <a
                        href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#2d535e", textDecoration: "underline" }}
                      >
                      Major League Hacking (MLH) Code of Conduct
                      </a>
                      . All
                      participants are expected to behave professionally, respectfully, and
                      inclusively throughout the event. Harassment, discrimination, or disruptive
                      behavior will not be tolerated. By attending, you agree to follow these rules
                      to help create a safe and welcoming environment for everyone.

                    </p>
                  </div>
                    </div>
                  );
                })()}

                {(() => {
                  const [ref13, visible13] = useFadeInOnScroll();
                  return (
                    <div
                      ref={ref13}
                      className={`faq-item${flippedCards[13] ? ' expanded' : ''}${visible13 ? ' fade-in' : ''}`}
                      onClick={() => toggleCard(13)}
                    >
                  <div className="faq-question">
                    <h3>I am a non-UCSD Affiliate, how should I join?</h3>
                    <div className="expand-arrow">{flippedCards[13] ? '−' : '+'}</div>
                  </div>
                  <div className="faq-answer">
                    <p>
                      Non-UCSD affiliates are welcome to join HARD Hack! You can register through the sign-up form on our website. 
                      Please print and fill out{" "}
                      <a
                        href="/media/docs/Hard_Hack_Waiver.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#2d535e", textDecoration: "underline" }}
                      >
                        this form
                      </a>
                      {" "}
                      with your details with your team(And bring it to the day of competition). We look forward to having you at the event!

                    </p>
                  </div>
                    </div>
                  );
                })()}


                {(() => {
                  const [ref1, visible1] = useFadeInOnScroll();
                  return (
                    <div
                      ref={ref1}
                      className={`faq-item${flippedCards[1] ? ' expanded' : ''}${visible1 ? ' fade-in' : ''}`}
                      onClick={() => toggleCard(1)}
                    >
                  <div className="faq-question">
                    <h3>What is a hackathon?</h3>
                    <div className="expand-arrow">{flippedCards[1] ? '−' : '+'}</div>
                  </div>
                  <div className="faq-answer">
                    <p>A hackathon is a gathering where people collaboratively build a project from the ground-up over a short period of time. While working on a particular project, the idea is for each group member to have the ability and freedom to work on whatever they want.</p>
                  </div>
                    </div>
                  );
                })()}

                {(() => {
                  const [ref2, visible2] = useFadeInOnScroll();
                  return (
                    <div
                      ref={ref2}
                      className={`faq-item${flippedCards[2] ? ' expanded' : ''}${visible2 ? ' fade-in' : ''}`}
                      onClick={() => toggleCard(2)}
                    >
                  <div className="faq-question">
                    <h3>Do I need any prior experience?</h3>
                    <div className="expand-arrow">{flippedCards[2] ? '−' : '+'}</div>
                  </div>
                  <div className="faq-answer">
                    <p>No, prior experience is not required to participate in the event. To cater to all experience levels, we have separate judging categories for Beginner, Intermediate and Advanced teams. Additionally, we have workshops planned throughout the event for participants to learn new technical and professional skills.</p>
                  </div>
                    </div>
                  );
                })()}

                {(() => {
                  const [ref3, visible3] = useFadeInOnScroll();
                  return (
                    <div
                      ref={ref3}
                      className={`faq-item${flippedCards[3] ? ' expanded' : ''}${visible3 ? ' fade-in' : ''}`}
                      onClick={() => toggleCard(3)}
                    >
                  <div className="faq-question">
                    <h3>Is it free?</h3>
                    <div className="expand-arrow">{flippedCards[3] ? '−' : '+'}</div>
                  </div>
                  <div className="faq-answer">
                    <p>Yes! There is no cost to participate in the event, all costs are covered by the ECE department and Associated Students UCSD. The only perceived cost to participants is the time and effort you put into your project and networking during the event.</p>
                  </div>
                    </div>
                  );
                })()}

                {(() => {
                  const [ref4, visible4] = useFadeInOnScroll();
                  return (
                    <div
                      ref={ref4}
                      className={`faq-item${flippedCards[4] ? ' expanded' : ''}${visible4 ? ' fade-in' : ''}`}
                      onClick={() => toggleCard(4)}
                    >
                  <div className="faq-question">
                    <h3>In-person, hybrid, or virtual?</h3>
                    <div className="expand-arrow">{flippedCards[4] ? '−' : '+'}</div>
                  </div>
                  <div className="faq-answer">
                    <p>Hard hack will be in-person.</p>
                  </div>
                    </div>
                  );
                })()}

                {(() => {
                  const [ref5, visible5] = useFadeInOnScroll();
                  return (
                    <div
                      ref={ref5}
                      className={`faq-item${flippedCards[5] ? ' expanded' : ''}${visible5 ? ' fade-in' : ''}`}
                      onClick={() => toggleCard(5)}
                    >
                  <div className="faq-question">
                    <h3>What do I bring?</h3>
                    <div className="expand-arrow">{flippedCards[5] ? '−' : '+'}</div>
                  </div>
                  <div className="faq-answer">
                    <p>Recommended items: sleeping bag, pillow, blanket, comfortable clothing, toiletries, water bottles, energy drinks and snacks. There will be water refill stations and we will be providing drinks and snacks.</p>
                  </div>
                    </div>
                  );
                })()}

                {(() => {
                  const [ref6, visible6] = useFadeInOnScroll();
                  return (
                    <div
                      ref={ref6}
                      className={`faq-item${flippedCards[6] ? ' expanded' : ''}${visible6 ? ' fade-in' : ''}`}
                      onClick={() => toggleCard(6)}
                    >
                  <div className="faq-question">
                    <h3>What parts will I have access to?</h3>
                    <div className="expand-arrow">{flippedCards[6] ? '−' : '+'}</div>
                  </div>
                  <div className="faq-answer">
                    <p>We have many Arduinos and basic components for use as well as quite a few sensors. During the event, we will have a dedicated parts room with a database of parts you can search through. Feel free to reach out if you need specialized hardware or bring your own parts!</p>
                  </div>
                    </div>
                  );
                })()}

                {(() => {
                  const [ref7, visible7] = useFadeInOnScroll();
                  return (
                    <div
                      ref={ref7}
                      className={`faq-item${flippedCards[7] ? ' expanded' : ''}${visible7 ? ' fade-in' : ''}`}
                      onClick={() => toggleCard(7)}
                    >
                  <div className="faq-question">
                    <h3>Do I need a team?</h3>
                    <div className="expand-arrow">{flippedCards[7] ? '−' : '+'}</div>
                  </div>
                  <div className="faq-answer">
                    <p>Teams are up to 4 people, so feel free to work by yourself, in a pair, or with a full team of 4! However, it is recommended to form a team of 4 just because it's you and 3 other people working on one project versus just yourself.</p>
                  </div>
                    </div>
                  );
                })()}

                

                {(() => {
                  const [ref8, visible8] = useFadeInOnScroll();
                  return (
                    <div
                      ref={ref8}
                      className={`faq-item${flippedCards[8] ? ' expanded' : ''}${visible8 ? ' fade-in' : ''}`}
                      onClick={() => toggleCard(8)}
                    >
                  <div className="faq-question">
                    <h3>What are the themes/tracks?</h3>
                    <div className="expand-arrow">{flippedCards[8] ? '−' : '+'}</div>
                  </div>
                  <div className="faq-answer">
                    <p>Make sure to follow our Instagram account before Week 3 of Winter quarter, we will be doing a theme and track reveal leading up to the event!!</p>
                  </div>
                    </div>
                  );
                })()}

                {(() => {
                  const [ref9, visible9] = useFadeInOnScroll();
                  return (
                    <div
                      ref={ref9}
                      className={`faq-item${flippedCards[9] ? ' expanded' : ''}${visible9 ? ' fade-in' : ''}`}
                      onClick={() => toggleCard(9)}
                    >
                  <div className="faq-question">
                    <h3>Where is it?</h3>
                    <div className="expand-arrow">{flippedCards[9] ? '−' : '+'}</div>
                  </div>
                  <div className="faq-answer">
                    <p>Qualcomm Room, first floor of Jacobs Hall at UC San Diego</p>
                  </div>
                    </div>
                  );
                })()}

                {(() => {
                  const [ref10, visible10] = useFadeInOnScroll();
                  return (
                    <div
                      ref={ref10}
                      className={`faq-item${flippedCards[10] ? ' expanded' : ''}${visible10 ? ' fade-in' : ''}`}
                      onClick={() => toggleCard(10)}
                    >
                  <div className="faq-question">
                    <h3>When is it?</h3>
                    <div className="expand-arrow">{flippedCards[10] ? '−' : '+'}</div>
                  </div>
                  <div className="faq-answer">
                    <p>January 24th 2026 10AM - January 25th 2026 10:30AM</p>
                  </div>
                    </div>
                  );
                })()}

                {(() => {
                  const [ref11, visible11] = useFadeInOnScroll();
                  return (
                    <div
                      ref={ref11}
                      className={`faq-item${flippedCards[11] ? ' expanded' : ''}${visible11 ? ' fade-in' : ''}`}
                      onClick={() => toggleCard(11)}
                    >
                  <div className="faq-question">
                    <h3>How to be a mentor or judge?</h3>
                    <div className="expand-arrow">{flippedCards[11] ? '−' : '+'}</div>
                  </div>
                  <div className="faq-answer">
                    <p>Email hardhack@eng.ucsd.edu if you are interested in volunteering as a mentor and/or presiding as a judge.</p>
                  </div>
                    </div>
                  );
                })()}

                {(() => {
                  const [ref12, visible12] = useFadeInOnScroll();
                  return (
                    <div
                      ref={ref12}
                      className={`faq-item${flippedCards[12] ? ' expanded' : ''}${visible12 ? ' fade-in' : ''}`}
                      onClick={() => toggleCard(12)}
                    >
                  <div className="faq-question">
                    <h3>Will it be held overnight?</h3>
                    <div className="expand-arrow">{flippedCards[12] ? '−' : '+'}</div>
                  </div>
                  <div className="faq-answer">
                    <p>Yes, this year we have secured overnight security, so the event will be held overnight. Participants are welcome to stay throughout the night to work on their projects!</p>
                  </div>
                    </div>
                  );
                })()}
              </div>
            </section>
      </>
          } />
        <Route path="/past-projects" element={<PastProjects />} />
        <Route path="/arduinoq" element={<ArduinoUnoQ />} />
      </Routes>
    </div>
    </>
  )
}

export default App
