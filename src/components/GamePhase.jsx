import { motion } from 'framer-motion';

const GamePhase = ({ onStartVoting }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="px-6 py-12 space-y-8 flex flex-col min-h-screen justify-center"
    >
      <div className="text-center space-y-4">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          className="text-8xl"
        >
          🗣️
        </motion.div>
        <h2 className="text-4xl font-bold text-white">
          Soru Sorma Zamanı!
        </h2>
        <p className="text-gray-400 text-base">
          Birbirinize sorular sorun ve casusu bulun
        </p>
      </div>

      <div className="bg-slate-800/50 rounded-2xl p-6 space-y-4 border border-slate-700">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <span className="text-3xl flex-shrink-0">💡</span>
            <div>
              <p className="text-white font-semibold mb-1">Sırayla Soru Sorun</p>
              <p className="text-gray-400 text-sm">
                Her oyuncu sırayla sorular sorsun ve cevaplasın
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-3xl flex-shrink-0">🎯</span>
            <div>
              <p className="text-white font-semibold mb-1">Vatandaşlar</p>
              <p className="text-gray-400 text-sm">
                Casusu bulmaya çalışın! Detaylı cevaplar verin.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-3xl flex-shrink-0">🕵️</span>
            <div>
              <p className="text-white font-semibold mb-1">Casus</p>
              <p className="text-gray-400 text-sm">
                Mekanı anlamaya çalışın ama kendinizi ele vermeyin!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-hsd-purple/20 border-2 border-hsd-purple rounded-2xl p-5">
        <p className="text-white text-center text-base leading-relaxed">
          💬 <strong>İpucu:</strong> "Buraya hangi saatte geldin?", "Burada ne yaptın?" gibi mekanla ilgili sorular sorun.
        </p>
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={onStartVoting}
        className="w-full bg-gradient-to-r from-hsd-blue to-cyan-500 text-white py-6 px-8 rounded-2xl font-bold text-xl shadow-lg hover:shadow-hsd-blue/50 transition-all min-h-[72px]"
      >
        🗳️ Oylamaya Geç
      </motion.button>
    </motion.div>
  );
};

export default GamePhase;
