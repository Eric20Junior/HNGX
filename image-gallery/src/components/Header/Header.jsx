import React from 'react'
import { AuthDetails } from '../../pages/auth/AuthDetails'

export const Header = () => {
  return (
    <div>
        <div className='flex justify-between mx-8 mt-6 pt-10 font-[sora]'>
            <div>
                <h1 className='font-bold bg-green-700 text-white rounded-lg w-[120px] text-center'>Image Gallery</h1>

                {/* <div>
                    <input type="search" 
                    name="search" 
                    id="search" 
                    placeholder='Search for a picture'
                    className='border border-black rounded-lg text-xs h-7 pl-2' />
                </div> */}
            </div>

                <div>
                    <AuthDetails />
                </div>
          
        </div>
    </div>
  )
}
