
import EastBlueBg from "../../assets/Sagas/East_Blue_Background.png"
import { SagaDetail } from '@/components/SagasComponents/SagaDetail/SagaDetail';

export const EastBlue = () => {
  return    <SagaDetail
      sagaId={1}
      backgroundImage={EastBlueBg.src}
      arcIds={[1, 2, 3, 4]} 
      characterIds={[5, 4, 3, 2, 1]} 
      episodeIds={[5, 4, 3, 2, 1]} 
      locationIds={[5, 4, 3, 2, 1]} 
    />
};
