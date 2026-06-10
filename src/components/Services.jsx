import './Services.css'
import img1 from '../assets/olesia-buiar-l_E7pnixyPs-unsplash.jpg'
import img2 from '../assets/darling-arias-tX62O5F3AfU-unsplash.jpg'
import img3 from '../assets/nur-demirbas-8K9tvrWdYKo-unsplash.jpg'
import img4 from '../assets/mojor-zhu-Qfdb1GbasNk-unsplash.jpg'
import img5 from '../assets/olesia-buiar-HCRYIjtGybs-unsplash.jpg'
import img6 from '../assets/olesia-buiar-l_E7pnixyPs-unsplash.jpg'
import img7 from '../assets/marina-abrosimova-S-T0FPEnGZM-unsplash.jpg'
import img8 from '../assets/victor-volkov-xssNT5VjsyM-unsplash.jpg'

const services = [
{ id: 1, type: "image", img: img6, name: "Custom Fashion Design", desc: "One-of-a-kind pieces designed around your body, personality and vision.", size: "tall" },
{ id: 2, type: "image", img: img1, name: "Bespoke Tailoring", desc: "Every stitch placed with intention.", size: "normal" },
{ id: 3, type: "image", img: img7, name: "Bridal & Occasion Wear", desc: "Crafted for the moments that matter most.", size: "wide" },
{ id: 4, type: "image", img: img2, name: "Alterations & Fittings", desc: "Precise alterations that feel like the garment was always yours.", size: "wide" },
{ id: 5, type: "image", img: img5, name: "Personal Styling", desc: "A curated eye on your wardrobe. Styling sessions that define your aesthetic.", size: "normal" },
{ id: 6, type: "image", img: img4, name: "Wardrobe Consultation", desc: "Clarity for your closet. A full audit of what you own and what you need.", size: "normal" },
{ id: 7, type: "image", img: img8, name: "Corporate & Uniform Design", desc: "Workwear that carries your brand identity.", size: "normal" },
{ id: 8, type: "image", img: img3, name: "Fashion Collection Development", desc: "From concept to finished collection. Full creative support for designers ready to launch.", size: "wide" },
]

function Services() {
return (
<div id="Services">
<div className="services-header">
<span className="services-eyebrow">What She Offers</span>
<h2 className="services-title">Services</h2>
</div>

<div className="bento-grid">
{services.map(s => (
<div
key={s.id}
className={`bento-cell ${s.size} ${s.type}`}
style={s.type === 'color' ? { background: s.bg } : {}}
>
{s.type === 'image' && s.img && (
<img src={s.img} alt={s.name} className="bento-img" />
)}
{s.type === 'image' && !s.img && (
<div className="bento-img-placeholder" />
)}
<div className={`bento-content ${s.bg === '#f5f0e8' || s.bg === '#c9a99a' || s.bg === '#8a9e8a' ? 'dark-text' : ''}`}>
<h3 className="bento-name">{s.name}</h3>
<p className="bento-desc">{s.desc}</p>
</div>
</div>
))}
</div>

<div className="services-cta">
<a href="#Contact" className="services-cta-btn">Book a Consultation</a>
</div>
</div>
)
}
export default Services
