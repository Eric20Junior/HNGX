import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase/config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const AuthDetails = () => {

    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        })
        return () => {
            listen()
        }
    }, [])

    const Logout = () => {
        signOut(auth).then(() => {
            console.log('sign out successfull')
        }).catch(error => console.log(error))
        navigate('/')
    }
    
  return (
    <div>
        { user ? <button className='bg-green-700 text-white rounded-lg w-[90px] font-bold' onClick={Logout}>Logout</button> : '' }
        
    </div>
  )
}
