import React from 'react';
import Image from 'next/image';

const ImgBanner = ({ src, alt }) => {
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
