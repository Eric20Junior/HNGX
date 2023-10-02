import React, { useState } from 'react';

import { useReactMediaRecorder } from "react-media-recorder";

import './App.css'

import logo from '../public/images/help_logo.svg'
import setting from '../public/images/setting-2.svg'
import close from '../public/images/close-circle.svg'
import monitor from '../public/images/monitor.svg'
import tab from '../public/images/tab.svg'
import camera from '../public/images/video-camera.svg'
import audio from '../public/images/microphone.svg'

function App() {
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isCameraEnabled, setIsCameraEnabled] = useState(true);
  
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ 
      video: isCameraEnabled, 
      audio:isAudioEnabled, 
      screen: true });

    const toggleAudio = () => {
      setIsAudioEnabled((prev) => !prev);
    };
    
    const toggleCamera = () => {
      setIsCameraEnabled((prev) => !prev);
    };
    
   
    

  return (
    <div className='h-[439px] w-[300px] rounded-[24px] p-[24px] gap-[32px] shadow-xl mx-40 my-20'>
      <div className='flex justify-between'>
        <div className='flex space-x-3 font-bold'>
          <img src={logo} alt="" className='w-[28px] h-[28px] ' />
          <h1 className='text-[#120B48] w-[96px] h-[20px] text-base font-[sora] '>HelpMeOut</h1>
        </div>

        <div className='flex space-x-2'>
          <img src={setting} alt="" className='w-[20px] h-[20px]' />
          <img src={close} alt="" className='w-[20px] h-[20px]' />
        </div>

      </div>
        <div>
          <p className='text-[#413C6D] font-sans text-sm w-[225px] h-[32px] leading-[16.42px] py-4 '>This extension helps you record and share help videos with ease.</p>
        </div>

        <div>
            <div className='flex justify-evenly py-8 font-sans'>
              <div className='text-[#928FAB]'>
              <img src={monitor} alt="" className='w-[32px] h-[32px] mx-auto ' />
              <span className='text-xs font-medium'>Full screen</span>
              </div>
              <div className='text-[#120B48]'>
              <img src={tab} alt="" className='w-[32px] h-[32px] mx-auto ' />
              <span className='text-xs font-semibold'>Current Tab</span>
              </div>
            </div>

            <div className='font-sans space-y-6'>
              <div className='flex justify-between border-[1px] border-[#100A42] p-[12px] h-[48px] w-[252px] rounded-[12px] text-[#100A42] '>
                <div className='flex space-x-2'>
                  <img src={camera} alt="" className='w-[24px] h-[24px]' />
                  <span className=' text-xs font-medium leading-[16.42px] pt-1 w-[53px] h-[16px] gap-[4px] '>Camera</span>
                </div>

                <div>
                  <label className='cursor-pointer relative'>
                  <input type="checkbox" name="" id="" className='sr-only' checked={isCameraEnabled} onChange={toggleCamera} />
                  <div className='toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full'></div>
                  </label>
                </div>
              </div>

              <div className='flex justify-between border-[1px] border-[#100A42] p-[12px] h-[48px] w-[252px] rounded-[12px] text-[#100A42] '>
                <div className='flex space-x-2'>
                  <img src={audio} alt="" className='w-[24px] h-[24px]' />
                  <span className=' text-xs font-semibold pt-1 w-[53px] h-[16px] gap-[4px] '>Audio</span>
                </div>

                <div>
                  <label className='cursor-pointer relative'>
                  <input type="checkbox" name="" id="" className='sr-only' checked={isAudioEnabled} onChange={toggleAudio} />
                  <div className='toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full'></div>
                  </label>
                </div>
              </div>
            </div>
        </div>

        

        <div onClick={status === 'recording' ? stopRecording : startRecording}>
        <button className='bg-[#120B48] w-[252px] h-[51px] text-white font-sans font-medium text-sm text-center py-4 leading-[18.77px] rounded-[12px] mt-6'>
          {status === 'recording' ? 'Stop Recording' : 'Start Recording'}
        </button>
      </div>

      {status === 'stopped' && mediaBlobUrl && (
        <div>
          <a href={mediaBlobUrl} download='recorded-screen.mp4' className='bg-[#120B48] w-[252px] h-[51px] text-white font-sans font-medium text-sm text-center py-4 leading-[18.77px] rounded-[12px] mt-4 block'>
            Download Recording
          </a>
        </div>
      )}


    </div>
  )
}

export default App
