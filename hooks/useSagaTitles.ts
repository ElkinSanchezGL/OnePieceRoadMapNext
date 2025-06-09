import { useEffect, useState } from "react";
import { getSagaById } from "../services/sagasService";

type TitleMap = Record<string, string>;

export const useSagaTitles = (ids: number[]) => {
  const [titles, setTitles] = useState<TitleMap>({});

  useEffect(() => {
    if (!ids.length) return;

    let isMounted = true;

    const fetchTitleById = async (id: number): Promise<{ id: string; title: string } | null> => {
      try {
        const data = await getSagaById(id);
        const title = data?.title ?? data?.tittle ?? "Sin título";
        return { id: id.toString(), title };
      } catch (error) {
        console.error(`Error al cargar saga ${id}:`, error);
        return null;
      }
    };

    const buildTitleMap = (results: ({ id: string; title: string } | null)[]): TitleMap => {
      return results.reduce((acc: TitleMap, item) => {
        if (item) acc[item.id] = item.title;
        return acc;
      }, {});
    };

    const fetchAllTitles = async () => {
      const results = await Promise.all(ids.map(fetchTitleById));
      if (isMounted) setTitles(buildTitleMap(results));
    };

    fetchAllTitles();

    return () => {
      isMounted = false;
    };
  }, [ids]);

  return titles;
};
