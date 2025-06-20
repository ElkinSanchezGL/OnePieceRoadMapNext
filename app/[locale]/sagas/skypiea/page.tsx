'use client';
import SkypeiaBG from '@/assets/Sagas/Skypiea_background.jpg'
import { SagaDetail } from '@/components/SagasComponents/SagaDetail/SagaDetail';
const Skypiea = () => {
  return  <SagaDetail
      sagaId={3}
      backgroundImage={SkypeiaBG} 
      characterIds={[660, 624, 637]} 
      episodeIds={[167, 182 , 184, 192,195]} 
      locationIds={[89,92,96,95]} 
    />
};

export default Skypiea;

