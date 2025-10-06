import { motion } from 'framer-motion';

const HowToPlay = ({ onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="px-6 py-8 space-y-6 flex flex-col max-h-screen"
    >
      <div className="text-center flex-shrink-0">
        <div className="text-6xl mb-3">📖</div>
        <h2 className="text-3xl font-bold text-white mb-2">
          Nasıl Oynanır?
        </h2>
      </div>

      <div className="space-y-4 flex-1 overflow-y-auto pr-2">
        {/* Oyun Amacı */}
        <div className="bg-gradient-to-br from-hsd-purple/20 to-purple-900/20 rounded-2xl p-5 border border-hsd-purple/30">
          <h3 className="text-xl font-bold text-hsd-blue mb-3 flex items-center">
            🎯 Oyun Amacı
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Oyunculardan biri <strong>CASUS</strong>, diğerleri <strong>VATANDAŞ</strong>tır. 
            Vatandaşlar casusu bulmaya, casus ise mekanı anlamaya çalışır.
          </p>
        </div>

        {/* Oyun Kurulumu */}
        <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-3 flex items-center">
            🎮 Kurulum
          </h3>
          <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
            <li>3-8 kişi arası oynanabilir</li>
            <li>Oyuncular sırayla aynı telefonu kullanır</li>
            <li>Her oyuncu sadece kendi rolünü görür</li>
            <li>Vatandaşlar mekanı bilir, casus bilmez</li>
            <li>Her turda farklı mekan çıkar (60+ mekan)</li>
          </ul>
        </div>

        {/* Oyun Akışı */}
        <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-3">
            🗣️ Oyun Akışı
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-hsd-blue font-semibold mb-1">1️⃣ Soru Sorma</p>
              <p className="text-gray-300 text-xs leading-relaxed">
                Sırayla birbirlerine mekanla ilgili sorular sorun. 
                Örnek: "Buraya hangi saatte geldin?", "Burada ne yaptın?"
              </p>
            </div>
            <div>
              <p className="text-hsd-blue font-semibold mb-1">2️⃣ Oylama</p>
              <p className="text-gray-300 text-xs leading-relaxed">
                Yeterli ipucu toplandığında oylamaya geçin. Casuyu seçin.
              </p>
            </div>
            <div>
              <p className="text-hsd-blue font-semibold mb-1">3️⃣ Casus Tahmin Şansı</p>
              <p className="text-gray-300 text-xs leading-relaxed">
                Casus suçlanırsa, mekanı tahmin ederek kazanabilir.
              </p>
            </div>
          </div>
        </div>

        {/* Kazanma */}
        <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-2xl p-5 border border-green-500/30">
          <h3 className="text-xl font-bold text-white mb-3">
            🏆 Kazanma
          </h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>✅ Casus yakalanır ve mekanı bilemezse → <strong>Vatandaşlar Kazanır</strong></li>
            <li>✅ Casus kaçarsa veya mekanı doğru bilirse → <strong>Casus Kazanır</strong></li>
          </ul>
        </div>

        {/* İpuçları */}
        <div className="bg-gradient-to-br from-hsd-blue/20 to-cyan-900/20 rounded-2xl p-5 border border-hsd-blue/30">
          <h3 className="text-xl font-bold text-white mb-3">
            💡 İpuçları
          </h3>
          <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
            <li>Vatandaşlar detaylı cevaplar versin</li>
            <li>Casus belirsiz konuşursa şüphe çeker</li>
            <li>Sorular spesifik ama çok açık olmasın</li>
            <li>Herkes sırayla soru sorsun ve cevaplasın</li>
          </ul>
        </div>
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={onBack}
        className="w-full bg-gradient-to-r from-hsd-purple to-purple-700 text-white py-4 px-8 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-hsd-purple/50 transition-all min-h-[56px] flex-shrink-0"
      >
        ← Geri Dön
      </motion.button>
    </motion.div>
  );
};

export default HowToPlay;
