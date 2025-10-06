import { motion } from 'framer-motion';

const MainMenu = ({ onStart, onHowToPlay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center space-y-8 px-6 py-12"
    >
      {/* Başlık */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-hsd-purple to-hsd-blue bg-clip-text text-transparent">
          HSD DEU Spyfall 🎭
        </h1>
        <p className="text-gray-300 text-lg px-4 leading-relaxed">
          Masanızda bir casus var! Her turda yeni roller, yeni mekanlar.
        </p>
      </motion.div>

      {/* Butonlar */}
      <div className="space-y-4">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="w-full bg-gradient-to-r from-hsd-purple to-purple-700 text-white py-5 px-8 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-hsd-purple/50 transition-all min-h-[64px]"
        >
          🎮 Oyuna Başla
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onHowToPlay}
          className="w-full bg-slate-700 text-white py-4 px-8 rounded-2xl font-semibold text-lg shadow-lg hover:bg-slate-600 transition-all min-h-[56px]"
        >
          📖 Nasıl Oynanır?
        </motion.button>
      </div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-400 text-sm mt-12"
      >
        HSD DEU Proje Ekibi 💜 2025
      </motion.p>
    </motion.div>
  );
};

export default MainMenu;
