function SponsorCard({ title, children, imgSrc, imgAlt }) {
    return (
        <div className="sponsor-row">
            <img src={`/media/logos/${imgSrc}`} alt={imgAlt} />
            <div className="sponsor-text">
                <h3>{title}</h3>
                {children}
            </div>
        </div>
    );
}

export default SponsorCard;