# 📍 Mekan Ekleme Rehberi

## Mevcut Mekanlar

Tüm mekanlar `src/data/locations.json` dosyasında kategorilere ayrılmış şekilde tutuluyor.

## Yeni Mekan Ekleme

### 1️⃣ JSON Dosyasını Aç

`src/data/locations.json` dosyasını bir editörle aç.

### 2️⃣ Kategori Seç veya Oluştur

Mevcut kategoriler:
- `hsd_etkinlik` - HSD DEU & Etkinlik Mekanları
- `okul` - Okul & Üniversite
- `sehir` - Şehir & Genel Mekanlar
- `eglence` - Eğlence & Sosyal
- `is_ofis` - İş & Ofis
- `ulasim` - Ulaşım & Seyahat
- `diger` - Diğer

### 3️⃣ Mekan Ekle

Bir kategorinin `locations` dizisine yeni mekan ekle:

```json
"hsd_etkinlik": {
  "name": "HSD DEU & Etkinlik Mekanları",
  "locations": [
    "Sunum Alanı",
    "Workshop Odası",
    "Yeni Mekanım"  ← BURAYA EKLE
  ]
}
```

### 4️⃣ Yeni Kategori Oluştur (Opsiyonel)

Tamamen yeni bir kategori ekleyebilirsin:

```json
"spor": {
  "name": "Spor Mekanları",
  "locations": [
    "Futbol Sahası",
    "Basketbol Sahası",
    "Yüzme Havuzu"
  ]
}
```

## ⚠️ Dikkat Edilmesi Gerekenler

1. **Virgül kullanımı:** Son eleman dışında her satırın sonunda virgül olmalı
2. **Tırnak işaretleri:** Mekan isimleri çift tırnak içinde olmalı
3. **Türkçe karakterler:** Kullanılabilir (ç, ğ, ı, ö, ş, ü)
4. **Benzersizlik:** Aynı mekan farklı kategorilerde tekrar etmemeli

## Örnek: Eksiksiz Kategori

```json
"hayvanat_bahcesi": {
  "name": "Hayvanat Bahçesi",
  "locations": [
    "Aslan Kafesi",
    "Kuş Evi",
    "Akvaryum",
    "Fil Alanı",
    "Kafe"
  ]
}
```

## Test Et

Mekan ekledikten sonra:

```bash
npm run dev
```

Komutunu çalıştır ve oyunda yeni mekanın çıktığını kontrol et!

## GitHub'a Yükle

Değişiklikleri kaydet:

```bash
git add src/data/locations.json
git commit -m "Yeni mekanlar eklendi"
git push
```

Netlify otomatik güncellenecek! 🚀

---

**HSD DEU Proje Ekibi 💜 2025**
