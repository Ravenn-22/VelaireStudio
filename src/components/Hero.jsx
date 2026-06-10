import React from "react";
import heroBg from "../assets/Stlyst.mp4";
import './Hero.css'

function Hero(){
    return(
        <>
           <div className="hero-container">
             <video className="hero-video" src={heroBg} autoPlay loop muted playsInline/>
             <div className="hero-overlay" />
             <div className="hero-content">
                <h1 className="head-intro">
                    Where art meets style. <br/>
                    Elegance is defined
                </h1>
                <div className="cta">
                    <a href="#Services">
                        <button class="animated-button"><svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg"><path
                           d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                             </svg>
                             <span class="text">Explore Services</span>
                         <span class="circle"></span>
                         <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                              <path
                               d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                              ></path>
                                 </svg>
                         </button>
                    </a>
                    <a href="#Contact" >

                    <button className="contact-button">
                      <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor"d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path></svg>
                         </div>
                        </div>
                        <span>Book a Session</span>
                    </button>
                    </a>
                </div>
             </div>
         
        
          </div>
        </>
    )
}
export default Hero
