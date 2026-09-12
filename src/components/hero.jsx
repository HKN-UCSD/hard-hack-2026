function Hero({ bannerSrc, bannerAlt, date, form }) {
    return (
        <div className="home-content">
            <img src={bannerSrc} alt={bannerAlt} className="banner" />
                      
            <div className="logos-container">
                <img src="/media/logos/Yonder-Logo-White.png" alt="Yonder Logo" className="sponsor-logo" />
                <img src="/media/logos/HKN-Logo-White.png" alt="HKN Logo" className="sponsor-logo" />
                <img src="/media/logos/IEEE-Logo-White.png" alt="IEEE Logo" className="sponsor-logo" />
            </div>
                  
            <div className="event-details">
                <p className="event-date">{date}</p>
                <p className="event-location">Location: Qualcomm Conference Center</p>

                <a
                    href={form}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="signup-button">Sign Up</button>
                </a>
            </div>
        </div>
    );
}

export default Hero;