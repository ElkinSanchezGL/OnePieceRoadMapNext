'use client'
import WholeCakeBG from '@/assets/Sagas/whole_Cake.png'
import { SagaDetail } from '@/components/SagasComponents/SagaDetail/SagaDetail';
const Whole_Cake = () => {
  return (
  <SagaDetail
      sagaId={9}
      backgroundImage={WholeCakeBG}
      arcIds={[43, 45]}
      characterIds= {[1, 5, 10, 96, 97]}
      episodeIds={[751, 783, 830, 849, 871, 877]}
      locationIds={[71, 78]}
    />
  )
}

export default Whole_Cake;
