import { useEffect } from "react";
import Background from "../../GeneralComponents/Background";
import { useTranslation } from "react-i18next";
import { useSagaDetail } from "./useSagaData";
import type { Props } from "./types";
import { ArcsSection, CharactersSection, EpisodesSection, LocationsSection } from "./Sections";
import { SagaCardCarousel } from "./SagaCardCarousel";
import { LoadingScreen } from "../../GeneralComponents/LoadingScreen";
import OnePieceRoadMap from "../../../assets/GeneralImages/OnePieceRoadMap.png"
import SunnyGO from "../../../assets/Sunny.gif"
export const SagaDetail = ({
  sagaId,
  backgroundImage,
  arcIds,
  characterIds,
  episodeIds,
  locationIds,
}: Props) => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;

  const {
    saga,
    arcs,
    characters,
    episodes,
    locations,
    loadingData,
    loadingArcs,
    loadingCharacters,
    loadingEpisodes,
    loadingLocations,
    fetchData,
  } = useSagaDetail(
    sagaId,
    currentLang,
    arcIds,
    characterIds,
    episodeIds,
    locationIds
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

if (!saga || loadingData) {
  return (
    <LoadingScreen
      imageSrc={OnePieceRoadMap}      
      gifSrc={SunnyGO}
    />
  );
}

  const cards = [
    {
      title: saga.title,
      text: t("sagaDetail.arcs"),
      imageUrl: saga.image,
      bottomImageUrl: saga.banner,
    },
    {
      title: t("sagaDetail.characters"),
      text: t("sagaDetail.charactersDescription"),
    },
    {
      title: t("sagaDetail.episodes"),
      text: t("sagaDetail.episodesDescription"),
    },
    {
      title: t("sagaDetail.locations"),
      text: t("sagaDetail.locationsDescription"),
    },
  ];

  return (
    <Background image={backgroundImage}>
      <div className="flex justify-center items-center min-h-screen p-10">
        <SagaCardCarousel
          cards={cards}
          extraContent={(index) => {
            switch (index) {
              case 0:
                return <ArcsSection arcs={arcs} loading={loadingArcs} />;
              case 1:
                return (
                  <CharactersSection
                    characters={characters}
                    loading={loadingCharacters}
                  />
                );
              case 2:
                return (
                  <EpisodesSection
                    episodes={episodes}
                    loading={loadingEpisodes}
                  />
                );
              case 3:
                return (
                  <LocationsSection
                    locations={locations}
                    loading={loadingLocations}
                  />
                );
              default:
                return null;
            }
          }}
        />
      </div>
    </Background>
  );
};
