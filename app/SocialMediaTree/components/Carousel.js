"use client";
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import styles from './Carousel.css'

import Modal from './Modal';
// import { ReactSVG } from "react-svg";
// import { ReactComponent as Logo } from "/public/Images/SocialMediaTree/github (1).svg";
import { ReactSVG } from 'react-svg';



export default function Carousel() {
  const [show, setShow] = useState(true)

  useEffect(() => {
      const timer = setTimeout(() => {
        setShow(false);
      }, 5000);
  })

  return (
    <>

      <Modal onClose={() => setShow(false)} show={show} />

      <div className='bg-[#e5e7eb]'>
        <Image width={1000} height={1000} src="/Images/SocialMediaTree/giftitinterview.png" class="m-auto" alt="Me interviewing my project partner" />

        <div className='w-100 h-40 flex bg-[#455a64] drop-shadow-lg'>
          <div className='w-fit h-fit m-auto '>
            <h1 className='text-gray-200 text-2xl mb-3'>Connect with me online</h1>
            <p className='text-[#bac1c4] text-sm'>Follow me and discover my work on my sources!
              <br />I'm looking forward to hear from you
            </p>
          </div>
        </div>


        <ul className='bg-[#e5e7eb00] h-full w-100 py-2'>

          <li className='ml-7 md:mx-28 mt-3 mb-2.5 w-fit'>
            <Link href="https://paulsess.github.io/profile/" className='flex '>
              <Image className='mr-7' src="/Images/SocialMediaTree/globe-solid.svg" width={30} height={30}/>
              <div>
                <p>My Portfolio page</p>
                <p>www.paulsess.profile.io</p>
              </div>
            </Link>
          </li>
            <hr
              style={{
              background: "#5f7c8a",
              height: "0.5px",
              border: "none",
              marginLeft: "5%",
              marginRight: "5%",
              }}
            />

          <li className='ml-7 md:mx-28 mt-3 mb-2.5 w-fit'>
            <Link href="https://github.com/PaulSess" className='flex'>
              <Image className='mr-7 fill-slate-50' style={{ fill: 'red' }} src="/Images/SocialMediaTree/github (1).svg" width={30} height={30}/>
              <p className='h-fit my-auto'>Github</p>
              <ReactSVG src="/Images/SocialMediaTree/github (1).svg" width={100} height={100} />
            </Link>
          </li>
          <hr
              style={{
              background: "#5f7c8a",
              height: "0.5px",
              border: "none",
              marginLeft: "5%",
              marginRight: "5%",
              }}
            />

          <li className='ml-7 md:mx-28 mt-3 mb-2.5 w-fit'>
            <Link href="https://www.linkedin.com/in/paul-sessbruegger-625739252/" className='flex'>
              {/* <Image className='mr-7' src="/Images/SocialMediaTree/linkedin.svg" width={30} height={30}/> */}
              <Image className='mr-7' src="/Images/SocialMediaTree/linkedin-removebg-preview.png" width={30} height={30}/>
              <p className='h-fit my-auto'>LinkedIn</p>
            </Link>
          </li>
          <hr
              style={{
              background: "#5f7c8a",
              height: "0.5px",
              border: "none",
              marginLeft: "5%",
              marginRight: "5%",
              }}
            />

          <li className='ml-7 md:mx-28 mt-3 mb-2.5 w-fit'>
            <Link target="_blank" href="https://www.canva.com/design/DAFVNMiAJP8/rW9x1t6-IoBIkyPaRpm8KQ/view?utm_content=DAFVNMiAJP8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" className='flex'>
              {/* <Image className='mr-7' src="/Images/SocialMediaTree/id-badge-solid.svg" width={30} height={30}/> */}
              <Image className='mr-7' src="/Images/SocialMediaTree/cv-removebg-preview.png" width={30} height={30}/>
              <p className='h-fit my-auto'>My Curriculum Vitae</p>
            </Link>
          </li>
          <hr
              style={{
              background: "#5f7c8a",
              height: "0.5px",
              border: "none",
              marginLeft: "5%",
              marginRight: "5%",
              }}
            />

          <li className='ml-7 md:mx-28 my-3 mb-3 w-fit'>
            <a target="_blank" href="paul.sess@proton.me" className='flex'>
              {/* <Image className='mr-7' src="/Images/SocialMediaTree/envelope-solid.svg" width={30} height={30}/> */}
              <Image className='mr-7' src="/Images/SocialMediaTree/protonmail-removebg-preview.png" width={30} height={30}/>
              <p className='h-fit my-auto'>Email me</p>
            </a>
          </li>
          <hr
              style={{
              background: "#5f7c8a",
              height: "0.5px",
              border: "none",
              marginLeft: "5%",
              marginRight: "5%",
              }}
            />
        </ul>
      </div>


    </>
  )
}
