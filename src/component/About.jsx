import React from 'react'
import { GoArrowRight } from 'react-icons/go'

const About = () => {
  return (
    <div className='about'>
      <div className="about-img">
        <div className="loader">
          <img src="./abt.webp" alt="" />
        </div>
        <img src="./aboutimg.webp" alt="" />
      </div>
      <div className="about-text">
          <span className="text-box">ABOUT ME</span><br />
          <h1>I AM AVAILABLE FOR</h1>
          <h1 style={{ color: "#0788ff", fontWeight: "500" }}>UI DESIGN PROJECT</h1>
          <p>I love building websites that are easy to use and can be accessed by anyone. I also love making my clients happy with their site’s performance, so they can see it on any device they have. </p>
          <div className="skills">
            <div>REACT.js <br /> +</div>
            <div>NODE.js <br />+</div>
            <div>JAVASCRIPT <br />+</div>
          </div>
          <button className='btn btn-primary rounded-5'>Get In Touch<GoArrowRight /></button>
      </div>
    </div>
  )
}

export default About