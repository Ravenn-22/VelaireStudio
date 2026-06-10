import {useEffect, useRef} from "react";
import './About.css'
import designer from "../assets/junior-reis-c7kxs1aA4v8-unsplash.jpg"

function About(){
    const ref = useRef(null)
    useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) ref.current.classList.add('visible') },
    { threshold: 0.3 }
  )
  observer.observe(ref.current)
  return () => observer.disconnect()
}, [])

    return(
        <>
        <div  id="About">
            <div className="eyebrow">
                    <h2>About the Designer</h2>
                </div>
       
        <div className="about-container"  >
            <div className="about-left" ref={ref}>
                <div className="about-name">
                    <h1 className="name">Raspberry</h1>
                    <span className="tagline">Fashion that speaks before you do</span>
                </div>
                <div className="bio">
                    <p>
                        With over five years of crafting bespoke pieces, Raspberry has built a reputation for one thing - obessive attention to detail. Every seam, every drape, every silhouete is considered. Her design don't just fit the body, they speak for the person wearing them
                    </p>
                </div>
                <div className="about-stats">
  <div className="stat">
    <span className="stat-num">5+</span>
    <span className="stat-label">Years</span>
  </div>
  <div className="stat">
    <span className="stat-num">100%</span>
    <span className="stat-label">Bespoke</span>
  </div>
  <div className="stat">
    <span className="stat-num">Milwaukee</span>
    <span className="stat-label">Based</span>
  </div>
</div>
            </div>
            <div className="about-right">
                <img src={designer} alt="Fashion designer" srcset="" className="about-img" loading="lazy"/>
            </div>


        </div>
        </div>
        </>
    )
}
export default About