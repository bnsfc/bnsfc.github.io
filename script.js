/* BNS FOOTBALL CLUB — script.js
   Semua isi situs (teks, logo, favicon, foto, jadwal, produk) dibaca dari Google Spreadsheet.
   Ubah mode ke "sheets" dan isi sheetId + apiKey setelah spreadsheet siap.
   Bagian yang kosong / gagal dimuat otomatis memakai data dummy di bawah. */
const CONFIG = {
  mode: "sheets",                // "dummy" = data contoh | "sheets" = baca Google Sheets API v4
  sheetId: "1z7wVPJUmKQL6nnTkhtilKTDsgfQ9rbhmHc1vJsA0GH8",
  apiKey: "AIzaSyDGA6IQktPU_ogyeP3lMtOLmqgEd1uwkVU",         // batasi key: HTTP referrer = domain situs, API = Google Sheets API saja
  tabs: { settings:"settings", matches:"matches", lineups:"lineups", players:"players", management:"management",
          sponsors:"sponsors", gallery:"gallery", shop:"shop", honors:"honors" }
};
const DUMMY = {
 "settings": {
  "club_name": "BNS FOOTBALL CLUB",
  "short_name": "BNS FC",
  "tagline": "Klub sepak bola dari Rongga, Bandung Barat. Terbuka untuk tarkam, trofeo, dan laga persahabatan.",
  "est_year": "2014",
  "logo_url": "https://raw.githubusercontent.com/fzachmd/logo-assets/refs/heads/main/bns.svg",
  "favicon_url": "",
  "hero_image": "",
  "primary_color": "#2250F5",
  "whatsapp": "6283820283874",
  "email": "Porbnsfc@gmail.com",
  "phone": "+62 838-2028-3874",
  "address": "Jln. Nurussalam, Kp. Nurussalam, Sukamanah, Rongga, Bandung Barat, Jawa Barat 40556",
  "instagram": "",
  "youtube": "",
  "tiktok": "",
  "facebook": ""
 },
 "matches": [
  {
   "id": "M001",
   "datetime": "2026-09-12 16:00",
   "competition": "Persahabatan Agustusan",
   "category": "Friendly",
   "home": "BNS FOOTBALL CLUB",
   "away": "Rajawali Selatan",
   "opponent_logo": "",
   "venue": "Lapangan Sukamanah",
   "score_home": 2,
   "score_away": 0,
   "scorers_home": "Naufal Hakim 18';Daffa Maulana 55'",
   "scorers_away": "",
   "opponent_coach": "Dedi Kurnia"
  },
  {
   "id": "M002",
   "datetime": "2026-09-19",
   "competition": "Trofeo Bandung Barat · Grup A",
   "category": "Trofeo",
   "home": "Persada Rongga",
   "away": "BNS FOOTBALL CLUB",
   "opponent_logo": "",
   "venue": "Stadion Rongga",
   "score_home": 1,
   "score_away": 1,
   "scorers_home": "Asep Ruhiyat 40'",
   "scorers_away": "Rizky Firmansyah 77'",
   "opponent_coach": "Yayat Supriatna"
  },
  {
   "id": "M003",
   "datetime": "2026-09-26 15:30",
   "competition": "Piala Kampung Sukamanah · Grup",
   "category": "Tarkam",
   "home": "BNS FOOTBALL CLUB",
   "away": "Bintang Timur FC",
   "opponent_logo": "",
   "venue": "Lapangan Sukamanah",
   "score_home": 3,
   "score_away": 1,
   "scorers_home": "Naufal Hakim 10';Naufal Hakim 33';Fajar Ramadhan 62'",
   "scorers_away": "Eko Prasetyo 80'",
   "opponent_coach": "Rudi Hartono"
  },
  {
   "id": "M004",
   "datetime": "2026-10-03 16:00",
   "competition": "Persahabatan Antar Desa",
   "category": "Friendly",
   "home": "Cipongkor Putra",
   "away": "BNS FOOTBALL CLUB",
   "opponent_logo": "",
   "venue": "Lapangan Cipongkor",
   "score_home": 2,
   "score_away": 0,
   "scorers_home": "Iwan Setiawan 22';Iwan Setiawan 67'",
   "scorers_away": "",
   "opponent_coach": "Maman Suherman"
  },
  {
   "id": "M005",
   "datetime": "2026-10-10 15:30",
   "competition": "Piala Kampung Sukamanah · Perempat Final",
   "category": "Tarkam",
   "home": "BNS FOOTBALL CLUB",
   "away": "Garuda Muda FC",
   "opponent_logo": "",
   "venue": "Lapangan Sukamanah",
   "score_home": 4,
   "score_away": 0,
   "scorers_home": "Naufal Hakim 12';Daffa Maulana 38';Rizky Firmansyah 59';Ilham Akbar 81'",
   "scorers_away": "",
   "opponent_coach": "Tono Sutanto"
  },
  {
   "id": "M006",
   "datetime": "2026-10-17 16:00",
   "competition": "Trofeo Bandung Barat · Grup A",
   "category": "Trofeo",
   "home": "BNS FOOTBALL CLUB",
   "away": "Sukamanah United",
   "opponent_logo": "",
   "venue": "Stadion Rongga",
   "score_home": 2,
   "score_away": 1,
   "scorers_home": "Rizky Firmansyah 29';Naufal Hakim 74'",
   "scorers_away": "Joko Priyanto 51'",
   "opponent_coach": "Agus Salim"
  },
  {
   "id": "M007",
   "datetime": "2026-10-24 16:00",
   "competition": "Persahabatan Akhir Pekan",
   "category": "Friendly",
   "home": "Rajawali Selatan",
   "away": "BNS FOOTBALL CLUB",
   "opponent_logo": "",
   "venue": "Lapangan Rajawali",
   "score_home": 1,
   "score_away": 1,
   "scorers_home": "Dani Kusuma 35'",
   "scorers_away": "Daffa Maulana 88'",
   "opponent_coach": "Dedi Kurnia"
  },
  {
   "id": "M008",
   "datetime": "2026-11-01 16:00",
   "competition": "Trofeo Bandung Barat · Semifinal",
   "category": "Trofeo",
   "home": "BNS FOOTBALL CLUB",
   "away": "Persada Rongga",
   "opponent_logo": "",
   "venue": "Stadion Rongga",
   "score_home": 2,
   "score_away": 1,
   "scorers_home": "Naufal Hakim 24';Rizky Firmansyah 71' (P)",
   "scorers_away": "Asep Ruhiyat 56'",
   "opponent_coach": "Yayat Supriatna"
  },
  {
   "id": "M009",
   "datetime": "2026-11-14 16:00",
   "competition": "Persahabatan Akhir Pekan",
   "category": "Friendly",
   "home": "BNS FOOTBALL CLUB",
   "away": "Cipongkor Putra",
   "opponent_logo": "",
   "venue": "Lapangan Sukamanah",
   "score_home": "",
   "score_away": "",
   "scorers_home": "",
   "scorers_away": "",
   "opponent_coach": "Maman Suherman"
  },
  {
   "id": "M010",
   "datetime": "2026-11-22 15:30",
   "competition": "Piala Desa Sukamanah · Babak Grup",
   "category": "Tarkam",
   "home": "Bintang Timur FC",
   "away": "BNS FOOTBALL CLUB",
   "opponent_logo": "",
   "venue": "Lapangan Bintang Timur",
   "score_home": "",
   "score_away": "",
   "scorers_home": "",
   "scorers_away": "",
   "opponent_coach": "Rudi Hartono"
  },
  {
   "id": "M011",
   "datetime": "2026-12-05 15:00",
   "competition": "Trofeo Bandung Barat · Final",
   "category": "Trofeo",
   "home": "BNS FOOTBALL CLUB",
   "away": "Garuda Muda FC",
   "opponent_logo": "",
   "venue": "Stadion Rongga",
   "score_home": "",
   "score_away": "",
   "scorers_home": "",
   "scorers_away": "",
   "opponent_coach": "Tono Sutanto"
  }
 ],
 "lineups": [
  {
   "match_id": "M008",
   "team": "BNS FOOTBALL CLUB",
   "name": "Rafael Aditya",
   "number": 1,
   "position": "Kiper",
   "role": "starter",
   "rating": 7.6,
   "sub_minute": "",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "BNS FOOTBALL CLUB",
   "name": "Kevin Mahendra",
   "number": 2,
   "position": "Bek",
   "role": "starter",
   "rating": 6.7,
   "sub_minute": "",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "BNS FOOTBALL CLUB",
   "name": "Reza Pahlevi",
   "number": 3,
   "position": "Bek",
   "role": "starter",
   "rating": 6.9,
   "sub_minute": "",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "BNS FOOTBALL CLUB",
   "name": "Bima Saputra",
   "number": 5,
   "position": "Bek",
   "role": "starter",
   "rating": 7.3,
   "sub_minute": "",
   "goals": 0,
   "card": "kuning",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "BNS FOOTBALL CLUB",
   "name": "Dimas Pratama",
   "number": 4,
   "position": "Bek",
   "role": "starter",
   "rating": 6.4,
   "sub_minute": "90+6",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "BNS FOOTBALL CLUB",
   "name": "Ardiansyah Putra",
   "number": 6,
   "position": "Gelandang",
   "role": "starter",
   "rating": 6.5,
   "sub_minute": "86",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "BNS FOOTBALL CLUB",
   "name": "Fajar Ramadhan",
   "number": 8,
   "position": "Gelandang",
   "role": "starter",
   "rating": 6.8,
   "sub_minute": "",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "BNS FOOTBALL CLUB",
   "name": "Rizky Firmansyah",
   "number": 10,
   "position": "Gelandang",
   "role": "starter",
   "rating": 8.1,
   "sub_minute": "",
   "goals": 1,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "BNS FOOTBALL CLUB",
   "name": "Ilham Akbar",
   "number": 7,
   "position": "Penyerang",
   "role": "starter",
   "rating": 5.8,
   "sub_minute": "65",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "BNS FOOTBALL CLUB",
   "name": "Naufal Hakim",
   "number": 9,
   "position": "Penyerang",
   "role": "starter",
   "rating": 7.8,
   "sub_minute": "",
   "goals": 1,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "BNS FOOTBALL CLUB",
   "name": "Daffa Maulana",
   "number": 11,
   "position": "Penyerang",
   "role": "starter",
   "rating": 7.5,
   "sub_minute": "",
   "goals": 0,
   "card": "kuning",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "BNS FOOTBALL CLUB",
   "name": "Rendi Pratama",
   "number": 14,
   "position": "Gelandang",
   "role": "sub",
   "rating": 5.8,
   "sub_minute": "86",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "BNS FOOTBALL CLUB",
   "name": "Mario Mahesa",
   "number": 15,
   "position": "Penyerang",
   "role": "sub",
   "rating": 5.2,
   "sub_minute": "65",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "BNS FOOTBALL CLUB",
   "name": "Dani Setiawan",
   "number": 16,
   "position": "Bek",
   "role": "sub",
   "rating": 6.1,
   "sub_minute": "90+6",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "BNS FOOTBALL CLUB",
   "name": "Kemal Maulana",
   "number": 17,
   "position": "Gelandang",
   "role": "sub",
   "rating": null,
   "sub_minute": "",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "BNS FOOTBALL CLUB",
   "name": "Agus Wijaya",
   "number": 12,
   "position": "Kiper",
   "role": "sub",
   "rating": null,
   "sub_minute": "",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "BNS FOOTBALL CLUB",
   "name": "Kiki Darmawan",
   "number": 22,
   "position": "Kiper",
   "role": "sub",
   "rating": null,
   "sub_minute": "",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "Persada Rongga",
   "name": "Dodi Hermawan",
   "number": 1,
   "position": "Kiper",
   "role": "starter",
   "rating": 5.9,
   "sub_minute": "",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "Persada Rongga",
   "name": "Yoga Permana",
   "number": 2,
   "position": "Bek",
   "role": "starter",
   "rating": 5.6,
   "sub_minute": "",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "Persada Rongga",
   "name": "Ujang Saepudin",
   "number": 4,
   "position": "Bek",
   "role": "starter",
   "rating": 5.4,
   "sub_minute": "",
   "goals": 0,
   "card": "kuning",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "Persada Rongga",
   "name": "Hendri Gunadi",
   "number": 5,
   "position": "Bek",
   "role": "starter",
   "rating": 5.7,
   "sub_minute": "",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "Persada Rongga",
   "name": "Ridwan Maulid",
   "number": 3,
   "position": "Bek",
   "role": "starter",
   "rating": 5.3,
   "sub_minute": "70",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "Persada Rongga",
   "name": "Asep Ruhiyat",
   "number": 10,
   "position": "Gelandang",
   "role": "starter",
   "rating": 7.2,
   "sub_minute": "",
   "goals": 1,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "Persada Rongga",
   "name": "Taufik Hidayat",
   "number": 6,
   "position": "Gelandang",
   "role": "starter",
   "rating": 5.5,
   "sub_minute": "",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "Persada Rongga",
   "name": "Wahyu Nugraha",
   "number": 8,
   "position": "Gelandang",
   "role": "starter",
   "rating": 5.4,
   "sub_minute": "60",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "Persada Rongga",
   "name": "Dede Kosasih",
   "number": 7,
   "position": "Gelandang",
   "role": "starter",
   "rating": 5.6,
   "sub_minute": "",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "Persada Rongga",
   "name": "Lukman Hakim",
   "number": 9,
   "position": "Penyerang",
   "role": "starter",
   "rating": 5.1,
   "sub_minute": "",
   "goals": 0,
   "card": "kuning",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "Persada Rongga",
   "name": "Rangga Aditya",
   "number": 11,
   "position": "Penyerang",
   "role": "starter",
   "rating": 5.0,
   "sub_minute": "75",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "Persada Rongga",
   "name": "Imam Fauzi",
   "number": 14,
   "position": "Gelandang",
   "role": "sub",
   "rating": 5.8,
   "sub_minute": "60",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "Persada Rongga",
   "name": "Fikri Alamsyah",
   "number": 15,
   "position": "Bek",
   "role": "sub",
   "rating": 5.5,
   "sub_minute": "70",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "Persada Rongga",
   "name": "Bayu Segara",
   "number": 17,
   "position": "Penyerang",
   "role": "sub",
   "rating": 5.2,
   "sub_minute": "75",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "Persada Rongga",
   "name": "Yusuf Kholik",
   "number": 12,
   "position": "Kiper",
   "role": "sub",
   "rating": null,
   "sub_minute": "",
   "goals": 0,
   "card": "",
   "photo": ""
  },
  {
   "match_id": "M008",
   "team": "Persada Rongga",
   "name": "Gilang Ramadan",
   "number": 18,
   "position": "Gelandang",
   "role": "sub",
   "rating": null,
   "sub_minute": "",
   "goals": 0,
   "card": "",
   "photo": ""
  }
 ],
 "players": [
  {
   "name": "Rafael Aditya",
   "position": "Kiper",
   "number": 1,
   "photo": "",
   "goals": 0,
   "assists": 0,
   "appearances": 8
  },
  {
   "name": "Agus Wijaya",
   "position": "Kiper",
   "number": 12,
   "photo": "",
   "goals": 0,
   "assists": 0,
   "appearances": 2
  },
  {
   "name": "Kiki Darmawan",
   "position": "Kiper",
   "number": 22,
   "photo": "",
   "goals": 0,
   "assists": 0,
   "appearances": 1
  },
  {
   "name": "Kevin Mahendra",
   "position": "Bek",
   "number": 2,
   "photo": "",
   "goals": 0,
   "assists": 1,
   "appearances": 8
  },
  {
   "name": "Reza Pahlevi",
   "position": "Bek",
   "number": 3,
   "photo": "",
   "goals": 0,
   "assists": 0,
   "appearances": 7
  },
  {
   "name": "Dimas Pratama",
   "position": "Bek",
   "number": 4,
   "photo": "",
   "goals": 1,
   "assists": 1,
   "appearances": 8
  },
  {
   "name": "Bima Saputra",
   "position": "Bek",
   "number": 5,
   "photo": "",
   "goals": 0,
   "assists": 0,
   "appearances": 8
  },
  {
   "name": "Dani Setiawan",
   "position": "Bek",
   "number": 16,
   "photo": "",
   "goals": 0,
   "assists": 0,
   "appearances": 5
  },
  {
   "name": "Ardiansyah Putra",
   "position": "Gelandang",
   "number": 6,
   "photo": "",
   "goals": 2,
   "assists": 3,
   "appearances": 8
  },
  {
   "name": "Fajar Ramadhan",
   "position": "Gelandang",
   "number": 8,
   "photo": "",
   "goals": 3,
   "assists": 2,
   "appearances": 8
  },
  {
   "name": "Rizky Firmansyah",
   "position": "Gelandang",
   "number": 10,
   "photo": "",
   "goals": 5,
   "assists": 4,
   "appearances": 8
  },
  {
   "name": "Rendi Pratama",
   "position": "Gelandang",
   "number": 14,
   "photo": "",
   "goals": 0,
   "assists": 1,
   "appearances": 6
  },
  {
   "name": "Kemal Maulana",
   "position": "Gelandang",
   "number": 17,
   "photo": "",
   "goals": 0,
   "assists": 0,
   "appearances": 4
  },
  {
   "name": "Ilham Akbar",
   "position": "Penyerang",
   "number": 7,
   "photo": "",
   "goals": 2,
   "assists": 1,
   "appearances": 7
  },
  {
   "name": "Naufal Hakim",
   "position": "Penyerang",
   "number": 9,
   "photo": "",
   "goals": 8,
   "assists": 2,
   "appearances": 8
  },
  {
   "name": "Daffa Maulana",
   "position": "Penyerang",
   "number": 11,
   "photo": "",
   "goals": 4,
   "assists": 3,
   "appearances": 8
  },
  {
   "name": "Mario Mahesa",
   "position": "Penyerang",
   "number": 15,
   "photo": "",
   "goals": 1,
   "assists": 0,
   "appearances": 5
  }
 ],
 "management": [
  {
   "name": "Andika Prasetyo",
   "role": "Ketua Umum",
   "photo": "",
   "order": 1
  },
  {
   "name": "Budi Santoso",
   "role": "Manajer Tim",
   "photo": "",
   "order": 2
  },
  {
   "name": "Marco Fernandes",
   "role": "Pelatih Kepala",
   "photo": "",
   "order": 3
  },
  {
   "name": "Hendra Wijaya",
   "role": "Asisten Pelatih",
   "photo": "",
   "order": 4
  },
  {
   "name": "Yusuf Ramadhan",
   "role": "Sekretaris",
   "photo": "",
   "order": 5
  },
  {
   "name": "Rina Mahardika",
   "role": "Tim Medis",
   "photo": "",
   "order": 6
  }
 ],
 "sponsors": [
  {
   "name": "NEXORA",
   "tier": "Sponsor utama",
   "logo": "",
   "link": "",
   "order": 1
  },
  {
   "name": "STRIDE",
   "tier": "Apparel resmi",
   "logo": "",
   "link": "",
   "order": 2
  },
  {
   "name": "VOLT+",
   "tier": "Mitra energi",
   "logo": "",
   "link": "",
   "order": 3
  },
  {
   "name": "BANK ARTA",
   "tier": "Mitra resmi",
   "logo": "",
   "link": "",
   "order": 4
  },
  {
   "name": "KLINIK MEDIKA",
   "tier": "Mitra resmi",
   "logo": "",
   "link": "",
   "order": 5
  },
  {
   "name": "URBANFOOD",
   "tier": "Mitra resmi",
   "logo": "",
   "link": "",
   "order": 6
  }
 ],
 "gallery": [
  {
   "title": "Pertandingan di Stadion Rongga",
   "image": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1400&q=80",
   "order": 1
  },
  {
   "title": "Aksi pemain di tengah lapangan",
   "image": "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1400&q=80",
   "order": 2
  },
  {
   "title": "Latihan rutin akhir pekan",
   "image": "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1400&q=80",
   "order": 3
  },
  {
   "title": "Menguasai bola",
   "image": "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1400&q=80",
   "order": 4
  },
  {
   "title": "Stadion sebelum kick-off",
   "image": "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=1400&q=80",
   "order": 5
  }
 ],
 "shop": [
  {
   "id": "P01",
   "name": "Jersey Home 2026/27",
   "category": "Jersey",
   "price": 185000,
   "old_price": 225000,
   "image": "",
   "sizes": "S;M;L;XL;XXL",
   "stock": 24,
   "badge": "Terlaris",
   "description": "Bahan dri-fit ringan, sablon tahan cuci."
  },
  {
   "id": "P02",
   "name": "Jersey Away 2026/27",
   "category": "Jersey",
   "price": 185000,
   "old_price": "",
   "image": "",
   "sizes": "S;M;L;XL;XXL",
   "stock": 18,
   "badge": "Baru",
   "description": "Warna putih dengan aksen biru."
  },
  {
   "id": "P03",
   "name": "Jersey Kiper 2026/27",
   "category": "Jersey",
   "price": 195000,
   "old_price": "",
   "image": "",
   "sizes": "M;L;XL",
   "stock": 0,
   "badge": "",
   "description": "Lengan panjang, bantalan siku."
  },
  {
   "id": "P04",
   "name": "Jersey Latihan",
   "category": "Jersey",
   "price": 145000,
   "old_price": 165000,
   "image": "",
   "sizes": "S;M;L;XL",
   "stock": 5,
   "badge": "",
   "description": "Untuk latihan dan nonton bareng."
  },
  {
   "id": "P05",
   "name": "Syal Suporter BNS FC",
   "category": "Merchandise",
   "price": 65000,
   "old_price": "",
   "image": "",
   "sizes": "",
   "stock": 40,
   "badge": "",
   "description": "Rajut dua sisi, panjang 140 cm."
  },
  {
   "id": "P06",
   "name": "Kaos Suporter",
   "category": "Merchandise",
   "price": 95000,
   "old_price": "",
   "image": "",
   "sizes": "S;M;L;XL",
   "stock": 30,
   "badge": "",
   "description": "Katun combed 30s."
  }
 ],
 "honors": [
  {
   "year": "2026",
   "title": "Piala Kampung Sukamanah",
   "placing": "Juara 1",
   "note": "Turnamen antar kampung se-Rongga"
  },
  {
   "year": "2025",
   "title": "Trofeo Bandung Barat",
   "placing": "Runner-up",
   "note": "Kalah adu penalti di final"
  },
  {
   "year": "2024",
   "title": "Turnamen 17 Agustus Kecamatan Rongga",
   "placing": "Juara 3",
   "note": ""
  },
  {
   "year": "2023",
   "title": "Tarkam Cup Cipongkor",
   "placing": "Juara 1",
   "note": "Tanpa kekalahan"
  }
 ]
};

