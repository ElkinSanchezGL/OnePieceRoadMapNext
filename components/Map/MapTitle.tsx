'use client';
import { useTranslation } from 'react-i18next';

const MapTitle = () => {
  const { t } = useTranslation();
  return (
    <div
      className="absolute top-4 left-1/2 -translate-x-1/2 bg-yellow-100 border border-yellow-400 rounded-lg shadow-lg px-6 py-3 text-brown-800 text-3xl font-bold z-10"
      style={{ boxShadow: "inset 0 0 30px #7b4c20" }}
    >
      {t("map.interactive")}
    </div>
  );
};

export default MapTitle;
