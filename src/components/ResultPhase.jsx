import { motion } from 'framer-motion';

const ResultPhase = ({
  playerCount,
  playerNames,
  spyIndex,
  location,
  votes,
  onNewRound,
  onBackToMenu,
  roundNumber
}) => {
  const votedPlayer = votes.votedPlayer;
  const spyGuess = votes.spyGuess;
  const spyCaught = votedPlayer === spyIndex;
  const spyGuessedCorrectly = spyGuess === location;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="px-6 py-8 space-y-6 flex flex-col max-h-screen overflow-y-auto"
    >
      <div className="text-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="text-8xl mb-4"
        >
          {spyCaught ? (spyGuessedCorrectly ? '😱' : '🎉') : '😈'}
        </motion.div>
        <h2 className="text-4xl font-bold text-white mb-3">
          {spyCaught 
            ? (spyGuessedCorrectly ? 'Casus Yakalandı Ama...' : 'Casus Yakalandı!')
            : 'Casus Kaçtı!'}
        </h2>
        {spyCaught && spyGuessedCorrectly && (
          <p className="text-hsd-blue font-semibold text-lg">
            Casus mekanı doğru bildi! 🎯
          </p>
        )}
      </div>

      {/* Sonuç Kartı */}
      <div className="bg-slate-800/70 rounded-2xl p-6 space-y-4 border border-slate-700 flex-shrink-0">
        <div className="flex items-center justify-between py-3 border-b border-slate-600">
          <span className="text-gray-400 text-base">🕵️ Casus:</span>
          <span className="text-white font-bold text-lg">
            {playerNames[spyIndex]}
          </span>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-slate-600">
          <span className="text-gray-400 text-base">📍 Mekan:</span>
          <span className="text-white font-bold text-lg text-right">
            {location}
          </span>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-slate-600">
          <span className="text-gray-400 text-base">🗳️ Suçlanan:</span>
          <span className="text-white font-bold text-lg">
            {playerNames[votedPlayer]}
          </span>
        </div>

        {spyGuess && (
          <div className="flex items-center justify-between py-3">
            <span className="text-gray-400 text-base">🎯 Casus Tahmini:</span>
            <span className={`font-bold text-lg text-right ${spyGuessedCorrectly ? 'text-green-400' : 'text-red-400'}`}>
              {spyGuess} {spyGuessedCorrectly ? '✓' : '✗'}
            </span>
          </div>
        )}
      </div>

      {/* Kazanan */}
      <div className={`rounded-2xl p-6 text-center flex-shrink-0 ${
        spyCaught && !spyGuessedCorrectly
          ? 'bg-gradient-to-br from-green-600/30 to-emerald-600/30 border-2 border-green-500/50'
          : 'bg-gradient-to-br from-red-600/30 to-red-800/30 border-2 border-red-500/50'
      }`}>
        <h3 className="text-2xl font-bold text-white mb-3">
          {spyCaught && !spyGuessedCorrectly ? '🏆 Vatandaşlar Kazandı!' : '🏆 Casus Kazandı!'}
        </h3>
        <p className="text-gray-300 text-base leading-relaxed">
          {spyCaught && !spyGuessedCorrectly
            ? 'Vatandaşlar casusu yakalamayı başardı!'
            : spyCaught && spyGuessedCorrectly
            ? 'Casus yakalandı ama mekanı doğru bildi!'
            : 'Casus kimliğini saklayıp kaçmayı başardı!'}
        </p>
      </div>

      {/* Butonlar */}
      <div className="space-y-3 flex-shrink-0">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onNewRound}
          className="w-full bg-gradient-to-r from-hsd-purple to-purple-700 text-white py-5 px-8 rounded-2xl font-bold text-lg shadow-lg hover:shadow-hsd-purple/50 transition-all min-h-[64px]"
        >
          🔄 Yeni Tur Başlat
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onBackToMenu}
          className="w-full bg-slate-700/80 text-gray-300 py-3 px-8 rounded-xl font-medium text-base shadow-lg hover:bg-slate-600 transition-all min-h-[48px]"
        >
          ← Ana Menü
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ResultPhase;