/* ---------- Helper ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const num = v => { const n = Number(String(v ?? "").trim().replace(",", ".")); return Number.isFinite(n) ? n : 0; };
const has = v => v !== "" && v !== null && v !== undefined;
const list = v => String(v ?? "").split(/[;|]/).map(s => s.trim()).filter(Boolean);
const rupiah = n => "Rp " + Number(n).toLocaleString("id-ID");
const TZ = "Asia/Jakarta";
const fmt = (d, o) => new Intl.DateTimeFormat("id-ID", { timeZone: TZ, ...o }).format(d);
const dateLong = d => fmt(d, { weekday:"long", day:"numeric", month:"long", year:"numeric" });
const dateShort = d => fmt(d, { day:"numeric", month:"short" });
const timeStr = d => fmt(d, { hour:"2-digit", minute:"2-digit", hourCycle:"h23" }).replace(".", ":") + " WIB";
const sameClub = (a, b) => String(a).trim().toUpperCase() === String(b).trim().toUpperCase();

// Terima: "2026-11-14 16:00", "4/13/2026 14:30" (bulan/tanggal/tahun), ISO, atau serial tanggal Google Sheets. Tanpa zona waktu = WIB.
function toDate(v) {
  if (!has(v)) return null;
  if (typeof v === "number" || /^\d{4,6}(\.\d+)?$/.test(String(v).trim())) {
    const n = Number(v); if (n < 20000) return null;
    return new Date(Math.round((n - 25569) * 864e5) - 7 * 36e5);
  }
  const s = String(v).trim(); let m;
  if (/(Z|[+-]\d{2}:?\d{2})$/.test(s) && /T/.test(s)) { const d = new Date(s); return isNaN(d) ? null : d; }
  if ((m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?:[T\s]+(\d{1,2})[:.](\d{2}))?/))) return new Date(Date.UTC(+m[1], m[2]-1, +m[3], (+m[4]||0) - 7, +m[5]||0));
  if ((m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s+(\d{1,2})[:.](\d{2}))?/))) {
    // Format bergaris miring: bulan/tanggal/tahun (seperti data BNS1–BNS33). Jika angka pertama > 12, dianggap tanggal/bulan/tahun.
    const dmy = +m[1] > 12, dd = dmy ? +m[1] : +m[2], mm = dmy ? +m[2] : +m[1];
    return new Date(Date.UTC(+m[3], mm - 1, dd, (+m[4]||0) - 7, +m[5]||0));
  }
  return null;
}
function driveURL(url) {
  const u = String(url || "").trim();
  const m = u.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:export=\w+&)?id=)([\w-]+)/);
  return m ? `https://lh3.googleusercontent.com/d/${m[1]}` : u;
}
const initials = (n = "") => String(n).split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
const posKey = v => {
  const s = String(v || "").trim().toLowerCase();
  const map = { kiper:"Kiper", gk:"Kiper", "penjaga gawang":"Kiper", bek:"Bek", df:"Bek", gelandang:"Gelandang", mf:"Gelandang", penyerang:"Penyerang", fw:"Penyerang", striker:"Penyerang" };
  return map[s] || "Gelandang";
};
const POS_TAG = { Kiper:"GK", Bek:"DEF", Gelandang:"MID", Penyerang:"FWD" };
const splitName = n => { const p = String(n).trim().split(/\s+/); return p.length > 1 ? [p.slice(0, -1).join(" "), p[p.length - 1]] : ["", p[0] || ""]; };

/* ---------- Gambar pengganti (dibuat otomatis kalau URL kosong / gagal dimuat) ---------- */
const svgURI = s => "data:image/svg+xml;utf8," + encodeURIComponent(s);
const PALETTE = ["#0E7C66","#C2410C","#7C3AED","#B91C1C","#0369A1","#A16207","#BE185D","#4D7C0F"];
function hashColor(s) { let h = 0; for (const c of String(s)) h = (h * 31 + c.charCodeAt(0)) >>> 0; return PALETTE[h % PALETTE.length]; }
const FALLBACK = {
  crest: name => svgURI(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><path d="M6 6h88v56c0 28-22 42-44 52C28 104 6 90 6 62z" fill="#fff"/><path d="M12 12h76v50c0 24-18 36-38 44-20-8-38-20-38-44z" fill="${hashColor(name)}"/><text x="50" y="68" text-anchor="middle" font-family="Arial,sans-serif" font-weight="800" font-size="34" fill="#fff">${esc(initials(String(name).replace(/ FC$/i, "")))}</text></svg>`),
  person: () => svgURI(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><rect width="300" height="400" fill="#16213f"/><circle cx="150" cy="128" r="58" fill="#8ea2cf"/><path d="M40 400c0-92 46-136 110-136s110 44 110 136z" fill="#2250F5"/><path d="M110 268l40 34 40-34" fill="none" stroke="#fff" stroke-width="10"/></svg>`),
  photo: () => svgURI(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 90"><rect width="160" height="90" fill="#16213f"/><circle cx="80" cy="45" r="14" fill="none" stroke="#3b5bb5" stroke-width="3"/></svg>`),
  product: () => svgURI(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700"><rect width="600" height="700" fill="#12141C"/><path d="M170 40h260l130 110-60 40-60-70v530H160V120l-60 70-60-40z" fill="#2250F5"/></svg>`),
  logo: () => svgURI(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240"><path d="M20 20h160v110c0 52-40 80-80 96-40-16-80-44-80-96z" fill="#2250F5"/><text x="100" y="124" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="54" fill="#fff">BNS</text></svg>`)
};
function img(url, kind, name = "", alt = "", cls = "") {
  const src = has(url) && String(url).trim() ? driveURL(url) : FALLBACK[kind](name);
  // logo klub sendiri (navy) ditandai supaya bisa ditampilkan putih di latar gelap; logo lawan tidak disentuh
  const mine = kind === "crest" && has(url) && String(url).trim() && String(url).trim() === String(data.settings.logo_url || "").trim();
  if (mine) cls = (cls + " is-club").trim();
  return `<img class="${cls}" src="${esc(src)}" alt="${esc(alt)}" data-fb="${kind}" data-name="${esc(name)}" loading="lazy" decoding="async">`;
}
document.addEventListener("error", e => {
  const t = e.target;
  if (t && t.tagName === "IMG" && t.dataset.fb && !t.dataset.done) { t.dataset.done = "1"; t.classList.remove("is-club"); t.src = FALLBACK[t.dataset.fb](t.dataset.name); }
}, true);

/* ---------- Data ---------- */
let data = JSON.parse(JSON.stringify(DUMMY));
const loaded = new Set();
const club = () => data.settings.club_name || "BNS FOOTBALL CLUB";
const isClub = n => sameClub(n, club());
const clubLogo = () => data.settings.logo_url;

function sheetRows(values) {
  if (!values || values.length < 2) return [];
  const head = values[0].map(h => String(h).trim().toLowerCase().replace(/\s+/g, "_"));
  return values.slice(1).filter(r => r.some(v => String(v).trim() !== ""))
    .map(r => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ""])));
}
const s = v => String(v ?? "").trim();
// Nama yang ditulis HURUF BESAR SEMUA di spreadsheet ditampilkan rapi (Huruf Awal Kapital). Yang sudah campuran huruf dibiarkan.
const KEEP_UP = new Set(["BNS","FC","SMK","SMP","SMA","SD","PT","CV","DKM","UD","PLN","FK","PS","PSM","II","III","IV","RT","RW"]);
const nice = v => {
  const t = s(v);
  if (!t || t !== t.toUpperCase() || !/[A-Z]/.test(t)) return t;
  return t.toLowerCase().replace(/(^|[\s.;,(\/-])([a-z]+)/g, (m, p, w) => p + (KEEP_UP.has(w.toUpperCase()) ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1)));
};
const MAP = {
  settings: rows => Object.fromEntries(rows.filter(r => r.key).map(r => [s(r.key), s(r.value)])),
  matches: rows => rows.filter(r => r.home && r.away).map((r, i) => ({
    id: s(r.id) || "M" + (i + 1), datetime: s(r.datetime), competition: s(r.competition), category: s(r.category) || "Friendly",
    home: nice(r.home), away: nice(r.away), opponent_logo: s(r.opponent_logo), venue: s(r.venue),
    score_home: has(r.score_home) && s(r.score_home) !== "" ? num(r.score_home) : "", score_away: has(r.score_away) && s(r.score_away) !== "" ? num(r.score_away) : "",
    scorers_home: nice(r.scorers_home), scorers_away: nice(r.scorers_away), opponent_coach: s(r.opponent_coach), _raw: r.datetime
  })),
  lineups: rows => rows.filter(r => r.name && r.match_id).map(r => ({
    match_id: s(r.match_id), team: nice(r.team), name: nice(r.name), number: s(r.number), position: posKey(r.position),
    role: /^(sub|cadangan|bench)/i.test(s(r.role)) ? "sub" : "starter", rating: has(r.rating) && s(r.rating) !== "" ? num(r.rating) : null,
    sub_minute: s(r.sub_minute), goals: num(r.goals), assists: num(r.assists), card: s(r.card).toLowerCase(), photo: s(r.photo)
  })),
  players: rows => rows.filter(r => r.name).map(r => ({ name: nice(r.name), position: posKey(r.position), number: s(r.number), photo: s(r.photo), goals: num(r.goals), assists: num(r.assists), appearances: num(r.appearances) })),
  management: rows => rows.filter(r => r.name).map(r => ({ name: nice(r.name), role: s(r.role), photo: s(r.photo), order: num(r.order) })),
  sponsors: rows => rows.filter(r => r.name).map(r => ({ name: s(r.name), tier: s(r.tier), logo: s(r.logo), link: s(r.link), order: num(r.order) })),
  gallery: rows => rows.filter(r => r.image).map(r => ({ title: s(r.title), image: s(r.image), order: num(r.order) })),
  shop: rows => rows.filter(r => r.name).map((r, i) => ({ id: s(r.id) || "P" + (i + 1), name: s(r.name), category: s(r.category), price: num(r.price), old_price: num(r.old_price), image: s(r.image), sizes: s(r.sizes), stock: has(r.stock) && s(r.stock) !== "" ? num(r.stock) : 99, badge: s(r.badge), description: s(r.description) })),
  honors: rows => rows.filter(r => r.title).map(r => ({ year: s(r.year), title: s(r.title), placing: s(r.placing), note: s(r.note) }))
};

