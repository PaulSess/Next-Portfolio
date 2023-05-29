import Image from 'next/image'
import React from 'react';
import Link from 'next/link';

import Navbar from './components/1. navbar/Navbar';
import WelcomeSection from './components/2. welcome-section/WelcomeSection';
import Techstack from './components/3. techstack/Techstack';
import Projects from './components/4. project section/Projects';

import 'animate.css';

// // <!-- tab icon  -->
// <link rel="icon" type="image/x-icon" href="./images/code-solid.svg">
// {/* <!-- google fonts  --> */}
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;0,800;1,300;1,400&display=swap"
//   rel="stylesheet">
// {/* <!-- techstack font  --> */}
// <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet">
// {/* <!-- fontawsome icons --> */}
// <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.2/css/all.css">
// {/* <!-- bootstrap  --> */}
// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
//   integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
//   {/* <!-- carousel  --> */}
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
//   integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
//   {/* <!-- animation.css  --> */}
//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />



export default function Home() {
  return (
    <>
      <Link href="/About">About Us</Link>
      {/* <Navbar />
      <WelcomeSection />
      <Techstack />
      <Projects /> */}
    </>
  )
}
