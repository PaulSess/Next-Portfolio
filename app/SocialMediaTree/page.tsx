import Image from 'next/image'
import React from 'react';
import Link from 'next/link';

import Sharebutton from './components/Sharebutton';



import Carousel from './components/Carousel';


export default function SocialMediaTree() {
  const url = 'https://next-portfolio-three-ecru.vercel.app/SocialMediaTree';
  const title = 'Have a look at this junior developer!';
  return (

      <>
        <Carousel />
        <Sharebutton url={url} title={title} />
      </>

  )
}
