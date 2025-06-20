'use client';
import { useState, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import WantedBG from "@/assets/wanted-bg.jpg";

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

export const SagaCardCarousel = ({ cards, extraContent }: SagaCardCarouselProps) => {
  const [[currentIndex, direction], setIndex] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    setIndex(([prev]) => [(prev + newDirection + cards.length) % cards.length, newDirection]);
  };

  const currentCard = cards[currentIndex];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={clsx(
        "relative w-[580px] h-[420px] bg-[#fdf5e6]",
        "border-[10px] border-[#d2b48c] rounded-md shadow-xl",
        "text-brown-900 font-serif px-6 py-4",
        "overflow-visible"
      )}
      style={{
        backgroundImage: `url(${WantedBG.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: 'inset 0 0 10px #aa8c66',
      }}
    >
      <div className="relative h-[270px] w-full mt-3">
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
                <p className="mb-3 text-md">{currentCard.text}</p>
                {currentCard.bottomImageUrl && (
                  <img
                    src={currentCard.bottomImageUrl}
                    alt="Banner"
                    className="max-w-full max-h-[130px] rounded mt-2 mx-auto shadow-md"
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
          className="w-32 h-32 object-cover rounded-full border-4 border-[#d2b48c] mx-auto mt-3"
        />
      )}

      <button
        onClick={() => paginate(-1)}
        className="absolute -left-6 top-1/2 -translate-y-1/2 bg-[#d2b48c] hover:bg-[#c2a676] rounded-full p-2 shadow-md transition cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 text-[#4a3728]" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute -right-6 top-1/2 -translate-y-1/2 bg-[#d2b48c] hover:bg-[#c2a676] rounded-full p-2 shadow-md transition cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 text-[#4a3728]" />
      </button>
    </motion.div>
  );
};
