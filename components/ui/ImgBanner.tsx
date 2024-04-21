'use client'
import React from 'react';
import Image from 'next/image';

interface ImgBannerProps {
  src: string;
  alt: string;
}

const ImgBanner: React.FC<ImgBannerProps> = ({ src, alt }) => {
  return (
    <div className="w-full relative">
      <style jsx>{`
        .img-container {
          position: relative;
          width: 100%;
          padding-top: 25%;
        }

        .img-container img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
      <div className="img-container">
        <Image src={src} alt={alt} layout="fill" objectFit="cover" priority />
      </div>
    </div>
  );
};

export default ImgBanner;
