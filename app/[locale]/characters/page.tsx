"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAllCharacters, Character } from "@/services/getCharacters";
import Image from "next/image";
import GeneralOnepiece from "@/assets/GeneralImages/One_Piece.png";
import Background from "@/components/GeneralComponents/Background";
import { useTranslations } from "next-intl";
import { mugiwaraImages } from "@/utils/mugiwaraImages";

export default function CharactersPage() {
  const router = useRouter();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const t = useTranslations("home");

  useEffect(() => {
    getAllCharacters()
      .then((data) => setCharacters(data.slice(0, 10)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-500">Cargando personajes...</p>
    );
  }

  return (
    <Background image={GeneralOnepiece}>
      <div
        className="bg-yellow-100 border border-yellow-400 rounded-lg shadow-lg p-6 w-full max-w-[950px] h-auto mx-auto text-brown-800"
        style={{ boxShadow: "inset 0 0 30px #7b4c20" }}
      >
        <h1 className="text-xl font-bold mb-4 text-center">{t("mugiwaras")}</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {characters.map((character) => {
            const normalizedKey = character.name
              .toLowerCase()
              .replace(/[\s\-\.']/g, "");

            const localImage = mugiwaraImages[normalizedKey];

            return (
              <div
                key={character.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer overflow-hidden transition border border-yellow-300"
                onClick={() => router.push(`/characters/${character.id}`)}
              >
                <div className="relative w-full h-44">
                  {localImage ? (
                    <Image
                      src={localImage}
                      alt={character.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-44 bg-gray-200 flex items-center justify-center text-gray-500">
                      Imagen no disponible
                    </div>
                  )}
                </div>
                <div className="p-3 text-center">
                  <h2 className="text-md font-semibold text-gray-800">
                    {character.name}
                  </h2>
                  <p className="text-sm text-gray-500">{character.job}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Background>
  );
}
