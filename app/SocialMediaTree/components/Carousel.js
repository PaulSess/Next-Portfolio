import Image from 'next/image'
import React from 'react';
import ReactDOM from 'react-dom';
// import styles from './navbar.css'


export default function Carousel() {

  return (
    <>

      <div>
        <Image width={1000} height={1000} src="/Images/SocialMediaTree/giftitinterview.png" class="" alt="Me interviewing my project partner" />

        <div className='w-100 h-40 bg-455a64'>
          <div className='w-fit h-fit m-auto '>
            <h1 className='text-gray-200 text-2xl'>Connect with me online</h1>
            <p className='text-gray-200 text-sm'>Follow me and discover my work on my sources!
              <br />I'm looking forward to hear from you
            </p>
          </div>
        </div>


        <div className='bg-gray-200 h-full w-100'>

          <div className='d-flex'>
            <Image src="/Images/SocialMediaTree/globe-solid.svg" width={30} height={30}/>
            <div>
              <p>My Portfolio page</p>
              <p>https://paulsess.github.io/profile/</p>
            </div>
          </div>

        </div>
      </div>

          {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}

    </>
  )
}
