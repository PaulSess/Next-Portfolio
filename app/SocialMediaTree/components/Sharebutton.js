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
    <button className="share-button p-5 absolute bottom-4 right-6 bg-green-950 rounded-full">
      <Image className='' src="/Images/SocialMediaTree/share symbole.svg" width={30} height={30} />
    </button>
  );
};

export default ShareButton;
