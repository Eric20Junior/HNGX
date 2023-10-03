import React, { useState, useEffect } from 'react';
import card from '../assets/card5.png';
import robot from '../assets/robot.gif';
import help from '../assets/question.jpeg';

export const Body = () => {
  const [assistantPosition, setAssistantPosition] = useState();
  const [assistantText, setAssistantText] = useState(); 

  const handleMarkClick = (e, text) => {
    // Calculate the position of the assistant
    const markPosition = e.target.getBoundingClientRect();
    const assistantLeft = markPosition.left + window.scrollX;
    const assistantTop = markPosition.top + window.scrollY;

    // Set the assistant's position and text.
    setAssistantPosition({ left: assistantLeft, top: assistantTop });
    setAssistantText(text);
  };

  // useEffect to initialize the assistant's position and text
  useEffect(() => {
    // Set the initial position and text here 
    setAssistantPosition({ left: 10, top: 1050 });
    // setAssistantText('Initial Text');
  }, []);

  return (
    <div className='mt-10'>
      <div className='block sm:flex justify-around'>
        <div>
          <img src={card} alt="" className='px-3' />
        </div>

        <div className=' px-2 lg:w-[400px] leading-10 sm:w-[300px]'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            vel laborum, corporis consectetur dolore vitae blanditiis iste at
            sapiente saepe a aspernatur accusamus ipsam necessitatibus velit,
            mollitia reprehenderit, odio consequatur?
          </p>

          <div className='flex space-x-2'>
            <p className='bg-green-700 w-[100px] rounded-lg text-white text-center font-bold '>
              Need help
            </p>

            <img
              src={help}
              alt=""
              className='mark w-10 text-green-700 cursor-pointer'
              onClick={(e) => handleMarkClick(e, 'You can email us at example@example.com')}
            />
          </div>
        </div>
      </div>

      <div className='pt-10 grid grid-cols-1 sm:grid-cols-2 place-items-center mx-10 gap-4'>
        <div className='shadow-lg h-[250px] w-[300px]'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
            ullam quasi minima dolores maiores deleniti officiis odit vel
            dolorem velit ipsam nemo sunt corporis, eos, neque exercitationem
            aliquam porro temporibus!
          </p>
          <img
            src={help}
            alt=""
            className='mark w-10 text-green-700 cursor-pointer float-right'
            onClick={(e) => handleMarkClick(e, 'Please read through our services')}
          />
        </div>

        <div className='shadow-lg h-[250px] w-[300px]'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
            ullam quasi minima dolores maiores deleniti officiis odit vel
            dolorem velit ipsam nemo sunt corporis, eos, neque exercitationem
            aliquam porro temporibus!
          </p>
          <img
            src={help}
            alt=""
            className='mark w-10 text-green-700 cursor-pointer float-right'
            onClick={(e) => handleMarkClick(e, 'Make sure you follow us on our socials')}
          />
        </div>
      </div>

      {assistantPosition && (
        <div
          className='on-page_assistant flex justify-end'
          style={{
            position: 'absolute',
            left: assistantPosition.left + 'px',
            top: assistantPosition.top + 'px',
          }}
        >
          <div>
            <img src={robot} alt="" className='assist w-[40px] rounded-full' />
            <p>{assistantText}</p>
          </div>
        </div>
      )}
    </div>
  );
};
