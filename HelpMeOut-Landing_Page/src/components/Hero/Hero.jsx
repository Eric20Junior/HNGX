import React from 'react'
import './hero.css'
import ArrowRight from '../../images/arrow-right.svg'
import Hero1 from '../../images/hero1.png'
import Hero2 from '../../images/hero2.png'
import Hero3 from '../../images/hero3.png'

export default function Hero() {
  return (
    <section className='hero-container'>
        <div className="hero-left">
            <h1>Show Them Don’t Just Tell</h1>
            <p>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
            <div className="cta">
                <span>Install HelpMeOut</span>
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </div>
        </div>
        <div className="hero-right">
            <div className="hero-start">
                <img src={Hero1} alt='arrow-right' />
                <img src={Hero2} alt='arrow-right' />
            </div>
            <div className="hero-end">
                <img src={Hero3} alt='arrow-right' />
            </div>
        </div>
    </section>
  )
}
