# 🎭 HSD DEU Spyfall - Masanızda Bir Casus Var!

Modern, offline mobil Spyfall oyunu. React + Vite + Tailwind CSS + Framer Motion ile geliştirilmiştir.

## 🎮 Oyun Hakkında

HSD DEU Spyfall, 3-8 kişi ile oynanabilen, tek cihazlı bir sosyal dedüksiyon oyunudur. Oyunculardan biri **CASUS**, diğerleri **VATANDAŞ**tır. Vatandaşlar casusu bulmaya çalışırken, casus bulunduğu mekanı anlamaya çalışır.

### ✨ Özellikler

- 🌐 **Tamamen Offline** - İnternet bağlantısı gerektirmez
- 📱 **Tek Cihaz** - Tüm oyuncular aynı telefonu kullanır
- 👤 **Oyuncu İsimleri** - Her oyuncu kendi ismini girebilir
- 🗺️ **60+ Farklı Mekan** - Her turda farklı mekan, tekrar etmez
- 🎨 **Modern Tasarım** - HSD DEU temalı mor ve neon mavi renkleri
- ✨ **Akıcı Animasyonlar** - Framer Motion ile yumuşak geçişler
- 🎯 **Optimizasyon** - Mükemmel responsive tasarım ve kullanıcı deneyimi
- 🇹🇷 **Türkçe Arayüz** - Tamamen Türkçe içerik

## 🚀 Kurulum

### Gereksinimler

- Node.js (v20 veya üzeri önerilir)
- npm veya yarn

### Adımlar

1. **Bağımlılıkları yükleyin:**
```bash
npm install
```

2. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

3. **Tarayıcınızda açın:**
- Genellikle `http://localhost:5173` veya `http://localhost:5174` adresinde açılır
- Mobil görünüm için tarayıcıda F12 ile geliştirici araçlarını açıp mobil görünüme geçin
- Veya telefonunuzdan yerel ağ IP adresinizi kullanarak erişin

4. **Production build için:**
```bash
npm run build
npm run preview
```

## 📖 Nasıl Oynanır?

### Oyun Kurulumu

1. **Oyuncu Sayısı Seçimi:** 3-8 kişi arası oyuncu sayısı belirleyin
2. **İsim Girişi:** Her oyuncu kendi ismini girer (opsiyonel)
3. **Rol Dağıtımı:** Oyuncular sırayla telefondan rolünü görür
   - Bir oyuncu **CASUS** olur (mekanı bilmez)
   - Diğer oyuncular **VATANDAŞ** olur (mekanı bilir)
4. **Kimse başkasının rolünü görmez!**

### Oyun Aşamaları

#### 1️⃣ Soru Sorma Aşaması
- Oyuncular sırayla birbirlerine mekanla ilgili sorular sorar
- Örnek sorular:
  - "Buraya hangi saatte geldin?"
  - "Burada ne yaptın?"
  - "Burada kimlerle karşılaştın?"
- **Vatandaşlar:** Mekanı bildiği için detaylı cevaplar verebilir
- **Casus:** Mekanı bilmediği için genel cevaplar verir, ipucu toplamaya çalışır

#### 2️⃣ Oylama
- Yeterince ipucu toplandığında oylama başlatılır
- Oyuncular casuyu seçer
- Seçilen kişi ortaya çıkar

#### 3️⃣ Casus Tahmin Şansı
- Eğer casus yakalanırsa, mekanı tahmin ederek kazanabilir
- 60+ mekan arasından doğru seçimi yapmalı

### 🏆 Kazanma Koşulları

- ✅ **Casus yakalanır ve mekanı bilemezse:** Vatandaşlar Kazanır!
- ✅ **Casus kaçarsa veya mekanı doğru bilirse:** Casus Kazanır!

### 🗺️ Mekan Kategorileri

Oyunda 60+ farklı mekan bulunur ve her turda farklı bir mekan çıkar:

**HSD DEU & Etkinlik:** Sunum Alanı, Workshop Odası, Kahve Köşesi, Networking Masası, vb.

**Okul & Üniversite:** Kütüphane, Kafeterya, Spor Salonu, Laboratuvar, vb.

**Şehir:** Havalimanı, Tren İstasyonu, AVM, Sinema, Restoran, Hastane, vb.

**Eğlence:** Bowling Salonu, Karaoke Bar, Konser Salonu, Tiyatro, vb.

**İş & Ofis:** Toplantı Odası, Ofis, Süpermarket, Kitapçı, vb.

**Ulaşım:** Otobüs, Metro, Taksi, Feribot, vb.

## 💡 Oyun İpuçları

### Vatandaşlar İçin:
- Mekanla ilgili spesifik sorular sorun
- Cevaplarınızda detay verin ama çok açık olmayın
- Diğer vatandaşların cevaplarını dinleyin
- Tutarsız cevaplar veren kişilere dikkat edin

### Casus İçin:
- Sorularınızı genel tutun
- Belirsiz ama mantıklı cevaplar verin
- Diğer oyuncuların cevaplarından ipucu toplayın
- Çok sessiz kalmayın, şüphe çekersiniz
- Yakalanırsanız mekanı tahmin etmeye çalışın!

## 🛠️ Teknolojiler

- **React 18** - UI kütüphanesi
- **Vite** - Build tool ve dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion** - Animasyon kütüphanesi
- **LocalStorage API** - Oyuncu isimlerini saklama

## 📱 Mobil Optimizasyon

Oyun tamamen **dikey mobil ekran (portrait mode)** için optimize edilmiştir:
- Minimum dokunma alanı: 48px+ (accessibility standard)
- Büyük, parmakla dokunmaya uygun butonlar
- Tam ekran responsive tasarım
- Touch-friendly arayüz
- Scroll optimization ile uzun listeler
- Tutarlı geri buton navigasyonu

## 🎨 Tasarım

- **Renk Paleti:**
  - HSD Purple: `#6b21a8`
  - HSD Blue (Neon): `#00f5ff`
  - Dark Background: `#0f172a`
- **Font:** Inter (Google Fonts)
- **Animasyonlar:** Smooth fade-in/out, scale ve rotateY efektleri
- **UX İyileştirmeleri:**
  - Tutarlı buton hiyerarşisi
  - Görsel geri bildirim (hover, tap effects)
  - Akıllı scroll yönetimi
  - Optimized spacing

## 🎯 Özellikler

### ✅ Mevcut Özellikler
- [x] 3-8 oyuncu desteği
- [x] Oyuncu ismi özelleştirme (localStorage)
- [x] 60+ farklı mekan
- [x] Her turda farklı mekan (akıllı algoritma ile tekrar etmez)
- [x] Animasyonlu kart gösterimi
- [x] Casus mekan tahmin sistemi
- [x] Sınırsız tur
- [x] Tamamen offline
- [x] Full responsive tasarım
- [x] Optimize edilmiş navigasyon ve geri butonları
- [x] Smooth animations

## 📝 Lisans & Ekip

Bu proje **HSD DEU Proje Ekibi** tarafından 2025 yılında geliştirilmiştir.

---

**HSD DEU Proje Ekibi 💜 2025**
