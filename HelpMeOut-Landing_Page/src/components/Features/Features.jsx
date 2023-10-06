import React from 'react'
import Circle from '../../images/record-circle.svg'
// import Tele from '../../images/telegram.svg'
import Reload from '../../images/reload.svg'
import Repository from '../../images/repo.png'
import './features.css'

export default function Features() {
  return (
    <section className='feature-container'>
        <div className="content-top">
                <h2>Features</h2>
                <p>Key Highlights of Our Extension</p>
            </div>
            <div className="content">
                <div className="content-main">
                    <div className="main-left">
                        <div className="feature">
                            <div className="feature-left">
                                <img src={Circle} alt="" />
                            </div>
                            <div className="feature-right">
                                <h3>Simple Screen Recording </h3>
                                <p>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-left">
                                <img src={Circle} alt="" />
                            </div>
                            <div className="feature-right">
                                <h3>Easy-to-Share URL</h3>
                                <p>Share your recordings instantly with a single link. No attachments, no downloads.</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-left">
                                <img src={Reload} alt="" />
                            </div>
                            <div className="feature-right">
                                <h3>Revisit Recordings</h3>
                                <p>Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-right">
                        <img src={Repository} alt=''/>
                    </div>
                </div>
            </div>
        </section>
    )
}
