'use client';
import { Tooltip } from "react-tooltip";
import pirateStatic from "../assets/Map/OnepieceGif.png";
import pirateGif from "../assets/Map/OnepieceGif.gif";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

interface MapMarkerProps {
  name: string;
  coords: { x: number; y: number };
  path: string;
  index: number;
}
export const MapMarker: React.FC<MapMarkerProps> = ({
  name,
  coords,
  path,
  index,
}) => {
  const {t} = useTranslation();
  const params = useParams();
  const fullPath = `/${params.lang || 'es'}${path}`;


  return (
 <Link
      href={fullPath}
      aria-label={`Ir a la saga de ${t(name)}`}
      className="absolute cursor-pointer group rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75"
      style={{
        top: `calc(${coords.y * 100}% - 30px)`,
        left: `calc(${coords.x * 100}% - 30px)`,
        width: "60px",
        height: "60px",
      }}
      data-tooltip-id={`tooltip-map-${index}`}
      data-tooltip-content={t(name)}
      data-tooltip-place="top"
    >
      <img
        src={pirateStatic.src}
        className="w-full h-full transition-opacity duration-200 group-hover:opacity-0 absolute top-0 left-0"
      />
      <img
        src={pirateGif.src}
        className="w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      />
      <Tooltip id={`tooltip-map-${index}`} />
    </Link>
  );
};
