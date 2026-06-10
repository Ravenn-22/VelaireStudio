import './Testimonials.css'
import img1 from '../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg'
import img2 from '../assets/microsoft-365-7mBictB_urk-unsplash.jpg'
import img3 from '../assets/jake-nackos-IF9TK5Uy-KI-unsplash.jpg'
import img4 from '../assets/christina-wocintechchat-com-m-0Zx1bDv5BNY-unsplash.jpg'
import img5 from '../assets/darceystone-photography-KmRM8RkL2ZI-unsplash.jpg'
import img6 from '../assets/marco-chilese-nHIb0s-BZMA-unsplash.jpg'
const testimonials = [
{
id: 1,
name: "Sarah Johnson",
img: img1,
quote: "The attention to detail was exceptional. My dress fit perfectly and made me feel confident throughout my event.",
position: "top-left"
},
{
id: 2,
name: "Olayimika Oluwabukola",
img:img2,
quote: "From consultation to delivery, the experience was seamless. The final outfit exceeded my expectations.",
position: "top-right"
},
{
id: 3,
name: "Grace Williams",
img:img3,
quote: "She truly understood my vision and transformed it into something even more beautiful than I imagined.",
position: "mid-left"
},
{
id: 4,
name: "Annabelle Wilson",
img: img4,
quote: "Professional, creative, and reliable. The craftsmanship was outstanding and delivered right on schedule.",
position: "mid-right"
},
{
id: 5,
name: "Olivia Thompson",
img: img5,
quote: "Every stitch reflected excellence. Elegant, unique, and perfectly tailored to my personality.",
position: "bottom-left"
},
{
id: 6,
name: "Aisha Bello",
img: img6,
quote: "Clear communication, precise fittings, and a stunning final result. A truly wonderful experience.",
position: "bottom-right"
},
]

function Testimonials() {
return (
<div id="Testimonials">
<div className="testimonials-header">
<span className="testimonials-eyebrow">Testimonials</span>
</div>

<div className="bubble-scene">
{/* Center statement */}
<div className="bubble-center">
<p className="bubble-center-text">
Dressed by Raspberry.<br />
<em>Crafting Elegance, One stitch at a time.</em>
</p>
<span className="bubble-center-sub">What our clients say</span>
</div>

{/* Bubbles */}
{testimonials.map(t => (
<div className={`bubble-card ${t.position}`} key={t.id}>
<div className="bubble-avatar">
{/* swap src for real image */}
<div className="bubble-avatar-placeholder">
    <img src={t.img} alt={t.name} />

</div>
</div>
<div className="bubble-body">
<p className="bubble-quote">"{t.quote}"</p>
<span className="bubble-name">{t.name}</span>
</div>
</div>
))}

{/* Floating decorative dots */}
<div className="float-dot dot-1" />
<div className="float-dot dot-2" />
<div className="float-dot dot-3" />
</div>
</div>
)
}
export default Testimonials