async function loadSheets() {
  const { sheetId, apiKey, tabs } = CONFIG;
  if (!sheetId || !apiKey || /^ISI_/.test(sheetId) || /^ISI_/.test(apiKey)) { console.warn("Google Sheets: sheetId/apiKey belum diisi. Memakai data dummy."); return; }
  const keys = Object.keys(tabs), result = {};
  const base = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(sheetId)}/values`;
  const qs = `valueRenderOption=UNFORMATTED_VALUE&key=${encodeURIComponent(apiKey)}`;
  try {
    const r = await fetch(`${base}:batchGet?${keys.map(k => "ranges=" + encodeURIComponent(tabs[k])).join("&")}&${qs}`);
    if (!r.ok) throw new Error("HTTP " + r.status);
    (await r.json()).valueRanges.forEach((vr, i) => result[keys[i]] = vr.values);
  } catch (err) {
    console.warn("batchGet gagal, mencoba per tab:", err.message, "(cek: spreadsheet dibagikan 'Siapa saja yang memiliki link', Sheets API aktif, nama tab sesuai)");
    await Promise.all(keys.map(async k => {
      try { const r = await fetch(`${base}/${encodeURIComponent(tabs[k])}?${qs}`); if (!r.ok) throw new Error("HTTP " + r.status); result[k] = (await r.json()).values; }
      catch (e) { console.warn(`Tab "${tabs[k]}" tidak dimuat:`, e.message); }
    }));
  }
  keys.forEach(k => {
    const items = MAP[k](sheetRows(result[k]));
    if (k === "settings") { if (Object.keys(items).length) { data.settings = { ...DUMMY.settings, ...Object.fromEntries(Object.entries(items).filter(([, v]) => v !== "")) }; loaded.add(k); } }
    else if (items.length) { data[k] = items; loaded.add(k); }
  });
}
function prepare() {
  data.matches.forEach(m => {
    m.date = toDate(m.datetime); m.time = m.date ? m.date.getTime() : 0;
    m.played = has(m.score_home) && has(m.score_away) && m.score_home !== "" && m.score_away !== "";
    m.bnsHome = isClub(m.home);
    m.homeLogo = m.bnsHome ? clubLogo() : m.opponent_logo;
    m.awayLogo = m.bnsHome ? m.opponent_logo : clubLogo();
    m.opponent = m.bnsHome ? m.away : m.home;
    m.oppLogo = m.opponent_logo;
  });
  tallyPlayerStats();
}

/* ---------- Gol, assist, penampilan pemain: dijumlah otomatis dari tab lineups ---------- */
// Hanya laga yang sudah selesai (ada skor). Starter dihitung 1 penampilan; cadangan dihitung jika sudah masuk (sub_minute terisi).
// Angka di tab players tetap dipakai bila lebih besar (data manual / musim lalu tidak hilang).
function tallyPlayerStats() {
  const done = new Set(data.matches.filter(m => m.played).map(m => m.id));
  data.players.forEach(p => {
    const rows = data.lineups.filter(l => done.has(l.match_id) && isClub(l.team) &&
      (sameClub(l.name, p.name) || (String(l.number) !== "" && String(l.number) === String(p.number) && !data.players.some(q => q !== p && sameClub(q.name, l.name)))));
    const goals = rows.reduce((t, l) => t + l.goals, 0);
    const assists = rows.reduce((t, l) => t + (l.assists || 0), 0);
    const apps = rows.filter(l => l.role === "starter" || String(l.sub_minute).trim() !== "").length;
    p.goals = Math.max(p.goals, goals);
    p.assists = Math.max(p.assists, assists);
    p.appearances = Math.max(p.appearances, apps);
  });
}

/* ---------- Statistik performa (dihitung otomatis dari tab matches) ---------- */
function outcome(m) {
  const gf = m.bnsHome ? m.score_home : m.score_away, ga = m.bnsHome ? m.score_away : m.score_home;
  return { gf, ga, r: gf > ga ? "M" : gf < ga ? "K" : "S" };
}
function computeStats() {
  const played = data.matches.filter(m => m.played && (isClub(m.home) || isClub(m.away))).sort((a, b) => b.time - a.time);
  const t = { p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, cs: 0 }, cats = {};
  played.forEach(m => {
    const o = outcome(m); t.p++; t.gf += o.gf; t.ga += o.ga; if (o.ga === 0) t.cs++;
    t[o.r === "M" ? "w" : o.r === "S" ? "d" : "l"]++;
    const c = cats[m.category] ||= { p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0 };
    c.p++; c.gf += o.gf; c.ga += o.ga; c[o.r === "M" ? "w" : o.r === "S" ? "d" : "l"]++;
  });
  return { t, cats, form: played.slice(0, 5).map(m => ({ ...outcome(m), m })), played };
}

/* ---------- Render: settings, header, footer ---------- */
function renderSettings() {
  const st = data.settings;
  document.title = `${st.club_name} — Situs Resmi`;
  $("meta[name=description]").content = `Situs resmi ${st.club_name}: jadwal, hasil, statistik, skuad, jersey, dan ajakan bertanding.`;
  if (st.primary_color) document.documentElement.style.setProperty("--blue", st.primary_color);
  const fav = $("#favicon"); if (st.favicon_url) { fav.href = driveURL(st.favicon_url); fav.removeAttribute("type"); }
  $$("[data-club]").forEach(el => el.textContent = st.club_name);
  $$("[data-short]").forEach(el => el.textContent = st.short_name || st.club_name);
  $$("[data-est]").forEach(el => el.textContent = st.est_year ? `Berdiri ${st.est_year}` : "");
  $$("[data-logo]").forEach(el => { el.innerHTML = img(st.logo_url, "logo", st.club_name, `Logo ${st.club_name}`); });
  $("#tagline").textContent = st.tagline || "";
  const wa = String(st.whatsapp || "").replace(/\D/g, "");
  $$("[data-wa]").forEach(a => a.href = `https://wa.me/${wa}`);
  $("#footAddress").textContent = st.address || "-";
  $("#footEmail").textContent = st.email || "-"; $("#footEmail").href = st.email ? `mailto:${st.email}` : "#";
  $("#footPhone").textContent = st.phone || "-"; $("#footPhone").href = wa ? `https://wa.me/${wa}` : "#";
  $("#socials").innerHTML = [["instagram", "Instagram"], ["youtube", "YouTube"], ["tiktok", "TikTok"], ["facebook", "Facebook"]]
    .filter(([k]) => st[k]).map(([k, n]) => `<a href="${esc(st[k])}" target="_blank" rel="noopener">${n}</a>`).join("") || "";
  $("#year").textContent = new Date().getFullYear();
}

