'use client';
import { useTranslation } from 'react-i18next';
import Background from '@/components/GeneralComponents/Background';
import ButtonRedirect from '@/components/GeneralComponents/Button';
import { ScrollFeature } from '@/components/GeneralComponents/ScrollFeature';
import OnePiece from '@/assets/GeneralImages/OnePieceRoadMap.png';
import Mugis from '@/assets/GeneralImages/Mugis.png';
import GeneralOnepiece from "../assets/GeneralImages/One_Piece.png";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Background image={GeneralOnepiece}>
      <main className="flex justify-center items-center h-screen">
        <ScrollFeature
          title={t('home.welcomeTitle')}
          text={t('home.welcomeText')}
          imageUrl={OnePiece.src}
          bottomImageUrl={Mugis.src}
        >
          <div className='flex space-x-4'>
            <ButtonRedirect text={t('home.startAdventure')} route='/map' />
            <ButtonRedirect text={t('home.chooseSaga')} route='/Sagas' />
          </div>
        </ScrollFeature>
      </main>
    </Background>
  );
};

export default Home;
