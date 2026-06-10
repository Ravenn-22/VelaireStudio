import './Footer.css'

function Footer() {
return (
<footer className="footer">

{/* Background image */}
<div className="footer-bg" />

{/* Content floats on top */}
<div className="footer-content">

{/* Brand */}
<div className="footer-brand">
<h2 className="footer-logo">Velaire</h2>
<p className="footer-copy">© 2026 Velaire. All rights reserved.</p>
<div className="footer-socials">
<a href="#" className="footer-social-btn">IG</a>
<a href="#" className="footer-social-btn">FB</a>
<a href="#" className="footer-social-btn">TW</a>
<a href="#" className="footer-social-btn">LI</a>
</div>
</div>

{/* Quick Links */}
<div className="footer-col">
<p className="footer-col-title">Quick Links</p>
<ul className="footer-links">
<li><a href="#">Home</a></li>
<li><a href="#About">About</a></li>
<li><a href="#Portfolio">Portfolio</a></li>
<li><a href="#Process">Process</a></li>
</ul>
</div>

{/* Services */}
<div className="footer-col">
<p className="footer-col-title">Services</p>
<ul className="footer-links">
<li><a href="#Services">Custom Fashion Design</a></li>
<li><a href="#Services">Bespoke Tailoring</a></li>
<li><a href="#Services">Bridal & Occasion Wear</a></li>
<li><a href="#Services">Personal Styling</a></li>
<li><a href="#Services">Wardrobe Consultation</a></li>
</ul>
</div>

{/* Contact */}
<div className="footer-col">
<p className="footer-col-title">Contact</p>
<ul className="footer-links">
<li><a href="mailto:raspberry@gmail.com">raspberry@gmail.com</a></li>
<li><a href="tel:+2348023133328">+234 802 313 3328</a></li>
<li><a href="#Contact">Book a Session</a></li>
</ul>
</div>

</div>

</footer>
)
}
export default Footer