/* ---------- Render: hero & hitung mundur ---------- */
const nextMatch = () => data.matches.filter(m => !m.played && m.time > Date.now()).sort((a, b) => a.time - b.time)[0];
let heroId = null;
function renderHero() {
  const { t } = computeStats(), m = nextMatch(), box = $("#nextMatch");
  heroId = m ? m.id : null;
  $("#recordLine").textContent = t.p ? `${t.p} laga musim ini: ${t.w} menang, ${t.d} seri, ${t.l} kalah` : "";
  if (!m) {
    box.innerHTML = `<p class="nm-kicker">Pertandingan berikutnya</p><h2 class="nm-empty">Jadwal belum diumumkan</h2><p class="nm-meta">Ingin menjajal kekuatan kami? Kirim ajakan bertanding lewat WhatsApp.</p><a class="btn btn-blue btn-block" href="#ajak">Ajak bertanding</a>`;
    return;
  }
  box.innerHTML = `
    <div class="nm-top"><p class="nm-kicker">Pertandingan berikutnya</p><span class="chip">${esc(m.category)}</span></div>
    <div class="nm-teams">
      <div class="nm-team">${img(m.homeLogo, "crest", m.home, m.home)}<strong>${esc(m.home)}</strong></div>
      <span class="nm-vs">VS</span>
      <div class="nm-team">${img(m.awayLogo, "crest", m.away, m.away)}<strong>${esc(m.away)}</strong></div>
    </div>
    <p class="nm-comp">${esc(m.competition)}</p>
    <dl class="nm-facts">
      <div><dt>Tanggal</dt><dd>${esc(m.date ? dateLong(m.date) : "-")}</dd></div>
      <div><dt>Kick-off</dt><dd>${esc(m.date ? timeStr(m.date) : "-")}</dd></div>
      <div><dt>Tempat</dt><dd>${esc(m.venue || "-")}</dd></div>
    </dl>
    <div class="countdown" aria-live="off"><div><b id="cdD">--</b><span>hari</span></div><div><b id="cdH">--</b><span>jam</span></div><div><b id="cdM">--</b><span>menit</span></div><div><b id="cdS">--</b><span>detik</span></div></div>`;
  tick();
}
function tick() {
  const m = nextMatch();
  if ((m ? m.id : null) !== heroId) { renderHero(); return; }  // laga berikutnya berganti -> gambar ulang kartu
  if (!m || !$("#cdD")) return;
  let r = Math.max(0, m.time - Date.now());
  const p = [Math.floor(r / 864e5), Math.floor(r % 864e5 / 36e5), Math.floor(r % 36e5 / 6e4), Math.floor(r % 6e4 / 1e3)];
  ["cdD", "cdH", "cdM", "cdS"].forEach((id, i) => $("#" + id).textContent = String(p[i]).padStart(2, "0"));
}

