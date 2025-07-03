"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Character, getCharacterById } from "@/services/getCharacters";
import { useTranslations } from "next-intl";
import { LoadingScreen } from "@/components/GeneralComponents/LoadingScreen";
import loadingImageSrc from "@/assets/GeneralImages/OnePieceRoadMap.png"
import loadingGifSrc from "@/assets/Sunny.gif"
import Image, { StaticImageData } from "next/image";
import { mugiwaraImages } from "@/utils/mugiwaraImages2";

export default function CharacterDetailPage() {
  const { id } = useParams();
  const t = useTranslations("character");
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  const imageForLoadingScreen: StaticImageData = loadingImageSrc as StaticImageData;
  const gifForLoadingScreen: StaticImageData = loadingGifSrc as StaticImageData;

  useEffect(() => {
    if (!id || typeof id !== "string") {
      setLoading(false);
      return;
    }

    getCharacterById(Number(id))
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener el personaje:", error);
        setCharacter(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <LoadingScreen imageSrc={imageForLoadingScreen} gifSrc={gifForLoadingScreen} />;
  }

  if (!character) {
    return (
      <p className="text-center mt-10 text-red-600">Personaje no encontrado.</p>
    );
  }

  const normalizedKey = character.name
    .toLowerCase()
    .replace(/[\s\-\.']/g, "");
  const localCharacterImage = mugiwaraImages[normalizedKey];

  return (
    <main className="max-w-4xl mx-auto p-6 bg-yellow-100 border border-yellow-300 rounded-lg shadow text-brown-800 font-sans">
      <div className="flex flex-col items-center space-y-4"> {/* Contenedor principal de los elementos */}

        {/* Sección de la Imagen (siempre arriba) */}
        <div className="mb-6"> {/* Margen inferior para separar de la info */}
          {localCharacterImage ? (
            <div className="relative w-60 h-80 rounded-lg overflow-hidden  mx-auto"> {/* Ajustado a una altura más vertical */}
              <Image
                src={localCharacterImage}
                alt={character.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain" // Cambiado a object-contain para no cortar la imagen completa
                priority
              />
            </div>
          ) : (
            <div className="w-60 h-80 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg shadow-lg mx-auto">
              Imagen no disponible
            </div>
          )}
        </div>

        {/* Contenedor de Información Básica (siempre abajo de la imagen) */}
        <div className="text-center space-y-2 w-full"> {/* El texto siempre centrado para una carta vertical */}
          <h1 className="text-3xl font-bold">{character.name}</h1>
          <p className="text-md text-gray-700">
            {t("job")}: <span className="font-medium">{character.job}</span>
          </p>
          <p className="text-md text-gray-700">
            {t("size")}: <span className="font-medium">{character.size}</span>
          </p>
          <p className="text-md text-gray-700">
            {t("age")}: <span className="font-medium">{character.age}</span>
          </p>
          <p className="text-md">
            {t("bounty")}: <span className="font-medium text-red-700">{character.bounty}</span>
          </p>
          {character.status && (
            <p className="text-md text-gray-700">
              {t("status")}: <span className="font-medium">{character.status}</span>
            </p>
          )}
        </div>

        {/* Detalles de la Tripulación */}
        {character.crew && (
          <div className="mt-8 pt-4 border-t border-yellow-400 w-full text-center">
            <h2 className="text-lg font-semibold">{t("crewDetails")}:</h2>
            <p className="text-md text-gray-700 mt-1">
              {t("crewName")}: <span className="font-medium">{character.crew.name}</span>
            </p>
            <p className="text-md text-gray-700">
              {t("crewRomanName")}: <span className="font-medium">{character.crew.roman_name}</span>
            </p>
            {character.crew.total_prime && (
              <p className="text-md text-gray-700">
                {t("crewTotalBounty")}: <span className="font-medium text-red-700">{character.crew.total_prime}</span>
              </p>
            )}
            {character.crew.is_yonko && (
              <p className="text-md text-gray-700 font-bold text-yellow-600 animate-pulse">
                {t("isYonko")}
              </p>
            )}
          </div>
        )}

        {/* Fruta del Diablo */}
        {character.fruit && (
          <div className="mt-8 pt-4 border-t border-yellow-400 w-full text-center">
            <h2 className="text-lg font-semibold">{t("devilFruit")}:</h2>
            <p className="text-md text-gray-700 mt-1">
              <span className="font-medium">{character.fruit.name}</span> ({character.fruit.type})
            </p>
            {character.fruit.description && (
              <p className="text-sm text-gray-600 mt-2 italic px-4 max-w-xl mx-auto">
                "{character.fruit.description}"
              </p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}