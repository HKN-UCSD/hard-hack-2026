import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import MLHBanner from "./MLHBanner.jsx";

function Navbar({ logoSrc = "/media/theme/logo.png" }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [navSlideOut, setNavSlideOut] = useState(false);
    const [showBanner, setShowBanner] = useState(false);

    // Only navbar if not in hamburger mode (desktop)
    useEffect(() => {
        const isMobile = window.innerWidth <= 768;
        if (!isMobile) {
            setNavSlideOut(true);
            const timer = setTimeout(() => setShowBanner(true), 1300); // 0.5s delay + 0.8s animation
            return () => clearTimeout(timer);
        } else {
            setShowBanner(true);
        }
    }, []);

    return (
        <>
            <MLHBanner trigger={showBanner} imgSrc="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-gray.svg" imgAlt="Major League Hacking 2026 Hackathon Season"
            href="https://mlh.io/eu?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=gray"
            />

            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logoSrc} alt="Hard Hack Logo" />
                </div>

                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>

                <div
                    className={`navbar-links ${menuOpen ? "open" : ""}${navSlideOut ? " navbar-links-slide-out" : ""}`}
                    style={showBanner ? { transform: 'translateX(0)' } : {}}
                >
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="https://docs.google.com/spreadsheets/d/1ihSYHDD8JpAtZpU26DFgQgHUk2Z7AXW1J3ahGX50Yjs/edit?gid=0#gid=0" onClick={() => setMenuOpen(false)}>
                        Schedule
                    </Link>
                    <Link to="/past-projects" onClick={() => setMenuOpen(false)}>
                        Past Projects
                    </Link>
                    <Link to="/arduinoq" onClick={() => setMenuOpen(false)}>
                        Arduino Uno Q
                    </Link>
                    
                </div>
            </nav>
        </>
    );
}

export default Navbar;