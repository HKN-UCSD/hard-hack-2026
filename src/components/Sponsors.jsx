import SponsorCard from "./SponsorCard.jsx";
import sponsors from "../data/sponsors.js";

function Sponsors() {
    return (
        <section id="sponsors" className="sponsor-section">
            <h2 className="sponsor-title">Our Sponsors</h2>

            <div className="sponsor-list">
                {sponsors.map((s) => (
                    <SponsorCard key={s.name} title={s.name} imgSrc={s.logo} imgAlt={s.name}>
                        <p>{s.description}</p>
                    </SponsorCard>
                ))}
            </div>
        </section>
    );
}

export default Sponsors;
