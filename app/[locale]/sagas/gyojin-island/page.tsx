'use client'
import GyojinIslandBG from '@/assets/Sagas/IslandGyojin.png'
import { SagaDetail } from '@/components/SagasComponents/SagaDetail/SagaDetail';

const GyojinIsland = () => {
  return (
  <SagaDetail
      sagaId={7}
      backgroundImage={GyojinIslandBG}
      arcIds={[36, 37]}
      characterIds= {[1, 10, 358, 646, 650]}
      episodeIds={[517, 523, 540, 569, 574]}
      locationIds={[42, 60]}
    />
  )
}
export default GyojinIsland;
