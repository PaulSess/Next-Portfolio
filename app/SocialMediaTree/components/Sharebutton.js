import { useEffect } from 'react';

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
    <button className="share-button border">Share</button>
  );
};

export default ShareButton;
