// MapMarker.tsx
import { Tooltip } from "react-tooltip";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import pirateStatic from "@/assets/Map/OnepieceGif.png";
import pirateGif from "@/assets/Map/OnepieceGif.gif";
import islandStatic from "@/assets/Map/IslandStatic.png";     
import islandGif from "@/assets/Map/IslandGif.gif";

type MarkerType = 'saga' | 'island';

interface MapMarkerProps {
  name: string;
  coords: { x: number; y: number };
  path: string;
  index: number;
  type?: MarkerType;
}

export const MapMarker: React.FC<MapMarkerProps> = ({
  name,
  coords,
  path,
  index,
  type = 'saga'
}) => {
  const { t } = useTranslation();
  const params = useParams();
  const router = useRouter();

  const fullPath = useMemo(() => {
    const lang = (params?.lang as string) || 'es';
    return `/${lang}${path.startsWith('/') ? path : '/' + path}`;
  }, [params, path]);

  const top = `calc(${coords.y * 100}% - 30px)`;
  const left = `calc(${coords.x * 100}% - 30px)`;

  const staticImg = type === 'island' ? islandStatic : pirateStatic;
  const gifImg = type === 'island' ? islandGif : pirateGif;

  const handleIslandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const current = new URLSearchParams(window.location.search);
    current.set('island', path.replace('/', ''));
    router.push(`?${current.toString()}`);
  };

  const content = (
    <>
      <Image
        src={staticImg}
        alt={`${type} Static`}
        fill
        unoptimized
        className="absolute object-contain transition-opacity duration-200 group-hover:opacity-0"
        priority
      />
      <Image
        src={gifImg}
        alt={`${type} GIF`}
        fill
        unoptimized
        className="absolute object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        priority
      />
      <Tooltip id={`tooltip-map-${index}`} />
    </>
  );

  return type === 'island' ? (
    <button
      aria-label={`Abrir isla ${t(name)}`}
      className="absolute group cursor-pointer rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500"
      style={{ top, left, width: "60px", height: "60px" }}
      data-tooltip-id={`tooltip-map-${index}`}
      data-tooltip-content={t(name)}
      data-tooltip-place="top"
      onClick={handleIslandClick}
    >
      {content}
    </button>
  ) : (
    <Link
      href={fullPath}
      aria-label={`Ir a la saga de ${t(name)}`}
      className="absolute group cursor-pointer rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500"
      style={{ top, left, width: "60px", height: "60px" }}
      data-tooltip-id={`tooltip-map-${index}`}
      data-tooltip-content={t(name)}
      data-tooltip-place="top"
    >
      {content}
    </Link>
  );
};
