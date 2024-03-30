import React from 'react';
import Image from 'next/image';

interface ImgBannerProps {
  src: any;
  alt: any;
}

const ImgBanner: React.FC<ImgBannerProps> = ({ src, alt }) => {
  return (
    <div className="w-full max-w-screen-xl">
      <Image
        src={src}  
        alt={alt} 
        width={500} 
        height={300}
        className="mx-auto"
      />
    </div>
  );
};

export default ImgBanner;
