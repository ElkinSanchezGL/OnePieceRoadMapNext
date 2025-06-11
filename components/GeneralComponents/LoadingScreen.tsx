import React from "react";
import { useTranslation } from "react-i18next";

type LoadingScreenProps = {
  imageSrc: string;
  gifSrc: string;
};

export const LoadingScreen = ({ imageSrc, gifSrc }: LoadingScreenProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-800 text-white text-center p-6">
      <img
        src={imageSrc}
        alt="Title"
        className="w-[300px] md:w-[400px] lg:w-[500px] mb-8 object-contain"
      />
      <img
        src={gifSrc}
        alt="Loading animation"
        className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] mb-4"
      />
      <p className="text-lg md:text-xl font-semibold animate-pulse">
        {t("sagaDetail.loading")}
      </p>
    </div>
  );
};