/* ---------- Render: jadwal & hasil ---------- */
const sched = { tab: "upcoming", cat: "all" };
function renderSchedule() {
  const cats = [...new Set(data.matches.map(m => m.category))];
  $("#catFilter").innerHTML = ["all", ...cats].map(c => `<button type="button" class="pill${sched.cat === c ? " on" : ""}" data-cat="${esc(c)}">${c === "all" ? "Semua" : esc(c)}</button>`).join("");
  $$("#schedTabs [data-tab]").forEach(b => { const on = b.dataset.tab === sched.tab; b.classList.toggle("on", on); b.setAttribute("aria-selected", on); });
  const up = sched.tab === "upcoming";
  const rows = data.matches.filter(m => (up ? !m.played : m.played) && (sched.cat === "all" || m.category === sched.cat))
    .sort((a, b) => up ? a.time - b.time : b.time - a.time);
  $("#matchList").innerHTML = rows.length ? rows.map(m => {
    const o = m.played && (isClub(m.home) || isClub(m.away)) ? outcome(m) : null;
    return `<article class="mrow${o ? " r-" + o.r : ""}">
      <div class="mrow-date"><b>${m.date ? fmt(m.date, { day: "2-digit" }) : "-"}</b><span>${m.date ? fmt(m.date, { month: "short" }).replace(".", "") : ""}</span></div>
      <div class="mrow-main">
        <p class="mrow-comp"><span class="chip chip-sm">${esc(m.category)}</span> ${esc(m.competition)}</p>
        <div class="mrow-teams">
          <span class="mt mt-h">${esc(m.home)} ${img(m.homeLogo, "crest", m.home, "")}</span>
          <b class="mrow-score">${m.played ? `${m.score_home} - ${m.score_away}` : "vs"}</b>
          <span class="mt mt-a">${img(m.awayLogo, "crest", m.away, "")} ${esc(m.away)}</span>
        </div>
        <p class="mrow-venue">${m.date ? `<span class="v-time">${esc(timeStr(m.date))}${m.venue ? " - " : ""}</span>` : ""}${esc(m.venue || "")}${m.date ? `<span class="v-date"> · ${esc(dateLong(m.date))}</span>` : ""}</p>
      </div>
      <div class="mrow-side">${o ? `<span class="res res-${o.r}">${{ M: "Menang", S: "Seri", K: "Kalah" }[o.r]}</span>` : `<span class="kick">${m.date ? esc(timeStr(m.date)) : ""}</span>`}${m.played ? `<span class="m-sc"><b${m.score_home < m.score_away ? ' class="lo"' : ""}>${m.score_home}</b><i></i><b${m.score_away < m.score_home ? ' class="lo"' : ""}>${m.score_away}</b></span>` : `<span class="m-nx">Next match</span>`}</div>
    </article>`;
  }).join("") : `<p class="empty">${up ? "Belum ada jadwal pertandingan." : "Belum ada hasil pertandingan."}</p>`;
}

