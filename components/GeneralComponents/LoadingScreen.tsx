// components/GeneralComponents/LoadingScreen.tsx
import React from "react";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image"; // Import Image and StaticImageData

type LoadingScreenProps = {
  imageSrc: StaticImageData; // Changed from string to StaticImageData
  gifSrc: StaticImageData;   // Changed from string to StaticImageData
};

export const LoadingScreen = ({ imageSrc, gifSrc }: LoadingScreenProps) => {
  const t = useTranslations('sagaDetail');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-800 text-white text-center p-6">
      {/* Use Next.js Image component for both */}
      <Image
        src={imageSrc}
        alt="Title"
        className="w-[300px] md:w-[400px] lg:w-[500px] mb-8 object-contain"
        priority // Good for loading screens
      />
      <Image
        src={gifSrc}
        alt="Loading animation"
        className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] mb-4"
        unoptimized={true} // GIFs often perform better unoptimized, or consider a video
        priority
      />
      <p className="text-lg md:text-xl font-semibold animate-pulse">
        {t("loading")}
      </p>
    </div>
  );
};