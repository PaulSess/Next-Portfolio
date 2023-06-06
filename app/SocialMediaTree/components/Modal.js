"use client";
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
// import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.css'


export default function Modal(props) {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    // Clear the interval when the component is unmounted or when count reaches 0
    if (count === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [count]);

  if (!props.show) {
    return null
  }

  return (
      <>

      <div className={`container absolute mx-auto items-center px-4 md:px-10 py-20 ${show ? 'modal-show' : 'modal-hide'}`}>
        <div class="bg-white dark:bg-gray-800 px-3 md:px-4 py-12 flex flex-col justify-center items-center">
          <Image src="/Images/SocialMediaTree/me nobg zoomed.png" width={150} height={150} alt='good picture of me, paul'/>
          <h1 class="mt-4 md:mt-12 text-3xl lg:text-4xl font-semibold leading-10 text-gray-800 text-center md:w-9/12 lg:w-7/12 dark:text-white">Welcome to my page!</h1>
          <p class="mt-10 text-base leading-normal text-center text-gray-600 md:w-9/12 lg:w-7/12 dark:text-white">Hi, my name is Paul Sessbruegger.<br></br> I'm a junior Software Engineer<br></br> and you most likely scanned a QR code of mine.<br></br> Find everything you need behind this pop-up.</p>
          <div class="mt-12 md:mt-14 w-full flex justify-center">
            <button onClick={props.onClose} class="dark:text-white dark:border-white w-full sm:w-auto border border-gray-800 text-base font-medium text-gray-800 py-5 px-14 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-800 hover:text-white dark:hover:text-white dark:hover:bg-gray-700">To the page in <span className='text-lg'>{count}</span></button>
          </div>
        </div>
      </div>

      </>
  )
}
