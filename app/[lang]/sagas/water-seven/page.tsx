import Water7BG from '../../assets/Sagas/Water_7_Background.jpg'
import { SagaDetail } from '@/components/SagasComponents/SagaDetail/SagaDetail';
export const Water7 = () => {
  return (
  <SagaDetail
      sagaId={4}
      backgroundImage={Water7BG.src}
      arcIds={[24, 25, 26]} 
      characterIds={[7, 8, 392,396, 6]} 
      episodeIds={[236, 247 , 278 ,309, 304]}
      locationIds={[54, 55, 53]}
    />
  )
}
