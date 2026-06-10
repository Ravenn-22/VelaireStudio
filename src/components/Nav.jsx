import { useState, useEffect } from "react";
import './Nav.css'


function Nav(){
     const [scrolled, setScrolled] = useState(false);
      const [menuOpen, setMenuOpen] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
      }, [])

    return(
        <>
           <nav className={`nav-container ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-brand">
          Velaire
        </div>

        <ul className="nav-links">
          <li><a href="#About">About Us</a></li>
          <li><a href="#Portfolio">Portfolio</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#Process">Process</a></li>
         
         
        </ul>

        <div id="conts">
          <a href="#Contact">Book a Session</a>
        </div>

        <button
          className={`nav-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* mobile drawer */}
      <ul className={`nav-mobile ${menuOpen ? "open" : ""}`}>
        <li><a href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#About" onClick={() => setMenuOpen(false)}>About Us</a></li>
        <li><a href="#Services" onClick={() => setMenuOpen(false)}>Services</a></li>
        <li><a href="#Portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
        
        <li>
          <a href="#Contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>
           Book a Session
          </a>
        </li>
      </ul>
      
        </>

    )
}
export default Nav;