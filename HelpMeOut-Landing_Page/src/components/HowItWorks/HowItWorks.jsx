import React from 'react'
import './howitworks.css'
import Screen from '../../images/screen.png'
import screen1 from '../../images/screen1.png'
import screen2 from '../../images/screen2.png'
import screen3 from '../../images/screen3.png'

export default function HowItWorks() {
  return (
    <section className='howitworks'>
        <h2>How it works</h2>
        <div className="it-works block">
            <div className="how">
                <div className="one">
                    <img src={screen1} alt />
                </div>
                <h4>Record Screen</h4>
                <p>Click the "Start Recording" button in our extension. choose which part of your screen to capture and who you want to send it to.</p>
                <img src={Screen} alt="" />
            </div>
            <div className="how">
                <div className="one">
                    <img src={screen2} alt />
                </div>
                <h4>Share Your Recording</h4>
                <p>We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
                <img src={Screen} alt="" />
            </div>
            <div className="how how-3">
                <div className="one">
                    <img src={screen3} alt />
                </div>
                <h4>Learn Effortlessly</h4>
                <p>Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
                <img src={Screen} alt="" />
            </div>
        </div>
    </section>
  )
}
