import React from 'react'
import fb from '../../assets/facebook.svg'
import IG from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import youtube from '../../assets/youtube.svg'

export const Footer = () => {
  return (
    <div className='pt-[150px] pb-10 space-y-8'>
        <div className="socials flex justify-center sm:w-[200px] mx-auto space-x-5 sm:space-x-10">
            <div>
                <img src={fb} alt="fb" />
            </div>

            <div>
                <img src={IG} alt="fb" />
            </div>

            <div>
                <img src={twitter} alt="fb" />
            </div>

            <div>
                <img src={youtube} alt="fb" />
            </div>
        </div>

        <div className='social-links flex justify-evenly text-xs text-[#111827] font-bold'>
          <div>
            <p>Conditions of Use</p>
          </div>

          <div>
            <p>Privacy & Policy</p>
          </div>

          <div>
            <p>Press Room</p>
          </div>
        </div>

        <div className='social-text text-center text-xs font-bold text-[#111827]'>
          <p>2021 MovieBox by Ariana Eka Prayudha</p>
        </div>
    </div>
  )
}
