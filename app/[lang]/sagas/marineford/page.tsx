import MarinefordBG from '../../assets/Sagas/marineford_background2.jpg'
import { SagaDetail } from '@/components/SagasComponents/SagaDetail/SagaDetail';
export const Marineford = () => {
  return (
  <SagaDetail
      sagaId={6}
      backgroundImage={MarinefordBG.src}
      arcIds={[30, 31, 32, 34, 35]}
      characterIds={[1, 290, 289, 82, 673, 518, 520, 690, 247, 291, 293, 429, 661, 663, 70, 54]}
      episodeIds={[421, 422, 456, 461, 483, 485, 489, 516]}
      locationIds={[44, 67]}
    />
  )
}
