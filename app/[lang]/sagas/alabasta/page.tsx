import AlabastaBG from '../../assets/Sagas/Alabasta_Background.png'
import { SagaDetail } from '@/components/SagasComponents/SagaDetail/SagaDetail';

export const Alabasta = () => {
  return    <SagaDetail
      sagaId={2}
      backgroundImage={AlabastaBG.src}
      arcIds={[14, 12, 11, 10,13]} 
      characterIds={[429, 673, 290, 82, 520]} 
  episodeIds={[92, 101, 112, 119, 130]}
      locationIds={[46,47,50]} 
    />
};
