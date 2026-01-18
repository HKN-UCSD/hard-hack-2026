import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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
        <Link to="/past-projects" onClick={() => setMenuOpen(false)}>Past Projects</Link>
        <Link to="/arduinoq" onClick={() => setMenuOpen(false)}>Arduino Uno Q</Link>
      </div>
    </nav>
  );
}
