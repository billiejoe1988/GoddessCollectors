import React from 'react';
import Image from 'next/image';
import { AnyCnameRecord } from 'dns';

interface ImgBannerProps {
  src: any;
  alt: any;
}

const ImgBanner: React.FC<ImgBannerProps> = ({ src, alt }) => {
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <Image
        src={src}  
        alt={alt} 
        layout="responsive"  
        width={1000} 
        height={400}
        className="w-full"
      />
    </div>
  );
};

export default ImgBanner;
