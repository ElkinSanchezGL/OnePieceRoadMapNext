import WanoBG from '../../assets/Sagas/WanoIsland.png'
import { SagaDetail } from '@/components/SagasComponents/SagaDetail/SagaDetail';

export const Wano = () => {
  return (
  <SagaDetail
      sagaId={10}
      backgroundImage={WanoBG.src}
      arcIds={[46,47]}
      characterIds= {[1, 187, 560, 562, 590]}
      episodeIds={[892, 960, 978, 1071, 1076, 1085]}
      locationIds={[69]}
    />
  )
}

