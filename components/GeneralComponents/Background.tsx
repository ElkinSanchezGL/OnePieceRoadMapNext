import Image, { StaticImageData } from 'next/image';
import React from 'react';

type Props = {
  children: React.ReactNode;
  image: StaticImageData;
};

const Background = ({ children, image }: Props) => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt="Imagen de fondo"
          fill 
          className="object-cover opacity-80"
        />
      </div>
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default Background;