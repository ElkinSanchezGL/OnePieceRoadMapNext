'use client';

import { Character } from "@/services/getCharacters";
import CharacterCard from "./CharactersCard";

type Props = {
  characters: Character[];
  onSelect: (id: number) => void;
};

export default function CharactersGrid({ characters, onSelect }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} onSelect={onSelect} />
      ))}
    </div>
  );
}
