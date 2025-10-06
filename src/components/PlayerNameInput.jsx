import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const PlayerNameInput = ({ playerCount, onContinue, onBack }) => {
  const [playerNames, setPlayerNames] = useState([]);

  useEffect(() => {
    // LocalStorage'dan kayıtlı isimleri yükle
    const savedNames = localStorage.getItem('hsd-spyfall-names');
    if (savedNames) {
      const names = JSON.parse(savedNames);
      setPlayerNames(names.slice(0, playerCount));
    } else {
      // Varsayılan isimler
      setPlayerNames(Array.from({ length: playerCount }, (_, i) => ''));
    }
  }, [playerCount]);

  const handleNameChange = (index, value) => {
    const newNames = [...playerNames];
    newNames[index] = value;
    setPlayerNames(newNames);
  };

  const handleContinue = () => {
    // Boş isimleri otomatik doldur
    const finalNames = playerNames.map((name, i) => 
      name.trim() || `Oyuncu ${i + 1}`
    );
    
    // İsimleri localStorage'a kaydet
    localStorage.setItem('hsd-spyfall-names', JSON.stringify(finalNames));
    
    onContinue(finalNames);
  };

  const canContinue = playerNames.length === playerCount;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="px-6 py-8 space-y-6 flex flex-col max-h-screen"
    >
      <div className="text-center flex-shrink-0">
        <div className="text-5xl mb-3">✍️</div>
        <h2 className="text-3xl font-bold text-white mb-2">
          Oyuncu İsimleri
        </h2>
        <p className="text-gray-400 text-sm">
          İsimleri girin (boş bırakılırsa otomatik isim verilir)
        </p>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 pr-2" style={{ maxHeight: 'calc(100vh - 350px)' }}>
        {Array.from({ length: playerCount }, (_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="relative"
          >
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-hsd-purple to-purple-700 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                {i + 1}
              </div>
              <input
                type="text"
                value={playerNames[i] || ''}
                onChange={(e) => handleNameChange(i, e.target.value)}
                placeholder={`Oyuncu ${i + 1}`}
                maxLength={20}
                className="flex-1 bg-slate-800 text-white px-4 py-3.5 rounded-xl border-2 border-slate-700 focus:border-hsd-blue focus:outline-none transition-colors text-base placeholder-gray-500"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="space-y-3 flex-shrink-0 pt-4">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleContinue}
          disabled={!canContinue}
          className={`w-full py-5 px-8 rounded-2xl font-semibold text-lg shadow-lg transition-all min-h-[64px] ${
            canContinue
              ? 'bg-gradient-to-r from-hsd-blue to-cyan-500 text-white hover:shadow-hsd-blue/50'
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
        >
          🎮 Oyuna Başla
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

export default PlayerNameInput;
