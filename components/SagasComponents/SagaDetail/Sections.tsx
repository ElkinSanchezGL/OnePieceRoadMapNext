import { useTranslations}  from "next-intl";
import type { Arc, Character, Episode, Location } from "./types";

export const ArcsSection = ({ arcs, loading }: { arcs: Arc[]; loading: boolean }) => {
  const t  = useTranslations('sagaDetail');
  return (
    <div className="bg-white rounded-lg p-4 shadow border mb-4">
      <h3 className="font-bold text-lg mb-2">{t("includedArcs")}</h3>
      {loading ? (
        <p>{t("loadingSection")}</p>
      ) : (
        <ul className="list-disc list-inside">
          {arcs.map((arc) => (
            <li key={arc.id}>{arc.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const CharactersSection = ({
  characters,
  loading,
}: {
  characters: Character[];
  loading: boolean;
}) => {
  const t  = useTranslations('sagaDetail');

  if (loading) {
    return (
      <div className="bg-white rounded-lg p-4 shadow border mb-4">
        <h3 className="font-bold text-lg mb-2">{t("featuredCharacters")}</h3>
        <p>{t("loadingSection")}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-4 shadow border mb-4">
      <h3 className="font-bold text-lg mb-2">{t("featuredCharacters")}</h3>
      <ul className="list-disc list-inside">
        {characters.map((char) => (
          <li key={char.id}>{char.name}</li>
        ))}
      </ul>
    </div>
  );
};


export const EpisodesSection = ({
  episodes,
  loading,
}: {
  episodes: Episode[];
  loading: boolean;
}) => {
  const t  = useTranslations('sagaDetail');
  return (
    <div className="bg-white rounded-lg p-4 shadow border mb-4">
      <h3 className="font-bold text-lg mb-2">{t("mainEpisodes")}</h3>
      <ul className="list-disc list-inside">
        {loading ? (
          <p>{t("loadingSection")}</p>
        ) : (
          episodes.map((ep) => (
            <li key={ep.id}>
              {ep.episode} {ep.title}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export const LocationsSection = ({
  locations,
  loading,
}: {
  locations: Location[];
  loading: boolean;
}) => {
  const t  = useTranslations('sagaDetail');
  return (
    <div className="bg-white rounded-lg p-4 shadow border">
      <h3 className="font-bold text-lg mb-2">{t("featuredLocations")}</h3>
      <ul className="list-disc list-inside">
        {loading ? (
          <p>{t("loadingSection")}</p>
        ) : locations.length > 0 ? (
          locations.map((loc) => <li key={loc.id}>{loc.name}</li>)
        ) : (
          <li>{t("noLocations")}</li>
        )}
      </ul>
    </div>
  );
};
