import { motion } from 'framer-motion';
import { useState } from 'react';

const VotingPhase = ({ playerCount, playerNames, spyIndex, location, locations, onSubmitVotes }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [showSpyGuess, setShowSpyGuess] = useState(false);
  const [spyGuessedLocation, setSpyGuessedLocation] = useState(null);

  const handleVote = (index) => {
    setSelectedPlayer(index);
  };

  const handleShowResult = () => {
    if (selectedPlayer === null) {
      alert('Lütfen bir oyuncu seçin!');
      return;
    }

    // Eğer seçilen kişi casus ise, casusa mekan tahmin etme şansı ver
    if (selectedPlayer === spyIndex) {
      setShowSpyGuess(true);
    } else {
      onSubmitVotes(selectedPlayer, null);
    }
  };

  const handleSpyGuess = (guessedLocation) => {
    setSpyGuessedLocation(guessedLocation);
    onSubmitVotes(selectedPlayer, guessedLocation);
  };

  if (showSpyGuess) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="px-6 py-8 space-y-6 flex flex-col max-h-screen"
      >
        <div className="text-center flex-shrink-0">
          <div className="text-7xl mb-4">🕵️</div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Casus Mekanı Tahmin Edebilir!
          </h2>
          <p className="text-gray-400 text-base">
            Doğru tahmin ederse büyük zafer kazanır
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 flex-1 overflow-y-auto pr-2" style={{ maxHeight: 'calc(100vh - 350px)' }}>
          {locations.map((loc, index) => (
            <motion.button
              key={index}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSpyGuess(loc)}
              className={`py-3.5 px-3 rounded-xl font-semibold text-sm transition-all min-h-[56px] flex items-center justify-center ${
                spyGuessedLocation === loc
                  ? 'bg-gradient-to-r from-hsd-purple to-purple-700 text-white shadow-lg'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              {loc}
            </motion.button>
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onSubmitVotes(selectedPlayer, null)}
          className="w-full bg-slate-700/80 text-gray-300 py-3 px-8 rounded-xl font-medium text-base shadow-lg hover:bg-slate-600 transition-all min-h-[48px] flex-shrink-0"
        >
          ⏭️ Tahmin Etmeden Geç
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-6 py-8 space-y-6 flex flex-col max-h-screen"
    >
      <div className="text-center flex-shrink-0">
        <h2 className="text-3xl font-bold text-white mb-2">
          Casus Kim? 🤔
        </h2>
        <p className="text-gray-400 text-base">
          Oyuncular konuşup karar versin
        </p>
      </div>

      <div className="space-y-3 flex-1 overflow-y-auto pr-2" style={{ maxHeight: 'calc(100vh - 300px)' }}>
        {playerNames.map((name, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleVote(i)}
            className={`w-full py-5 px-6 rounded-2xl font-semibold text-lg transition-all min-h-[64px] ${
              selectedPlayer === i
                ? 'bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-500/50'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
          >
            {name}
          </motion.button>
        ))}
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handleShowResult}
        disabled={selectedPlayer === null}
        className={`w-full py-6 px-8 rounded-2xl font-bold text-xl shadow-lg transition-all min-h-[72px] flex-shrink-0 ${
          selectedPlayer !== null
            ? 'bg-gradient-to-r from-hsd-blue to-cyan-500 text-white hover:shadow-hsd-blue/50'
            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
        }`}
      >
        🎯 Sonucu Göster
      </motion.button>
    </motion.div>
  );
};

export default VotingPhase;
