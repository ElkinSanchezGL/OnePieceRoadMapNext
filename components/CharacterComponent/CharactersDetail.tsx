"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getCharacterById, Character } from "@/services/getCharacters";
import { mugiwaraImages } from "@/utils/mugiwaraImages2";
import Image from "next/image";
import WantedBG from "@/assets/wanted-bg.jpg";
import Background from "../GeneralComponents/Background";
import MugiFlag from "@/assets/GeneralImages/MugiFlag.jpeg";

type Props = {
  characterId: number;
};

export default function CharacterDetail({ characterId }: Props) {
  const t = useTranslations("character");
  const locale = useLocale();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    getCharacterById(characterId, locale).then(setCharacter);
  }, [characterId, locale]);

  if (!character) {
    return (
      <Background image={MugiFlag}>
        <div className="text-center text-xl p-8">{t("loading")}...</div>
      </Background>
    );
  }

  const normalizedKey = character.name.toLowerCase().replace(/[\s\-\.']/g, "");
  const localImage = mugiwaraImages[normalizedKey];

  return (
    <Background image={MugiFlag}>
      <main
        className="flex items-center justify-center min-h-[80vh] p-4 sm:p-6"
        aria-label={t("mainContentLabel")}
      >
        <div
          className="relative w-full max-w-6xl bg-[#fdf5e6] border-[10px] border-[#d2b48c] rounded-md shadow-xl text-brown-900 font-serif px-4 sm:px-6 py-4 overflow-y-auto flex flex-col md:flex-row gap-6 sm:gap-8 items-center"
          style={{
            backgroundImage: `url(${WantedBG.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "inset 0 0 10px #aa8c66",
          }}
        >
          <div
            className="flex-shrink-0 w-full md:w-1/2 flex justify-center"
            aria-label={t("characterImageLabel", { name: character.name })}
          >
            {localImage ? (
              <div className="relative w-60 sm:w-72 md:w-80 h-[22rem] sm:h-[28rem] md:h-[30rem] rounded-xl overflow-hidden">
                <Image
                  src={localImage}
                  alt={t("characterImageAlt", { name: character.name })}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            ) : (
              <div className="w-60 h-80 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg shadow-lg">
                {t("noImageAvailable")}
              </div>
            )}
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto max-h-full w-full">
            <h1 className="text-2xl sm:text-3xl font-bold text-center">
              {character.name}
            </h1>
            <p>
              <strong>{t("job")}:</strong> {character.job}
            </p>
            <p>
              <strong>{t("size")}:</strong> {character.size}
            </p>
            <p>
              <strong>{t("age")}:</strong> {character.age}
            </p>
            <p>
              <strong>{t("bounty")}:</strong>{" "}
              <span className="text-red-700">{character.bounty}</span>
            </p>
            {character.status && (
              <p>
                <strong>{t("status")}:</strong> {character.status}
              </p>
            )}

            {character.crew && (
              <div className="pt-2 border-t border-yellow-400">
                <h2 className="text-md font-semibold">{t("crewDetails")}:</h2>
                <p>
                  {t("crewName")}: {character.crew.name}
                </p>
                <p>
                  {t("crewRomanName")}: {character.crew.roman_name}
                </p>
                {character.crew.total_prime && (
                  <p>
                    {t("crewTotalBounty")}:{" "}
                    <span className="text-red-700">
                      {character.crew.total_prime}
                    </span>
                  </p>
                )}
              </div>
            )}

            {character.fruit && (
              <div className="pt-2 border-t border-yellow-400">
                <h2 className="text-md font-semibold">{t("devilFruit")}:</h2>
                <p>
                  {character.fruit.name} ({character.fruit.type})
                </p>
                {character.fruit.description && (
                  <p className="text-sm text-gray-600 italic mt-1">
                    "
                    {["en", "fr"].includes(locale)
                      ? character.fruit.description
                      : t(
                          `devilFruitDescriptions.${character.fruit.roman_name}`
                        )}
                    "
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </Background>
  );
}
