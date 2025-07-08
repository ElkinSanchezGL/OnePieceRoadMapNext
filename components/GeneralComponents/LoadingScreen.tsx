import React from "react";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

type LoadingScreenProps = {
  imageSrc: StaticImageData;
  gifSrc: StaticImageData;
};

export const LoadingScreen = ({ imageSrc, gifSrc }: LoadingScreenProps) => {
  const t = useTranslations("sagaDetail");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-800 text-white text-center p-6">
      <div className="relative w-[300px] md:w-[400px] lg:w-[500px] h-[200px] mb-8">
        <Image
          src={imageSrc}
          alt="Title"
          fill
          className="object-contain"
          priority
        />
      </div>

      <Image
        src={gifSrc}
        alt="Loading animation"
        className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] mb-4"
        unoptimized={true}
        priority
      />
      <p className="text-lg md:text-xl font-semibold animate-pulse">
        {t("loading")}
      </p>
    </div>
  );
};
