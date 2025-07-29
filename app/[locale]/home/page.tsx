"use client";

import { useTranslations } from "next-intl";
import Background from "@/components/GeneralComponents/Background";
import ButtonRedirect from "@/components/GeneralComponents/Button";
import { ScrollFeature } from "@/components/GeneralComponents/ScrollFeature";
import OnePiece from "@/assets/GeneralImages/OnePieceRoadMap.png";
import Mugis from "@/assets/GeneralImages/Mugis.png";
import GeneralOnepiece from "@/assets/GeneralImages/One_Piece.png";
import LogoutButton from "@/components/AuthComponents/LogoutButton";
import ClientLayout from "../ClientLayout";

const Home = () => {
  const t = useTranslations("home");

  return (
    <ClientLayout>
      <Background image={GeneralOnepiece}>
        <main
          className="flex justify-center items-center h-screen"
          role="main"
          aria-labelledby="home-title"
        >
          <h1 id="home-title" className="sr-only">
            {t("screenReaderTitle", {
              default: "Página principal de la app One Piece",
            })}
          </h1>

          <div className="fixed top-4 left-4 z-[1000]">
            <LogoutButton aria-label={t("logout")} />
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
    </ClientLayout>
  );
};

export default Home;
