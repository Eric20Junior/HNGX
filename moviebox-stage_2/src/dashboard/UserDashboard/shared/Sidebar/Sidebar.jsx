import React from 'react'
import logo from '../../../../assets/tv.png'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'

import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BUTTOM_LINKS } from '../../lib/consts/navigation'

const classLinks = 'flex gap-2 font-light px-3 py-2 active:border-r-4 active:border-red-700 active:bg-red-200 active:text-red-700 rounded-sm text-base font-bold'

export const Sidebar = () => {

  return (
    <div className='border border-l-0 sm:w-[150px] rounded-[30px] h-full w-max text-center'>
      <div>
        <div className='pt-10 flex space-x-3 pl-2'>
          <img src={logo} alt="logo" className='w-[80%] sm:w-[25%]' />
          <h1 className='hidden sm:inline-block font-bold p-1'>MovieBox</h1>
        </div>
          <div className=' space-y-3 sm:space-y-6 pt-10 '>
            {DASHBOARD_SIDEBAR_LINKS.map((item) => (
              <SidebarLink key={item.key} item={item} />
            ))}
          </div>
      </div>

      <div className='sm:pt-4 lg:pt-16 space-y-4 hidden sm:inline-block'>
        <div  className='border border-red-300 mx-4 rounded-xl h-36 w-[110px] text-[12px] font-bold'>
          <p className='pt-4'>play movie quizes and earn free tickets</p>
          <small>50k people are play now</small>
          <div className='bg-red-200 text-red-700 rounded-full w-[90px] h-6 text-[10px] mx-auto py-1 mt-1'>
          <button>start playing</button>
          </div>
        </div>
      </div>
        <div className='pt-40 sm:pt-2 lg:pt-8 font-bold text-[#666666]'>
            {DASHBOARD_SIDEBAR_BUTTOM_LINKS?.map((item) => (
              <SidebarLink key={item.key} item={item} />
            ))}
        </div>
    </div>
  )
}

function SidebarLink({ item }) {

  const {pathname} = useLocation()

  return (
    <Link to={item.path} className={classNames(pathname === item.path ? 'bg-red-200 border-r-4 text-red-700 border-red-700' : 'text-[#666666]', classLinks)}>
        <span className='xs:text-[25px] pt-1 pl-3'>{item.icon}</span>
      <div className='hidden sm:inline-block font-bold'>
        {item.label}
      </div>
      </Link>
  )
}