/* ---------- Render: match center ---------- */
const mc = { id: null, tab: "info" };
const lineupOf = (m, team) => data.lineups.filter(l => l.match_id === m.id && sameClub(l.team, team));
function playerPhoto(l, team) {
  if (l.photo) return l.photo;
  if (isClub(team)) { const p = data.players.find(p => String(p.number) === String(l.number) || sameClub(p.name, l.name)); if (p && p.photo) return p.photo; }
  return "";
}
const rateCls = r => r >= 7 ? "hi" : r >= 5.5 ? "mid" : "lo";
function minuteTxt(v) { const m = String(v).replace(/'/g, "").trim(); return m.includes("+") ? m.replace("+", "'+") : m + "'"; }
const formation = starters => ["Bek", "Gelandang", "Penyerang"].map(p => starters.filter(x => x.position === p).length).filter(Boolean).join("-");

function pitchSVG() {
  const g = '<g fill="none" stroke="#fff" stroke-opacity=".78" stroke-width="3">';
  let stripes = ""; for (let i = 0; i < 10; i++) stripes += `<rect y="${i * 105}" width="680" height="105" fill="${i % 2 ? "#15693A" : "#187540"}"/>`;
  return `<svg class="pitch-svg" viewBox="0 0 680 1050" aria-hidden="true">${stripes}${g}
    <rect x="20" y="20" width="640" height="1010"/><line x1="20" y1="525" x2="660" y2="525"/><circle cx="340" cy="525" r="91.5"/>
    <rect x="138.5" y="20" width="403" height="165"/><rect x="248.5" y="20" width="183" height="55"/><path d="M266.9 185A91.5 91.5 0 0 0 413.1 185"/>
    <rect x="138.5" y="865" width="403" height="165"/><rect x="248.5" y="975" width="183" height="55"/><path d="M266.9 865A91.5 91.5 0 0 1 413.1 865"/>
    <rect x="303" y="6" width="74" height="14"/><rect x="303" y="1030" width="74" height="14"/>
    <path d="M20 30a10 10 0 0 0 10-10M650 20a10 10 0 0 0 10 10M20 1020a10 10 0 0 1 10 10M660 1020a10 10 0 0 0-10 10" /></g>
    <g fill="#fff" fill-opacity=".85"><circle cx="340" cy="525" r="5"/><circle cx="340" cy="130" r="4"/><circle cx="340" cy="920" r="4"/></g></svg>`;
}
function tokens(rows, team, top) {
  const ys = top ? { Kiper: 6, Bek: 19, Gelandang: 32, Penyerang: 44.5 } : { Kiper: 94, Bek: 81, Gelandang: 68, Penyerang: 55.5 };
  const mine = isClub(team);
  return ["Kiper", "Bek", "Gelandang", "Penyerang"].map(pos => {
    const grp = rows.filter(r => r.role === "starter" && r.position === pos), n = grp.length;
    const spread = n > 1 ? Math.min(23, 76 / (n - 1)) : 0;
    return grp.map((l, i) => `
      <div class="tok${mine ? " tok-me" : ""}" style="left:${(50 + (i - (n - 1) / 2) * spread).toFixed(1)}%;top:${ys[pos]}%">
        <div class="tok-av">${img(playerPhoto(l, team), "person", l.name, l.name)}
          ${has(l.rating) && l.rating !== null ? `<span class="rate ${rateCls(l.rating)}">${l.rating.toFixed(1)}</span>` : ""}
          ${l.goals ? `<i class="ev ev-goal" title="Gol">⚽</i>` : ""}${l.card ? `<i class="ev ev-card ${/merah/.test(l.card) ? "red" : "yel"}" title="Kartu"></i>` : ""}${l.sub_minute ? `<i class="ev ev-out" title="Diganti menit ${esc(l.sub_minute)}">↓</i>` : ""}
        </div><span class="tok-name">${esc(l.number)} ${esc(splitName(l.name)[1])}</span>
      </div>`).join("");
  }).join("");
}
function teamBar(name, logo, form, cls) {
  return `<div class="pbar ${cls}">${img(logo, "crest", name, "")}<strong>${esc(name)}</strong><span class="pform">${esc(form || "")}</span></div>`;
}
function subRow(l, team, right) {
  const entered = !!l.sub_minute;
  return `<li class="sub${right ? " sub-r" : ""}">
    <span class="sub-av">${img(playerPhoto(l, team), "person", l.name, "")}${has(l.rating) && l.rating !== null && entered ? `<span class="rate ${rateCls(l.rating)}">${l.rating.toFixed(1)}</span>` : ""}</span>
    <span class="sub-tx"><b>${esc(l.name)}</b><small>${entered ? `<em class="in">↑ ${esc(minuteTxt(l.sub_minute))}</em>` : `${POS_TAG[l.position] || ""} #${esc(l.number)}`}</small></span></li>`;
}
function renderCenter() {
  const played = data.matches.filter(m => m.played).sort((a, b) => b.time - a.time);
  const box = $("#mcBody");
  if (!played.length) { box.innerHTML = `<p class="empty empty-dark">Belum ada hasil pertandingan.</p>`; $("#mcPick").innerHTML = ""; return; }
  if (!mc.id || !played.some(m => m.id === mc.id)) mc.id = (played.find(m => data.lineups.some(l => l.match_id === m.id)) || played[0]).id;
  const m = played.find(x => x.id === mc.id);
  $("#mcPick").innerHTML = played.map(x => `<option value="${esc(x.id)}"${x.id === m.id ? " selected" : ""}>${x.date ? esc(dateShort(x.date)) : ""} · ${esc(x.home)} ${x.score_home}-${x.score_away} ${esc(x.away)}</option>`).join("");
  $$("#mcTabs [data-mc]").forEach(b => { const on = b.dataset.mc === mc.tab; b.classList.toggle("on", on); b.setAttribute("aria-selected", on); });

  const homeRows = lineupOf(m, m.home), awayRows = lineupOf(m, m.away);
  const sh = homeRows.filter(r => r.role === "starter"), sa = awayRows.filter(r => r.role === "starter");
  const coach = (data.management.find(p => /pelatih/i.test(p.role)) || {}).name || "-";
  const coachH = m.bnsHome ? coach : m.opponent_coach || "-", coachA = m.bnsHome ? m.opponent_coach || "-" : coach;
  const goals = v => list(v).map(x => `<li>${esc(x)}</li>`).join("") || `<li class="none">-</li>`;
  let html = "";
  if (mc.tab === "info") {
    html = `<div class="mc-card">
      <p class="mc-comp"><span class="chip chip-dark">${esc(m.category)}</span> ${esc(m.competition)}</p>
      <div class="board">
        <div class="bt">${img(m.homeLogo, "crest", m.home, m.home)}<strong>${esc(m.home)}</strong></div>
        <div class="bs"><b>${m.score_home}</b><i>-</i><b>${m.score_away}</b><span class="status">Selesai</span></div>
        <div class="bt">${img(m.awayLogo, "crest", m.away, m.away)}<strong>${esc(m.away)}</strong></div>
      </div>
      <div class="goals"><ul class="gl">${goals(m.scorers_home)}</ul><span class="gi">⚽</span><ul class="gl gr">${goals(m.scorers_away)}</ul></div>
      <dl class="mc-facts"><div><dt>Tanggal</dt><dd>${m.date ? esc(dateLong(m.date)) : "-"}</dd></div><div><dt>Kick-off</dt><dd>${m.date ? esc(timeStr(m.date)) : "-"}</dd></div><div><dt>Tempat</dt><dd>${esc(m.venue || "-")}</dd></div></dl>
    </div>`;
  } else if (mc.tab === "lineup") {
    html = (sh.length || sa.length) ? `<div class="pitch-wrap">${teamBar(m.home, m.homeLogo, formation(sh), "pbar-top")}
      <div class="pitch">${pitchSVG()}${tokens(homeRows, m.home, true)}${tokens(awayRows, m.away, false)}</div>
      ${teamBar(m.away, m.awayLogo, formation(sa), "pbar-bot")}</div>` : `<p class="empty empty-dark">Susunan pemain belum tersedia untuk laga ini.</p>`;
  } else {
    const bh = homeRows.filter(r => r.role === "sub"), ba = awayRows.filter(r => r.role === "sub");
    html = (bh.length || ba.length) ? `<div class="mc-card"><h3 class="mc-h">Pemain cadangan</h3>
      <div class="subs"><ul>${bh.map(l => subRow(l, m.home, false)).join("")}</ul><ul>${ba.map(l => subRow(l, m.away, true)).join("")}</ul></div>
      <div class="coaches"><div>${img(m.homeLogo, "crest", m.home, "")}<span><b>${esc(coachH)}</b><small>Pelatih</small></span></div><div class="r"><span><b>${esc(coachA)}</b><small>Pelatih</small></span>${img(m.awayLogo, "crest", m.away, "")}</div></div>
      <p class="legend"><span><i class="in">↑</i> masuk</span><span><i class="ev-out-l">↓</i> keluar</span><span>⚽ gol</span><span><i class="ev-card yel inl"></i> kartu</span></p>
    </div>` : `<p class="empty empty-dark">Data cadangan belum tersedia.</p>`;
  }
  box.innerHTML = html;
}

/* ---------- Render: statistik ---------- */
function renderStats() {
  const { t, cats, form } = computeStats();
  const pct = t.p ? Math.round(t.w / t.p * 100) : 0;
  $("#statCards").innerHTML = [["Main", t.p], ["Menang", t.w], ["Seri", t.d], ["Kalah", t.l], ["Gol", t.gf], ["Kebobolan", t.ga], ["Clean sheet", t.cs], ["Persentase menang", pct + "%"]]
    .map(([k, v]) => `<div class="stat"><b>${v}</b><span>${k}</span></div>`).join("");
  $("#formRow").innerHTML = form.length ? form.map(f => `<span class="fp fp-${f.r}" title="${esc(f.m.opponent)} ${f.gf}-${f.ga}">${f.r}</span>`).join("") : `<span class="muted">Belum ada hasil</span>`;
  const bar = c => { const tot = c.p || 1; return `<div class="seg"><i class="sw" style="flex:${c.w}"></i><i class="sd" style="flex:${c.d}"></i><i class="sl" style="flex:${c.l}"></i></div>`; };
  $("#catStats").innerHTML = Object.keys(cats).map(k => { const c = cats[k]; return `<div class="cat"><div class="cat-h"><b>${esc(k)}</b><span>${c.p} laga · ${c.w}M ${c.d}S ${c.l}K · gol ${c.gf}:${c.ga}</span></div>${bar(c)}</div>`; }).join("") || `<p class="muted">Belum ada data.</p>`;
  const top = [...data.players].filter(p => p.goals > 0 || p.assists > 0).sort((a, b) => b.goals - a.goals || b.assists - a.assists).slice(0, 5);
  $("#topList").innerHTML = top.map((p, i) => `<li><span class="rk">${i + 1}</span><span class="tn"><b>${esc(p.name)}</b><small>${esc(p.position)}${p.appearances ? " · " + p.appearances + " laga" : ""}</small></span><span class="tg"><b>${p.goals}</b> gol</span><span class="ta"><b>${p.assists}</b> assist</span></li>`).join("") || `<li class="muted">Belum ada gol tercatat.</li>`;
  $("#honorList").innerHTML = data.honors.map(h => `<li><b class="hy">${esc(h.year)}</b><div><strong>${esc(h.title)}</strong>${h.note ? `<small>${esc(h.note)}</small>` : ""}</div><span class="chip">${esc(h.placing)}</span></li>`).join("") || `<li class="muted">Belum ada data prestasi.</li>`;
}

/* ---------- Render: skuad, manajemen ---------- */
let posFilter = "all";
function renderSquad() {
  const ps = data.players.filter(p => posFilter === "all" || p.position === posFilter);
  $("#squadGrid").innerHTML = ps.map(p => {
    const [first, last] = splitName(p.name);
    return `<article class="pcard">
      ${img(p.photo, "person", p.name, `Foto ${p.name}`, "pcard-photo")}
      <div class="pcard-top"><div class="pcard-name"><small>${esc(first)}</small><strong>${esc(last)}</strong><span class="ptag">${POS_TAG[p.position] || p.position}</span></div><b class="pcard-num">${esc(p.number)}</b></div>
      ${(p.appearances || p.goals || p.assists) ? `<p class="pcard-stat"><b>${p.appearances}</b> laga <b>${p.goals}</b> gol <b>${p.assists}</b> assist</p>` : ""}
    </article>`;
  }).join("") || `<p class="empty">Belum ada pemain pada posisi ini.</p>`;
}
function renderManagement() {
  $("#mgmtGrid").innerHTML = [...data.management].sort((a, b) => a.order - b.order).map(p => `
    <article class="mg">${p.photo ? img(p.photo, "person", p.name, p.name, "mg-photo") : `<span class="mg-ini">${esc(initials(p.name))}</span>`}<h3>${esc(p.name)}</h3><p>${esc(p.role)}</p></article>`).join("");
}

/* ---------- Render: toko jersey ---------- */
const shopState = { cat: "all", sort: "default", size: {} };
function renderShop() {
  const cats = [...new Set(data.shop.map(p => p.category).filter(Boolean))];
  $("#shopCats").innerHTML = ["all", ...cats].map(c => `<button type="button" class="pill${shopState.cat === c ? " on" : ""}" data-scat="${esc(c)}">${c === "all" ? "Semua" : esc(c)}</button>`).join("");
  let items = data.shop.filter(p => shopState.cat === "all" || p.category === shopState.cat);
  if (shopState.sort === "low") items = [...items].sort((a, b) => a.price - b.price);
  if (shopState.sort === "high") items = [...items].sort((a, b) => b.price - a.price);
  $("#shopGrid").innerHTML = items.map(p => {
    const sizes = list(p.sizes), out = p.stock <= 0, sel = shopState.size[p.id];
    const disc = p.old_price > p.price ? Math.round((1 - p.price / p.old_price) * 100) : 0;
    return `<article class="prod${out ? " out" : ""}" data-id="${esc(p.id)}">
      <div class="prod-img">${img(p.image, "product", p.name, p.name)}${p.badge && !out ? `<span class="badge">${esc(p.badge)}</span>` : ""}${out ? `<span class="badge badge-out">Habis</span>` : ""}${disc ? `<span class="disc">-${disc}%</span>` : ""}</div>
      <div class="prod-body"><p class="prod-cat">${esc(p.category)}</p><h3>${esc(p.name)}</h3>
        <p class="price"><b>${rupiah(p.price)}</b>${disc ? `<s>${rupiah(p.old_price)}</s>` : ""}</p>
        ${sizes.length ? `<div class="sizes" role="group" aria-label="Ukuran">${sizes.map(z => `<button type="button" class="sz${sel === z ? " on" : ""}" data-size="${esc(z)}"${out ? " disabled" : ""}>${esc(z)}</button>`).join("")}</div>` : ""}
        ${!out && p.stock <= 5 ? `<p class="low">Stok tinggal ${p.stock}</p>` : ""}
        <button type="button" class="btn btn-blue btn-block order" data-order="${esc(p.id)}"${out ? " disabled" : ""}>${out ? "Stok habis" : "Pesan via WhatsApp"}</button>
      </div></article>`;
  }).join("") || `<p class="empty">Belum ada produk.</p>`;
}
function orderProduct(id) {
  const p = data.shop.find(x => x.id === id); if (!p) return;
  const sizes = list(p.sizes), size = shopState.size[id];
  if (sizes.length && !size) { const card = $(`.prod[data-id="${CSS.escape(id)}"] .sizes`); if (card) { card.classList.add("need"); card.scrollIntoView({ block: "center", behavior: "smooth" }); setTimeout(() => card.classList.remove("need"), 1400); } return; }
  const text = `Halo ${data.settings.short_name || club()}, saya mau pesan:\n*${p.name}*${size ? `\nUkuran: ${size}` : ""}\nHarga: ${rupiah(p.price)}\nJumlah: 1\n\nNama:\nAlamat pengiriman:`;
  openWA(text);
}

/* ---------- Render: sponsor, galeri ---------- */
function renderSponsors() {
  const items = [...data.sponsors].sort((a, b) => a.order - b.order), main = items[0]?.tier;
  const tile = sp => { const inner = `${img(sp.logo, "photo", sp.name, sp.name)}<small>${esc(sp.tier)}</small>`; const cls = "sp" + (sp.tier === main ? " sp-main" : ""); return sp.link ? `<a class="${cls}" href="${esc(sp.link)}" target="_blank" rel="noopener sponsored">${inner}</a>` : `<div class="${cls}">${inner}</div>`; };
  $("#sponsorGrid").innerHTML = items.map(tile).join("") || `<p class="empty">Belum ada sponsor.</p>`;
}
const slider = { i: 0, timer: null, paused: false, seen: new Set(), started: false };
function renderGallery() {
  const all = [...data.gallery].sort((a, b) => a.order - b.order), items = slidePicks(all), tr = $("#slideTrack");
  tr.innerHTML = items.map((g, i) => `<figure class="slide" aria-roledescription="slide" aria-label="${i + 1} dari ${items.length}">${img(g.image, "photo", g.title, g.title)}<figcaption>${esc(g.title)}</figcaption></figure>`).join("");
  $("#slideDots").innerHTML = items.map((_, i) => `<button type="button" aria-label="Foto ${i + 1}" data-dot="${i}"></button>`).join("");
  slider.n = items.length;
  if (!slider.started && slider.n) { slider.started = true; slider.i = Math.floor(Math.random() * slider.n); }  // foto pertama acak
  goSlide(Math.min(slider.i, items.length - 1), true); autoplay();
  initGalleryAll(all);
}
function goSlide(i, quiet) {
  if (!slider.n) return; slider.i = (i + slider.n) % slider.n; slider.seen.add(slider.i);
  $("#slideTrack").style.transform = `translateX(-${slider.i * 100}%)`;
  $$("#slideDots button").forEach((b, k) => b.setAttribute("aria-current", k === slider.i));
}
function autoplay() {
  clearInterval(slider.timer);
  if (slider.n < 2 || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  slider.timer = setInterval(() => { if (!slider.paused && !document.hidden) goSlide(randomSlide()); }, 4500);
}
// Pilih foto acak yang belum tampil; semua foto tampil sekali dulu sebelum ada yang diulang.
function randomSlide() {
  let pool = [...Array(slider.n).keys()].filter(k => !slider.seen.has(k));
  if (!pool.length) { slider.seen = new Set([slider.i]); pool = [...Array(slider.n).keys()].filter(k => k !== slider.i); }
  return pool[Math.floor(Math.random() * pool.length)];
}

// Galeri berisi banyak foto: slider hanya memuat GAL.max foto acak, sisanya lewat tombol "Lihat semua foto" (grid, dimuat bertahap).
const GAL = { max: 12, page: 24, all: [], shown: 0, pick: null, key: "" };
function shuffle(a) { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function slidePicks(all) {
  const key = all.map(g => g.image).join("|");
  if (GAL.key !== key) { GAL.key = key; GAL.pick = all.length > GAL.max ? shuffle(all).slice(0, GAL.max) : all; }
  return GAL.pick;
}
function initGalleryAll(all) {
  GAL.all = all; GAL.shown = 0; $("#galGrid").innerHTML = "";
  const btn = $("#galOpen");
  btn.hidden = all.length <= GAL.max; btn.setAttribute("aria-expanded", "false");
  btn.textContent = `Lihat semua foto (${all.length})`; $("#galAll").hidden = true; $("#galLoad").hidden = false;
}
function toggleGalleryAll() {
  const btn = $("#galOpen"), box = $("#galAll"), open = box.hidden;
  box.hidden = !open; btn.setAttribute("aria-expanded", String(open));
  btn.textContent = open ? "Tutup semua foto" : `Lihat semua foto (${GAL.all.length})`;
  if (open && !GAL.shown) loadGalleryMore();
}
function loadGalleryMore() {
  const end = Math.min(GAL.shown + GAL.page, GAL.all.length);
  $("#galGrid").insertAdjacentHTML("beforeend", GAL.all.slice(GAL.shown, end).map(g => `<figure class="gal-tile">${img(g.image, "photo", g.title, g.title)}<figcaption>${esc(g.title)}</figcaption></figure>`).join(""));
  GAL.shown = end; $("#galLoad").hidden = end >= GAL.all.length;
}

/* ---------- Ajakan bertanding -> WhatsApp ---------- */
function openWA(text) {
  const wa = String(data.settings.whatsapp || "").replace(/\D/g, "");
  if (!wa) { alert("Nomor WhatsApp belum diisi di tab settings."); return; }
  window.open(`https://wa.me/${wa}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
}
$("#inviteForm").addEventListener("submit", e => {
  e.preventDefault(); const f = e.target;
  if (!f.checkValidity()) { f.reportValidity(); return; }
  const v = n => f.elements[n].value.trim();
  const d = v("tgl") ? toDate(v("tgl") + " " + (v("jam") || "00:00")) : null;
  const hari = d ? dateLong(d) : "Belum ditentukan";
  const t1 = v("jam").replace(":", "."), t2 = v("jam_selesai").replace(":", ".");
  const waktu = t1 && t2 ? `${t1} - ${t2} WIB` : t1 ? `${t1} WIB` : "Belum ditentukan";
  const h = new Date().getHours();
  const salam = h < 11 ? "Pagi" : h < 15 ? "Siang" : h < 18 ? "Sore" : "Malam";
  const jenis = v("jenis") === "Lainnya" ? "" : ` ${v("jenis")}`;
  openWA([
    `Selamat ${salam} rekan-rekan ${club()}.`,
    `Perkenalkan, saya ${v("nama")} perwakilan dari tim ${v("tim")}. Kami bermaksud mengajak tim rekan-rekan untuk mengadakan laga${jenis} pada:`,
    "",
    `• Hari/Tanggal : ${hari}`,
    `• Waktu : ${waktu}`,
    `• Tempat : ${v("lokasi") || "Belum ditentukan"}`,
    `• Catatan : ${v("catatan") || "-"}`,
    "",
    "Besar harapan kami agar kita bisa bertanding dan menjalin silaturahmi di lapangan. Mohon konfirmasinya jika tim rekan-rekan berkenan. Terima kasih! 🤝⚽"
  ].join("\n"));
});

/* ---------- Interaksi ---------- */
document.addEventListener("click", e => {
  const c = e.target.closest.bind(e.target);
  let el;
  if ((el = c("[data-tab]"))) { sched.tab = el.dataset.tab; renderSchedule(); }
  else if ((el = c("[data-cat]"))) { sched.cat = el.dataset.cat; renderSchedule(); }
  else if ((el = c("[data-mc]"))) { mc.tab = el.dataset.mc; renderCenter(); }
  else if ((el = c("[data-pos]"))) { posFilter = el.dataset.pos; $$("[data-pos]").forEach(b => b.classList.toggle("on", b === el)); renderSquad(); }
  else if ((el = c("[data-scat]"))) { shopState.cat = el.dataset.scat; renderShop(); }
  else if ((el = c(".sz"))) { const id = el.closest(".prod").dataset.id; shopState.size[id] = shopState.size[id] === el.dataset.size ? "" : el.dataset.size; renderShop(); }
  else if ((el = c("[data-order]"))) orderProduct(el.dataset.order);
  else if ((el = c("[data-dot]"))) goSlide(+el.dataset.dot);
  else if (c("#galOpen")) toggleGalleryAll();
  else if (c("#galLoad")) loadGalleryMore();
  else if (c("#slidePrev")) goSlide(slider.i - 1);
  else if (c("#slideNext")) goSlide(slider.i + 1);
});
$("#mcPick").addEventListener("change", e => { mc.id = e.target.value; renderCenter(); });
$("#shopSort").addEventListener("change", e => { shopState.sort = e.target.value; renderShop(); });
const sv = $("#slider");
// Berhenti sementara hanya untuk kursor mouse dan fokus keyboard; sentuhan di layar HP tidak menghentikan slide.
sv.addEventListener("pointerenter", e => { if (e.pointerType === "mouse") slider.paused = true; });
sv.addEventListener("pointerleave", () => slider.paused = false);
sv.addEventListener("focusin", e => { if (e.target.matches(":focus-visible")) slider.paused = true; });
sv.addEventListener("focusout", () => slider.paused = false);
let sx = null;
sv.addEventListener("pointerdown", e => { sx = e.clientX; });
sv.addEventListener("pointerup", e => { if (sx !== null && Math.abs(e.clientX - sx) > 40) goSlide(slider.i + (e.clientX < sx ? 1 : -1)); sx = null; });
sv.addEventListener("keydown", e => { if (e.key === "ArrowLeft") goSlide(slider.i - 1); if (e.key === "ArrowRight") goSlide(slider.i + 1); });

const menuBtn = $("#menuBtn"), nav = $("#nav");
const closeMenu = () => { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); };
menuBtn.addEventListener("click", () => menuBtn.setAttribute("aria-expanded", String(nav.classList.toggle("open"))));
nav.addEventListener("click", e => { if (e.target.closest("a")) closeMenu(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });
const links = $$(".nav a[href^='#']");
if ("IntersectionObserver" in window) {
  const spy = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) links.forEach(l => l.classList.toggle("on", l.getAttribute("href") === "#" + en.target.id)); }), { rootMargin: "-35% 0px -55% 0px" });
  links.map(l => document.querySelector(l.getAttribute("href"))).filter(Boolean).forEach(x => spy.observe(x));
}
$("#tgl").min = new Date().toISOString().slice(0, 10);

/* ---------- Mulai ---------- */
function renderAll() {
  prepare(); renderSettings(); renderHero(); renderSchedule(); renderCenter(); renderStats();
  renderSquad(); renderManagement(); renderShop(); renderSponsors(); renderGallery();
}
(async () => {
  if (CONFIG.mode === "sheets") await loadSheets();
  renderAll();
  setInterval(tick, 1000);
})();
