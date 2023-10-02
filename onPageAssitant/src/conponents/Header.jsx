import React from 'react'

export const Header = () => {
  return (
    <div className='flex justify-between p-4 bg-green-600 font-[sora] text-white font-bold'>
        <div>
            <h1>OnPage Assistant</h1>
        </div>

        <div className='flex space-x-10'>
            <div>
                <p>Home</p>
            </div>

            <div>
                <p>About</p>
            </div>

            <div>
                <p>Contact</p>
            </div>

            
        </div>
    </div>
  )
}
