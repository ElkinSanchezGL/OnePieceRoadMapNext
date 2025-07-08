'use client';

import { notFound, useParams } from 'next/navigation';
import { SagaDetail } from '@/components/SagasComponents/SagaDetail/SagaDetail';
import {
  EastBlueBG,
  AlabastaBG,
  SkypieaBG,
  WaterSevenBG,
  ThrillerBarkBG,
  MarinefordBG,
  GyojinIslandBG,
  DressrosaBG,
  WholeCakeBG,
  WanoBG
} from '@/assets/images';

type SagaParams = {
  sagaId: number;
  backgroundImage: any;
  arcIds: number[];
  characterIds: number[];
  episodeIds: number[];
  locationIds: number[];
};

const sagaDataMap: Record<string, SagaParams> = {
  'east-blue': {
    sagaId: 1,
    backgroundImage: EastBlueBG,
    arcIds: [1, 2, 3, 4],
    characterIds: [1, 2, 3, 4, 5],
    episodeIds: [1, 2, 3, 10, 15, 20],
    locationIds: [1, 2],
  },
  'alabasta': {
    sagaId: 2,
    backgroundImage: AlabastaBG,
    arcIds: [10, 11, 12],
    characterIds: [1, 5, 7],
    episodeIds: [90, 110, 123],
    locationIds: [15, 16],
  },
  'skypiea': {
    sagaId: 3,
    backgroundImage: SkypieaBG,
    arcIds: [17, 18],
    characterIds: [1, 5, 20],
    episodeIds: [144, 160, 180],
    locationIds: [21],
  },
  'water-seven': {
    sagaId: 4,
    backgroundImage: WaterSevenBG,
    arcIds: [19, 20, 21],
    characterIds: [1, 3, 5, 8],
    episodeIds: [229, 240, 264, 278],
    locationIds: [31, 32],
  },
  'thriller-bark': {
    sagaId: 5,
    backgroundImage: ThrillerBarkBG,
    arcIds: [22],
    characterIds: [1, 5, 9, 45],
    episodeIds: [337, 349, 362],
    locationIds: [40],
  },
  'marineford': {
    sagaId: 6,
    backgroundImage: MarinefordBG,
    arcIds: [25, 26, 27],
    characterIds: [1, 4, 6, 20],
    episodeIds: [457, 470, 489],
    locationIds: [51],
  },
  'gyojin-island': {
    sagaId: 7,
    backgroundImage: GyojinIslandBG,
    arcIds: [28],
    characterIds: [1, 5, 10],
    episodeIds: [517, 525, 541],
    locationIds: [60],
  },
  'dressrosa': {
    sagaId: 8,
    backgroundImage: DressrosaBG,
    arcIds: [30, 31],
    characterIds: [1, 5, 12, 65],
    episodeIds: [629, 646, 678, 700],
    locationIds: [66],
  },
  'whole-cake': {
    sagaId: 9,
    backgroundImage: WholeCakeBG,
    arcIds: [43, 45],
    characterIds: [1, 5, 10, 96, 97],
    episodeIds: [751, 783, 830, 849, 871, 877],
    locationIds: [71, 78],
  },
  'wano': {
    sagaId: 10,
    backgroundImage: WanoBG,
    arcIds: [46, 47, 48],
    characterIds: [1, 5, 10, 98, 99],
    episodeIds: [890, 915, 935, 1000, 1025],
    locationIds: [81, 82],
  },
};

export default function SagaPage() {
  const params = useParams();
  const sagaSlug = params?.sagaSlug as string;

  const saga = sagaDataMap[sagaSlug];

  if (!saga) {
    notFound();
  }

  return (
    <SagaDetail
      sagaId={saga.sagaId}
      backgroundImage={saga.backgroundImage}
      arcIds={saga.arcIds}
      characterIds={saga.characterIds}
      episodeIds={saga.episodeIds}
      locationIds={saga.locationIds}
    />
  );
}
