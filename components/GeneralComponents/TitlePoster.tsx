type TitlePosterProps = {
  imageUrl: string;
};

export const TitlePoster = ({ imageUrl }: TitlePosterProps) => {
  return (
    <div
      className="bg-yellow-100 border border-yellow-400 rounded-lg shadow-2xl drop-shadow-xl p-6 w-[268px] h-[67px] text-brown-800 bg-no-repeat bg-center bg-contain"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
    </div>
  );
};