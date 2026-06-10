import { useEffect, useRef } from 'react'
import './Process.css'
import processBg from '../assets/casey-chae-BLelHjVnhzw-unsplash.jpg' 

const steps = [
{ id: "01", name: "Consultation", desc: "Your vision, your story. This is where everything begins." },
{ id: "02", name: "Design", desc: "Sketches tailored to you. Every detail considered." },
{ id: "03", name: "Fabric Selection", desc: "Handpicked fabrics chosen for texture, drape and longevity." },
{ id: "04", name: "Measurements", desc: "Precise measurements built for your body and no one else's." },
{ id: "05", name: "Creation & Fitting", desc: "The garment comes to life through careful fitting sessions." },
{ id: "06", name: "Delivery", desc: "Your finished piece, delivered with care and intention." },
]

function Process() {
const sectionRef = useRef(null)

useEffect(() => {
const observer = new IntersectionObserver(
([entry]) => {
if (entry.isIntersecting) sectionRef.current.classList.add('visible')
},
{ threshold: 0.2 }
)
observer.observe(sectionRef.current)
return () => observer.disconnect()
}, [])

return (
<div id="Process" ref={sectionRef}>
<div className="process-bg" />
<div className="process-inner">
<div className="process-header">
<span className="process-eyebrow">How It Works</span>
<h2 className="process-title">The Process</h2>
</div>

<div className="process-track">
<div className="process-line-wrap">
<svg className="process-line-svg" viewBox="0 0 1200 60" preserveAspectRatio="none">
<defs>
<linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
<stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
<stop offset="50%" stopColor="rgba(255,255,255,0.6)" />
<stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
</linearGradient>
</defs>
<path
className="process-line-path"
d="M 0 30 C 100 10, 150 50, 200 30 C 250 10, 300 50, 400 30 C 500 10, 550 50, 600 30 C 650 10, 700 50, 800 30 C 900 10, 950 50, 1000 30 C 1050 10, 1100 50, 1200 30"
fill="none"
stroke="url(#lineGradient)"
strokeWidth="1.5"
strokeDasharray="8 6"
/>
</svg>
</div>

<div className="process-steps">
{steps.map((step, i) => (
<div className="process-step" key={step.id} style={{ transitionDelay: `${i * 0.15}s` }}>
<div className="step-dot">
<div className="step-dot-inner" />
</div>
<div className="step-num">{step.id}</div>
<h3 className="step-name">{step.name}</h3>
<p className="step-desc">{step.desc}</p>
</div>
))}
</div>
</div>
</div>
</div>
)
}
export default Process