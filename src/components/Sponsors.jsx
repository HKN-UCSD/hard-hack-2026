import SponsorCard from "./SponsorCard.jsx";

function Sponsors() {
    return (
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
    );
}

export default Sponsors;