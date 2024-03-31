import React from 'react';
import Image from 'next/image';

interface ImgBannerProps {
  src: any;
  alt: any;
}

const ImgBanner: React.FC<ImgBannerProps> = ({ src, alt }) => {
  return (
    <div className="w-full max-w-screen-xl">
      <Image src={src} alt={alt} width={1200} height={300} style={{ width: "100%", height: "auto" }} />
    </div>
  );
};

export default ImgBanner;
