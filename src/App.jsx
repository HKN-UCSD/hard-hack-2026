import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar.jsx"
import Hero from './components/hero.jsx'
import SponsorCard from './components/sponsors.jsx'
import FAQCard from "./components/FAQ.jsx"
import PastProjects from "./PastProjects.jsx"
import ArduinoUnoQ from './arduinoq.jsx';

function App() {

  return (
    <div className="App">
      <Navbar logoSrc="/media/logos/HARD Hack 2026 logo.png" />

      <Routes>
        <Route path="/" element={
            <>
              <section id="home" className="home-section">
                <Hero bannerSrc="/media/banner/2026 HARD HACK Banner Design.png" bannerAlt="Hard Hack 2026" date="Date: January 24th & 25th, 2026" 
                form="https://docs.google.com/forms/d/e/1FAIpQLScf3--P9qzx-4njh8XrNIpzY50MXeqn6gGIpuoLH7RSs0G5Dw/viewform?usp=dialog"
                />
              </section>

              <section id="sponsors" className="sponsor-section">
                <h2 className="sponsor-title">Our Sponsors</h2>

                <div className="sponsor-list">
                  <SponsorCard title="UCSD ECE Department" imgSrc="ece_logo.png" imgAlt="ECE">
                    <p>
                      Supporting student innovation, technical excellence, and
                      professional development within engineering.
                    </p>
                  </SponsorCard>

                  <SponsorCard title="Digi-Key Electronics" imgSrc="digi_key_logo.png" imgAlt="Digi-Key">
                    <p>
                      Empowering engineers with components, tools, and resources
                      for rapid prototyping and learning.
                    </p>
                  </SponsorCard>

                  <SponsorCard title="Qualcomm" imgSrc="qualcomm.png" imgAlt="Qualcomm">
                    <p>
                      Driving innovation in wireless technologies and microcontroller development supporting
                      future engineers through education initiatives.
                    </p>
                  </SponsorCard>

                  <SponsorCard title="Monster Energy" imgSrc="monster.png" imgAlt="Monster">
                    <p>
                      Fueling creativity, collaboration, and late-night builds.
                    </p>
                  </SponsorCard>
                </div>
              </section>

              <section id="faq" className="faq-section">
                <div><h2 className="faq-title">Frequently Asked Questions</h2></div>

                <div className="faq-list">
                  {(() => {
                    return (
                      <FAQCard title="What are the rules?">
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
                      </FAQCard>
                    );
                  })()}

                  {(() => {
                    return (
                      <FAQCard title="I am a non-UCSD Affiliate, how should I join?">
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
                      </FAQCard>
                    );
                  })()}

                  {(() => {
                    return (
                      <FAQCard title="What is the schedule for HardHack like?">
                        <p>
                          The latest schedule can be found{" "}
                          <a
                            href="https://docs.google.com/spreadsheets/d/1ihSYHDD8JpAtZpU26DFgQgHUk2Z7AXW1J3ahGX50Yjs/edit?gid=0#gid=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#2d535e", textDecoration: "underline" }}
                          >
                            here
                          </a>
                        </p>
                      </FAQCard>
                    );
                  })()}
                
                  {(() => {
                    return (
                      <FAQCard title="What is a hackathon?">
                        <p>A hackathon is a gathering where people collaboratively build a project from the ground-up over a short period of time. While working on a particular project, the idea is for each group member to have the ability and freedom to work on whatever they want.</p>
                      </FAQCard>
                    );
                  })()}

                  {(() => {
                    return (
                      <FAQCard title="Do I need any prior experience?">
                        <p>No, prior experience is not required to participate in the event. To cater to all experience levels, we have separate judging categories for Beginner, Intermediate and Advanced teams. Additionally, we have workshops planned throughout the event for participants to learn new technical and professional skills.</p>
                      </FAQCard>
                    );
                  })()}

                  {(() => {
                    return (
                      <FAQCard title="Is it free?">
                        <p>Yes! There is no cost to participate in the event, all costs are covered by the ECE department and Associated Students UCSD. The only perceived cost to participants is the time and effort you put into your project and networking during the event.</p>
                      </FAQCard>
                    );
                  })()}

                  {(() => {
                    return (
                      <FAQCard title="In-person, hybrid, or virtual?">
                        <p>Hard hack will be in-person.</p>
                      </FAQCard>
                    );
                  })()}

                  {(() => {
                    return (
                      <FAQCard title="What do I bring?">
                        <p>Recommended items: sleeping bag, pillow, blanket, comfortable clothing, toiletries, water bottles, energy drinks and snacks. There will be water refill stations and we will be providing drinks and snacks.</p>
                      </FAQCard>
                    );
                  })()}

                  {(() => {
                    return (
                      <FAQCard title="What parts will I have access to?">
                        <p>We have many Arduinos and basic components for use as well as quite a few sensors. During the event, we will have a dedicated parts room with a database of parts you can search through. Feel free to reach out if you need specialized hardware or bring your own parts!</p>
                      </FAQCard>
                    );
                  })()}

                  {(() => {
                    return (
                      <FAQCard title="Do I need a team?">
                        <p>Teams are up to 4 people, so feel free to work by yourself, in a pair, or with a full team of 4! However, it is recommended to form a team of 4 just because it's you and 3 other people working on one project versus just yourself.</p>
                      </FAQCard>
                    );
                  })()}

                  {(() => {
                    return (
                      <FAQCard title="What are the themes/tracks?">
                        <p>Make sure to follow our Instagram account before Week 3 of Winter quarter, we will be doing a theme and track reveal leading up to the event!!</p>
                      </FAQCard>
                    );
                  })()}

                  {(() => {
                    return (
                      <FAQCard title="Where is it?">
                        <p>Qualcomm Room, first floor of Jacobs Hall at UC San Diego</p>
                      </FAQCard>
                    );
                  })()}

                  {(() => {
                    return (
                      <FAQCard title="When is it?">
                        <p>January 24th 2026 10AM - January 25th 2026 10:30AM</p>
                      </FAQCard>
                    );
                  })()}

                  {(() => {
                    return (
                      <FAQCard title="Will it be held overnight?">
                        <p>Email hardhack@eng.ucsd.edu if you are interested in volunteering as a mentor and/or presiding as a judge.</p>
                      </FAQCard>
                    );
                  })()}

                  {(() => {
                    return (
                      <FAQCard title="How to be a mentor or judge?">
                        <p>Yes, this year we have secured overnight security, so the event will be held overnight. Participants are welcome to stay throughout the night to work on their projects!</p>
                      </FAQCard>
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
  )
}

export default App
