'use client';
import { motion, AnimatePresence } from "framer-motion";

interface IslandModalProps {
  isOpen: boolean;
  onClose: () => void;
  islandName: string;
  description: string;
cards?: { id: string; title: string; description: string }[];
}

export default function IslandModal({
  isOpen,
  onClose,
  islandName,
  description,
  cards = []
}: IslandModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-[#fffaf3] p-6 rounded-2xl max-w-2xl w-full relative shadow-lg border-4 border-yellow-600"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-3 right-3 text-gray-700 text-xl">✖</button>
            <h2 className="text-3xl font-bold mb-2 text-yellow-800">{islandName}</h2>
            <p className="text-gray-800 mb-4">{description}</p>

            {cards.length > 0 && (
              <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-lg shadow-md hover:scale-[1.02] transition"
                  >
                    <h3 className="text-lg font-semibold text-yellow-900">{card.title}</h3>
                    <p className="text-gray-700 text-sm">{card.description}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
