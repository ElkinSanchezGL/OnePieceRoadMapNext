"use client";

import React from "react";
import Link from "next/link";
import BG from "../../assets/generalImages/one_Piece.png";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white p-4">
      <div className="relative w-[300px] md:w-[400px] lg:w-[500px] h-[200px] mb-8">
        <Image
          src={BG}
          alt="One Piece"
          fill
          sizes="60"
          className="object-contain opacity-80"
          priority
        />
      </div>
      <div className="text-9xl md:text-[12rem] font-bold text-yellow-400 mb-6 drop-shadow-lg animate-pulse">
        404
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        ¡Página No Encontrada!
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl text-center">
        Parece que te has perdido en el Grand Line. Esta página no existe en nuestro mapa del tesoro.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href={`/`}
          className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105"
        >
          Volver al Inicio
        </Link>
      </div>
      
      <p className="text-sm text-gray-300 mt-8 text-center">
        Verifica la URL o navega desde el menú principal
      </p>
    </div>
  );
} 