'use client';
import { useTranslation } from "react-i18next";
import { MapMarker } from "@/components/MapMarker";
import { mapLocations } from "@/data/mapLocations";

import Mapimage from "../assets/Map/map_one_piece.png";

export const Map = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-screen overflow-auto bg-gray-200">
      <div
        className="relative aspect-[2560/1748]"
        style={{ minWidth: "100%", minHeight: "100%" }}
      >
        <div
          className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-yellow-100 border border-yellow-400 rounded-lg shadow-lg px-6 py-3 text-brown-800 text-3xl font-bold z-10"
          style={{ boxShadow: "inset 0 0 30px #7b4c20" }}
        >
          {t("map.interactive")}
        </div>
        <img
          src={Mapimage.src}
          alt="Mapa interactivo del mundo de One Piece"
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
        {mapLocations.map((loc, index) => (
          <MapMarker
            key={index}
            name={loc.name}
            coords={loc.coords}
            path={loc.path}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};