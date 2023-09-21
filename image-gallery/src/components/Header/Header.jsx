import React from 'react'
import { AuthDetails } from '../../pages/auth/AuthDetails'

export const Header = () => {
  return (
    <div>
        <div className='flex justify-between mx-8 mt-6 pt-4 font-[sora]'>
            <div>
                <h1 className='font-bold bg-green-700 text-white rounded-lg w-[120px] text-center'>Image Gallery</h1>
            </div>

                <div>
                    <AuthDetails />
                </div>
          
        </div>
    </div>
  )
}
