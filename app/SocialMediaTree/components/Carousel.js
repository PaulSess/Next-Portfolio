import Image from 'next/image'
import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
// import styles from './navbar.css'


export default function Carousel() {

  return (
    <>

      <div>
        <Image width={1000} height={1000} src="/Images/SocialMediaTree/giftitinterview.png" class="" alt="Me interviewing my project partner" />

        <div className='w-100 h-40 '>
          <div className='w-fit h-fit m-auto '>
            <h1 className='text-gray-200 text-2xl'>Connect with me online</h1>
            <p className='text-gray-200 text-sm'>Follow me and discover my work on my sources!
              <br />I'm looking forward to hear from you
            </p>
          </div>
        </div>


        <div className='bg-gray-200 h-full w-100'>

          <Link href="https://paulsess.github.io/profile/" className='flex'>
            <Image src="/Images/SocialMediaTree/globe-solid.svg" width={30} height={30}/>
            <div>
              <p>My Portfolio page</p>
              <p>https://paulsess.github.io/profile/</p>
            </div>
          </Link>

          <Link href="https://github.com/PaulSess" className='flex'>
            <Image src="/Images/SocialMediaTree/github (1).svg" width={30} height={30}/>
            <p>Github</p>
          </Link>

          <Link href="https://www.linkedin.com/in/paul-sessbruegger-625739252/" className='flex'>
            <Image src="/Images/SocialMediaTree/linkedin.svg" width={30} height={30}/>
            <p>LinkedIn</p>
          </Link>

          <Link href="https://www.canva.com/design/DAFVNMiAJP8/rW9x1t6-IoBIkyPaRpm8KQ/view?utm_content=DAFVNMiAJP8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" className='flex'>
            <Image src="/Images/SocialMediaTree/id-badge-solid.svg" width={30} height={30}/>
            <p>My Curriculum Vitae</p>
          </Link>

          <a href="paul.sess@proton.me" className='flex'>
            <Image src="/Images/SocialMediaTree/envelope-solid.svg" width={30} height={30}/>
            <p>Email me</p>
          </a>

        </div>
      </div>

          {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}

    </>
  )
}
