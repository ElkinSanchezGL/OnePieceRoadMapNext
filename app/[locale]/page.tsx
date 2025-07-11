"use client";

import { useTranslations } from "next-intl";
import Background from "@/components/GeneralComponents/Background";
import ButtonRedirect from "@/components/GeneralComponents/Button";
import { ScrollFeature } from "@/components/GeneralComponents/ScrollFeature";
import OnePiece from "@/assets/GeneralImages/OnePieceRoadMap.png";
import Mugis from "@/assets/GeneralImages/Mugis.png";
import GeneralOnepiece from "@/assets/GeneralImages/One_Piece.png";
import LogoutButton from "@/components/AuthComponents/LogoutButton";

const Home = () => {
  const t = useTranslations("home");

  return (
    <Background image={GeneralOnepiece}>
      <main className="flex justify-center items-center h-screen">
        <div className="fixed top-4 left-4 z-[1000]">
          <LogoutButton />
        </div>
        <ScrollFeature
          title={t("welcomeTitle")}
          text={t("welcomeText")}
          imageUrl={OnePiece.src}
          bottomImageUrl={Mugis.src}
        >
          <div className="flex space-x-4">
            <ButtonRedirect text={t("startAdventure")} route="/map" />
            <ButtonRedirect text={t("chooseSaga")} route="/sagas" />
            <ButtonRedirect text={t("mugiwaras")} route="/characters" />
          </div>
        </ScrollFeature>
      </main>
    </Background>
  );
};

export default Home;
