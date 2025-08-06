"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  const t = useTranslations("error");
  const locale = useLocale();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-blue-800 text-white text-center p-6">
      {/* Logo de One Piece */}
      <div className="relative w-[300px] md:w-[400px] lg:w-[500px] h-[200px] mb-8">
        <Image
          src="/assets/generalImages/one_Piece.png"
          alt="One Piece"
          fill
          sizes="60"
          className="object-contain opacity-80"
          priority
        />
      </div>

      {/* Número 404 grande */}
      <div className="text-9xl md:text-[12rem] font-bold text-yellow-400 mb-6 drop-shadow-lg animate-pulse">
        404
      </div>

      {/* Título */}
      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        ¡Página No Encontrada!
      </h1>

      {/* Descripción */}
      <p className="text-lg md:text-xl mb-8 max-w-2xl">
        Parece que te has perdido en el Grand Line. Esta página no existe en nuestro mapa del tesoro.
      </p>

      {/* Botones de navegación */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href={`/${locale}`}
          className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105"
        >
          Volver al Inicio
        </Link>
        
        <Link
          href={`/${locale}/sagas`}
          className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors duration-300 transform hover:scale-105"
        >
          Explorar Sagas
        </Link>
      </div>

      {/* Mensaje adicional */}
      <p className="text-sm text-gray-300 mt-8">
        Verifica la URL o navega desde el menú principal
      </p>
    </div>
  );
} 