'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { getCharacterById, Character } from "@/services/getCharacters";
import CharacterDetail from "@/components/CharacterComponent/CharactersDetail";
import { LoadingScreen } from "@/components/GeneralComponents/LoadingScreen";
import loadingImageSrc from "@/assets/GeneralImages/OnePieceRoadMap.png";
import loadingGifSrc from "@/assets/Sunny.gif";

export default function CharacterDetailPage() {
  const { id } = useParams();
  const locale = useLocale(); 
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id || typeof id !== "string") return;

    setLoading(true); 
    getCharacterById(Number(id), locale)
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, [id, locale]);

  if (loading) {
    return <LoadingScreen imageSrc={loadingImageSrc} gifSrc={loadingGifSrc} />;
  }

  if (!character) {
    return (
      <p className="text-center mt-10 text-red-600">
        Personaje no encontrado.
      </p>
    );
  }

 return <CharacterDetail characterId={Number(id)} />;
}
