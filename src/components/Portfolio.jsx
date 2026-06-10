import { useState } from "react";
import './Portfolio.css';
import img1 from '../assets/nuki-chikhladze-Jzu5bRxdGtA-unsplash.jpg'
import img2 from '../assets/masahiro-miyagi-c4ShCVspXUM-unsplash.jpg'
import img3 from '../assets/kirk-thornton-77Ga1TXf3vQ-unsplash.jpg'
import img4 from '../assets/wolfgang-mennel-Ffh2pV0Nq1s-unsplash.jpg'
import img5 from '../assets/christie-luke-Idr_VMRlpj0-unsplash.jpg'
import img6 from '../assets/marina-abrosimova-S-T0FPEnGZM-unsplash.jpg'
import img7 from '../assets/james-bold-35nWF_04Pgg-unsplash.jpg'
import img8 from '../assets/vitor-monthay-8U8HmrnXTEQ-unsplash.jpg'
import img9 from '../assets/konrad-bednarek-qkwBup5hfgY-unsplash.jpg'
import img10 from '../assets/mr-great-heart-w-CBDrNRRkE-unsplash.jpg'

const filters = ["All", "Evening Wear", "Casual", "Bridal"]

const items = [
  { id: 1, img: img1, name: "Bespoke Gown", category: "Evening Wear", year: "2024" },
  { id: 2, img: img2, name: "Summer Set", category: "Casual", year: "2024" },
  { id: 3, img: img3, name: "Summer Set", category: "Casual", year: "2024" },
  { id: 4, img: img4, name: "Summer Set", category: "Casual", year: "2024" },
  { id: 5, img: img5, name: "Summer Set", category: "Casual", year: "2024" },
  { id: 6, img: img6, name: "Bridal Gown", category: "Bridal", year: "2023" },
  { id: 7, img: img7, name: "Bridal Gown", category: "Bridal", year: "2024" },
  { id: 8, img: img8, name: "Bridal Dress", category: "Bridal", year: "2024" },
  { id: 9, img: img9, name: "Bridal Embroidery", category: "Bridal", year: "2025" },
  { id: 10, img: img10, name: "Sets Of Bridal Gowns", category: "Bridal", year: "2026" },
]

function Portfolio(){
  const [active, setActive] = useState("All")
  const [showAll, setShowAll] = useState(false)

  const filtered = active === "All" ? items : items.filter(i => i.category === active)
  const visible = showAll ? filtered : filtered.slice(0, 9)

  return(
    <div id="Portfolio">
      <div className="portfolio-header">
        <h2 className="portfolio-title">The Work</h2>
        <div className="portfolio-filters">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn ${active === f ? "active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="portfolio-grid">
        {visible.map(item => (
          <div className="portfolio-item" key={item.id}>
            <img src={item.img} alt={item.name} className="portfolio-img" loading="lazy" />
            <div className="portfolio-overlay">
              <span className="portfolio-name">{item.name}</span>
              <span className="portfolio-meta">{item.category} · {item.year}</span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length > 9 && !showAll && (
        <div className="portfolio-more">
          <button onClick={() => setShowAll(true)} className="view-more-btn">
            View More
          </button>
        </div>
      )}
    </div>
  )
}
export default Portfolio