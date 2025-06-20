import React, { ReactNode } from 'react';
import Image from 'next/image';
type TextProps = {
  title: string;
  text: string;
  children?: ReactNode;
  imageUrl?: string;
  bottomImageUrl?: string;
};

export const ScrollFeature = (props: TextProps) => {
  return (
    <div className="bg-yellow-100 border border-yellow-400 rounded-lg shadow-lg p-6 w-[950px] h-[650px] text-brown-800" style={{ boxShadow: 'inset 0 0 30px #7b4c20' }}>
{props.imageUrl && (
  <div className="mb-2 mx-auto relative w-full h-[110px]">
    <Image src={props.imageUrl} alt="Imagen One Piece" layout="fill" objectFit="contain" />
  </div>
  )}
      <h2 className="text-xl font-bold mb-4 text-center">{props.title}</h2>
      <p className='text-center'>{props.text}</p>
      <div className="flex flex-row justify-center items-center mt-4"> 
        {props.children}
      </div>
      {props.bottomImageUrl && ( 
        <img src={props.bottomImageUrl} alt="Imagen adicional" className="mt-4 mx-auto max-w-full max-h-[350px] h-auto" />
      )}
    </div>
  );
};