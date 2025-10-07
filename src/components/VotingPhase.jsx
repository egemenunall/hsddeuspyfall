import { motion } from 'framer-motion';
import { useState } from 'react';

const VotingPhase = ({ playerCount, playerNames, spyIndex, location, locations, onSubmitVotes }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [showSpyGuess, setShowSpyGuess] = useState(false);
  const [spyGuessedLocation, setSpyGuessedLocation] = useState('');

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

  const handleSpyGuess = () => {
    if (!spyGuessedLocation.trim()) {
      alert('Lütfen bir mekan girin!');
      return;
    }
    onSubmitVotes(selectedPlayer, spyGuessedLocation.trim());
  };

  if (showSpyGuess) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="px-6 py-8 space-y-6 flex flex-col min-h-screen justify-center"
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

        <div className="space-y-4">
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <label className="block text-gray-400 text-sm mb-3 text-center">
              Mekan tahmininizi yazın:
            </label>
            <input
              type="text"
              value={spyGuessedLocation}
              onChange={(e) => setSpyGuessedLocation(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && spyGuessedLocation.trim()) {
                  handleSpyGuess();
                }
              }}
              placeholder="Örn: Sunum Alanı"
              autoFocus
              className="w-full bg-slate-700 text-white px-5 py-4 rounded-xl border-2 border-slate-600 focus:border-hsd-blue focus:outline-none transition-colors text-lg text-center placeholder-gray-500 font-semibold"
            />
          </div>

          <div className="bg-hsd-purple/20 border border-hsd-purple/50 rounded-xl p-4">
            <p className="text-gray-300 text-sm text-center leading-relaxed">
              💡 <strong>İpucu:</strong> Tam mekan adını yazın. Büyük/küçük harf önemli değil.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleSpyGuess}
            disabled={!spyGuessedLocation.trim()}
            className={`w-full py-6 px-8 rounded-2xl font-bold text-xl shadow-lg transition-all min-h-[72px] ${
              spyGuessedLocation.trim()
                ? 'bg-gradient-to-r from-hsd-blue to-cyan-500 text-white hover:shadow-hsd-blue/50'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            🎯 Tahmin Et
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => onSubmitVotes(selectedPlayer, null)}
            className="w-full bg-slate-700/80 text-gray-300 py-3 px-8 rounded-xl font-medium text-base shadow-lg hover:bg-slate-600 transition-all min-h-[48px]"
          >
            ⏭️ Tahmin Etmeden Geç
          </motion.button>
        </div>
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
