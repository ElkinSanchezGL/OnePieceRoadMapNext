'use client';
import { useEffect } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import Mapimage from "@/assets/Map/map_one_piece.png";
import MapTitle from "@/components/Map/MapTitle";
import { MapMarker } from "@/components/Map/MapMarker";
import { mapLocations } from "@/data/mapLocations";
import IslandModal from "@/components/Map/IslandModal";
import { useTranslation } from "react-i18next";

const Map = () => {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const router = useRouter();

  const islandSlug = searchParams.get("island");

  useEffect(() => {
    if (islandSlug) {
      localStorage.setItem("lastIsland", islandSlug);
    }
  }, [islandSlug]);

  useEffect(() => {
    if (!islandSlug && typeof window !== 'undefined') {
      const lastIsland = localStorage.getItem("lastIsland");
      if (lastIsland) {
        const params = new URLSearchParams(window.location.search);
        params.set("island", lastIsland);
        router.replace(`?${params.toString()}`, { scroll: false });
      }
    }
  }, [islandSlug, router]);

  const islandData = mapLocations.find(
    (loc) => loc.type === "island" && loc.path.replace("/", "") === islandSlug
  );

  const closeModal = () => {
    const params = new URLSearchParams(window.location.search);
    params.delete("island");
    localStorage.removeItem("lastIsland");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const islandPath = islandData?.path.replace("/", "") || "";

  const cardsRaw = t(`importantPlaces.${islandPath}.cards`, { returnObjects: true });
  const cards = Array.isArray(cardsRaw) ? cardsRaw : undefined;

  return (
    <div className="w-full h-screen overflow-auto bg-gray-200">
      <div className="relative aspect-[2560/1748] min-w-full min-h-full">
        <MapTitle />

        <Image
          src={Mapimage}
          alt="Mapa interactivo del mundo de One Piece"
          fill
          className="absolute top-0 left-0 object-contain"
          priority
        />

        {mapLocations.map((loc, index) => (
          <MapMarker
            key={index}
            name={loc.name}
            coords={loc.coords}
            path={loc.path}
            index={index}
            type={loc.type}
          />
        ))}

        {islandData && (
          <IslandModal
            isOpen={true}
            onClose={closeModal}
            islandName={t(islandData.name)}
            description={t(`importantPlaces.${islandPath}.description`)}
            cards={cards}
          />
        )}
      </div>
    </div>
  );
};

export default Map;
