import { useState, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type CardData = {
  title: string;
  text: string;
  imageUrl?: string;
  bottomImageUrl?: string;
};

type SagaCardCarouselProps = {
  cards: CardData[];
  extraContent?: (index: number) => ReactNode;
};

export const SagaCardCarousel = ({
  cards,
  extraContent,
}: SagaCardCarouselProps) => {
  const [[currentIndex, direction], setIndex] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    setIndex(([prev]) => {
      const nextIndex = (prev + newDirection + cards.length) % cards.length;
      return [nextIndex, newDirection];
    });
  };

  const currentCard = cards[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

 return (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
    className="relative w-[560px] h-[370px] bg-yellow-100 border border-yellow-400 rounded-lg shadow-lg text-brown-800 p-6 overflow-hidden flex flex-col"
  >
      <h2 className="text-3xl font-bold text-center">{cards[0].title}</h2>
      <hr className="border-t border-yellow-300 my-2 w-1/2 mx-auto" />

      <div className="relative h-full w-full max-w-[430px] mx-auto overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="absolute w-full h-full overflow-y-auto px-2"
          >
            {extraContent ? (
              extraContent(currentIndex)
            ) : (
              <div className="text-center px-4">
                <p className="mb-4">{currentCard.text}</p>
                {currentCard.bottomImageUrl && (
                  <img
                    src={currentCard.bottomImageUrl}
                    alt="Banner"
                    className="max-w-full max-h-[150px] rounded-md mt-4 mx-auto"
                  />
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {currentIndex === 0 && currentCard.imageUrl && (
        <img
          src={currentCard.imageUrl}
          alt={currentCard.title}
          className="w-32 h-32 object-cover rounded-md shadow-md mx-auto mt-4"
        />
      )}

      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-300 hover:bg-yellow-400 rounded-full p-2 shadow cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-300 hover:bg-yellow-400 rounded-full p-2 shadow cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </motion.div>
  );
};
