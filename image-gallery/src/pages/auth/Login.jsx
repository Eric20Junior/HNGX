import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { auth } from '../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

      const handleFormSubmit = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((useCredential) => {
            navigate('/images')
            console.log(useCredential)
        }).catch((error) => {
            console.log(error)
        })
      }
    
  return (
    <div>
    <div className='pt-4 mx-10 sm:mx-auto sm:my-10 sm:px-10 sm:border sm:border-[#048950] sm:w-[400px] sm:h-[400px] sm:rounded-[20px] text-[#333333]'>
    <div className='space-y-2'>

      <h1 className='font-bold w-60'>Welcome Back</h1>
      <p className='xs:text-xs'>Please Fill in your details...</p>

    </div>

    <div className='mt-9'>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input type="text" 
          name="email" 
          placeholder='Email' 
          value={email}
          onChange={handleEmailChange}
          className='border border-[#BDBDBD] rounded h-[40px] w-[300px] p-2 text-[#828282] text-sm' />
        </div>
        <div>
          <input type="password" 
          name="password" 
          placeholder='Password'
          value={password} 
          onChange={handlePasswordChange}
          className='border border-[#BDBDBD] rounded h-[40px] w-[300px] mt-4 p-2 text-[#828282] text-sm' />
        </div>

        <div className='w-[300px] h-[35px] rounded xs:bg-[#048950] mt-4 text-white bg-green-800 text-center py-1.5 text-sm font-bold'>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>

  </div>
</div>
  )
}
