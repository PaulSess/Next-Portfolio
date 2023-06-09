"use client";
import { useEffect } from 'react';
import Image from 'next/image';

const ShareButton = ({ url, title }) => {
  useEffect(() => {
    if (navigator.share) {
      const shareData = {
        url,
        title,
      };

      const shareButtonHandler = async () => {
        try {
          await navigator.share(shareData);
          console.log('Successfully shared!');
        } catch (error) {
          console.error('Error sharing:', error);
        }
      };

      const shareButton = document.querySelector('.share-button');
      shareButton.addEventListener('click', shareButtonHandler);
    }
  }, [url, title]);

  return (
    <>
      <button id='share-button' className="z-1 share-button p-5 absolute bottom-4 right-6 bg-[#2b5c16] rounded-full">
        <Image className='' src="/Images/SocialMediaTree/share symbole.svg" width={30} height={30} />
      </button>
      <div id='backgroundblurr' className="-z-10 w-[4rem] h-[4rem] blur-md p-5 absolute bottom-3 right-5 bg-black rounded-full"></div>
    </>
  );
};

export default ShareButton;
