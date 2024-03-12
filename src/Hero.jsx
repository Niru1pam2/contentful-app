import React from 'react'
import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum rem quisquam quasi magni nulla alias maxime. Corrupti laboriosam error soluta? Voluptas cumque optio in sed officia rerum eveniet accusantium porro.</p>
        </div>
      </div>
      <div className="img-container">
        <img src={heroImg} alt="women" className='img'/>
      </div>
    </section>
  )
}

export default Hero