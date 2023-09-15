import React from 'react'
import Logo from '../../assets/Logo.svg'
import Menu from '../../assets/Menu.svg'
import imdb from '../../assets/imdb.svg'
import tomato from '../../assets/tomato.svg'
import play from '../../assets/Play.svg'
import search from '../../assets/Search.svg'
import './Header.css'

export const Header = () => {
  return (
    <div className='main-header px-[16px] sm:px-[50px] pt-5'>
        <div className='flex sm:justify-between'>
            <div className="logo">
                <img src={Logo} alt="logo" className='w-[70%] sm:w-[70%]' />
            </div>

            <div className="search-box relative flex sm:pt-[5px] text-white pr-8">
                <input 
                type="search" 
                name="search" 
                id="search" 
                placeholder='What do you want to watch?' className='h-[20px] sm:h-[35px] w-[100px] sm:w-[250px] lg:w-[450px] rounded-md border-2 border-gray-400 text-xs sm:text-sm px-2 bg-transparent text-white' 
                />
                <img src={search} alt="search-icon" className='w-[13px] sm:w-[22px] absolute left-[80px] sm:left-[220px] lg:left-[420px] py-1 sm:py-1.5' />
            </div>

            <div className="menu flex space-x-3">
                <p className='text-white font-bold text-[10px] sm:text-sm sm:pt-[5px]'>Sign in</p>

                <img src={Menu} alt="menu" className='w-[45%] sm:w-[34%] sm:pb-[20px]' />
            </div>
        </div>

        <div className="header-text text-white pt-24 ">
            <h1 className='font-bold sm:text-5xl sm:w-[400px]'>John Wick 3 : Parabellum</h1>
            <div className="rating flex justify-between w-[200px] sm:w-[220px] text-xs py-4">
                <div className='imdb-rating flex space-x-3'>
                    <img src={imdb} alt="rating-1" />
                    <span>86.0/100</span>
                </div>

                <div className="rating-2 flex space-x-3">
                    <img src={tomato} alt="rating-2" />
                    <span>97%</span>
                </div>
            </div>
            <p className='w-[247px] text-xs'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>

            <div className="button flex bg-[#BE123C] h-[30px] w-[140px] space-x-2 px-1 rounded-md my-4">
            <img src={play} alt="play" className='w-[15%]' />
            <button className=' text-xs font-bold '> WATCH TRAILER</button>
            </div>
        </div>
    </div>
  )
}
