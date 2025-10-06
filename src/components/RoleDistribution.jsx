import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const RoleDistribution = ({
  playerCount,
  playerNames,
  currentPlayerIndex,
  spyIndex,
  location,
  onNext,
  onReady,
  isReady
}) => {
  const [showingCard, setShowingCard] = useState(false);

  const isSpy = currentPlayerIndex === spyIndex;
  const playerName = playerNames[currentPlayerIndex];
  const isLastPlayer = currentPlayerIndex === playerCount - 1;

  const handleShowCard = () => {
    setShowingCard(true);
    if (!isReady) {
      onReady();
    }
  };

  const handleNext = () => {
    setShowingCard(false);
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-6 py-12 space-y-8 flex flex-col min-h-screen justify-center"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-2">
          {playerName}
        </h2>
        <p className="text-gray-400 text-base">
          Rolünü görmek için butona bas
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!showingCard ? (
          <motion.div
            key="hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="space-y-5"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleShowCard}
              className="w-full bg-gradient-to-r from-hsd-purple to-purple-700 text-white py-7 px-8 rounded-2xl font-bold text-2xl shadow-lg hover:shadow-hsd-purple/50 transition-all min-h-[80px]"
            >
              🎭 Kartımı Gör
            </motion.button>
            
            <div className="bg-slate-800/50 rounded-xl p-5 text-center border border-slate-700">
              <p className="text-gray-300 text-base leading-relaxed">
                ⚠️ <strong>Dikkat:</strong> Kartını sadece sen gör! Başkaları görmemeli.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="shown"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {/* Rol Kartı */}
            <div
              className={`rounded-3xl p-8 text-center shadow-2xl ${
                isSpy
                  ? 'bg-gradient-to-br from-red-600 to-red-800'
                  : 'bg-gradient-to-br from-hsd-blue to-blue-700'
              }`}
            >
              <div className="text-7xl mb-4">
                {isSpy ? '🕵️' : '👤'}
              </div>
              <h3 className="text-4xl font-bold text-white mb-4">
                {isSpy ? 'CASUS' : 'VATANDAŞ'}
              </h3>
              {!isSpy && (
                <div className="bg-white/20 rounded-xl p-5 mt-6">
                  <p className="text-white text-sm mb-2">📍 Mekan:</p>
                  <p className="text-2xl font-bold text-white">
                    {location}
                  </p>
                </div>
              )}
              {isSpy && (
                <p className="text-white/90 text-base mt-4 leading-relaxed">
                  Mekanı bulmaya çalış! Sorularla kendini ele vermeden ipucu topla.
                </p>
              )}
            </div>

            {/* Devam Butonu */}
            {isReady && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="w-full bg-gradient-to-r from-hsd-blue to-cyan-500 text-white py-6 px-8 rounded-2xl font-bold text-xl shadow-lg hover:shadow-hsd-blue/50 transition-all min-h-[72px]"
              >
                {isLastPlayer ? '🎮 Oyuna Başla' : '➡️ Sonraki Oyuncuya Ver'}
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default RoleDistribution;
