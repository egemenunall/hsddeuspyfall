import { motion } from 'framer-motion';
import { useState } from 'react';

const PlayerSelection = ({ onSelectPlayers, onBack }) => {
  const [selected, setSelected] = useState(null);

  const playerOptions = [3, 4, 5, 6, 7, 8];

  const handleSelect = (num) => {
    setSelected(num);
  };

  const handleContinue = () => {
    if (selected) {
      onSelectPlayers(selected);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="px-6 py-8 space-y-6"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">
          Kaç Kişi Oynayacak?
        </h2>
        <p className="text-gray-400 text-sm">
          3-8 kişi arasında seçim yapın
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {playerOptions.map((num) => (
          <motion.button
            key={num}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSelect(num)}
            className={`py-6 rounded-2xl font-bold text-2xl transition-all min-h-[80px] ${
              selected === num
                ? 'bg-gradient-to-r from-hsd-purple to-purple-700 text-white shadow-lg shadow-hsd-purple/50'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
          >
            {num} Kişi
          </motion.button>
        ))}
      </div>

      <div className="space-y-3 pt-4">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleContinue}
          disabled={!selected}
          className={`w-full py-5 px-8 rounded-2xl font-semibold text-lg shadow-lg transition-all min-h-[64px] ${
            selected
              ? 'bg-gradient-to-r from-hsd-blue to-cyan-500 text-white hover:shadow-hsd-blue/50'
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
        >
          ➡️ Devam Et
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="w-full bg-slate-700/80 text-gray-300 py-3 px-8 rounded-xl font-medium text-base shadow-lg hover:bg-slate-600 transition-all min-h-[48px]"
        >
          ← Geri
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PlayerSelection;
