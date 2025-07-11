"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAllCharacters, Character } from "@/services/getCharacters";
import CharactersGrid from "@/components/CharacterComponent/CharactersGrid";
import Background from "@/components/GeneralComponents/Background";
import GeneralOnepiece from "@/assets/GeneralImages/One_Piece.png";
import { useTranslations } from "next-intl";
import { LoadingScreen } from "@/components/GeneralComponents/LoadingScreen";
import SunnyGO from "@/assets/Sunny.gif";
import MapRoad from "@/assets/GeneralImages/OnePieceRoadMap.png";

export default function CharactersPage() {
  const router = useRouter();
  const t = useTranslations("home");
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCharacters("en", 10).then((data) => {
      setCharacters(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <LoadingScreen imageSrc={MapRoad} gifSrc={SunnyGO} />;

  return (
    <Background image={GeneralOnepiece}>
      <div
        className="bg-yellow-100 border border-yellow-400 rounded-lg shadow-lg p-6 w-full max-w-[950px] mx-auto text-brown-800"
        style={{ boxShadow: "inset 0 0 30px #7b4c20" }}
      >
        <h1 className="text-xl font-bold mb-4 text-center">{t("mugiwaras")}</h1>
        <CharactersGrid
          characters={characters}
          onSelect={(id) => router.push(`/characters/${id}`)}
        />
      </div>
    </Background>
  );
}
