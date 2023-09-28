import React from 'react'
import logo from '../../../public/images/help_logo.svg'

export const Popup = () => {
  return (
    <div className='h-[439px] w-[300px] rounded-[24px] p-[24px] gap-[32px] '>
      <div className='flex space-x-3 font-bold'>
        <img src={logo} alt="" />
        <h1 className='text-[#120B48] w-[96px] h-[20px] text-base '>HelpMeOut</h1>
      </div>
    </div>
  )
}
