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

        <div className='w-100 h-40 flex bg-slate-800'>
          <div className='w-fit h-fit m-auto '>
            <h1 className='text-gray-200 text-2xl mb-3'>Connect with me online</h1>
            <p className='text-gray-200 text-sm'>Follow me and discover my work on my sources!
              <br />I'm looking forward to hear from you
            </p>
          </div>
        </div>


        <ul className='bg-gray-200 h-full w-100 py-2'>

          <li className='ml-7 mt-3 w-fit'>
            <Link href="https://paulsess.github.io/profile/" className='flex '>
              <Image className='mr-7' src="/Images/SocialMediaTree/globe-solid.svg" width={30} height={30}/>
              <div>
                <p>My Portfolio page</p>
                <p>https://paulsess.github.io/profile/</p>
              </div>
            </Link>
          </li>

          <li className='ml-7 mt-3 w-fit'>
            <Link href="https://github.com/PaulSess" className='flex'>
              <Image className='mr-7' src="/Images/SocialMediaTree/github (1).svg" width={30} height={30}/>
              <p className='h-fit my-auto'>Github</p>
            </Link>
          </li>

          <li className='ml-7 mt-3 w-fit'>
            <Link href="https://www.linkedin.com/in/paul-sessbruegger-625739252/" className='flex'>
              <Image className='mr-7' src="/Images/SocialMediaTree/linkedin.svg" width={30} height={30}/>
              <p className='h-fit my-auto'>LinkedIn</p>
            </Link>
          </li>

          <li className='ml-7 mt-3 w-fit'>
            <Link href="https://www.canva.com/design/DAFVNMiAJP8/rW9x1t6-IoBIkyPaRpm8KQ/view?utm_content=DAFVNMiAJP8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" className='flex'>
              <Image className='mr-7' src="/Images/SocialMediaTree/id-badge-solid.svg" width={30} height={30}/>
              <p className='h-fit my-auto'>My Curriculum Vitae</p>
            </Link>
          </li>

          <li className='ml-7 my-3 w-fit'>
            <a href="paul.sess@proton.me" className='flex'>
              <Image className='mr-7' src="/Images/SocialMediaTree/envelope-solid.svg" width={30} height={30}/>
              <p className='h-fit my-auto'>Email me</p>
            </a>
          </li>
        </ul>
      </div>

          {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}

    </>
  )
}
