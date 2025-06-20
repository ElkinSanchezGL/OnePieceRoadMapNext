'use client';
import { motion } from "framer-motion";

interface IslandCardProps {
  title: string;
  description: string;
}

export default function IslandCard({ title, description }: IslandCardProps) {
  return (
    <motion.div
      className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-lg shadow-md hover:scale-[1.02] transition"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      layout
    >
      <h3 className="text-lg font-semibold text-yellow-900">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </motion.div>
  );
}
