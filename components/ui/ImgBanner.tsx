import React from 'react';
import Image from 'next/image';

interface ImgBannerProps {
  src: any;
  alt: any;
}

const ImgBanner: React.FC<ImgBannerProps> = ({ src, alt }) => {
  return (
    <div className="w-full">
      <Image src={src} alt={alt} layout="responsive" width={1200} height={300} />
    </div>
  );
};

export default ImgBanner;
