import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar/Sidebar'

export const DashboardLayout = () => {
  return (
    <div>
        <div className='flex flex-1 h-screen w-screen overflow-hidden'>
            <Sidebar />
            <div className='flex-1 sm:pl-8 overflow-auto'>
                <div className='p-4'>{<Outlet />}</div>
            </div>
        </div>
    </div>
  )
}
