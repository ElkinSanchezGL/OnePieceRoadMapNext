'use client';
import React, { ReactNode } from 'react';

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
        <img src={props.imageUrl} alt="Imagen One piece" className="mb-4 mx-auto" />
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