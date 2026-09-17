import sqlite3

# 1. Membuat/Menghubungkan ke basis data
conn = sqlite3.connect("agroindustri.db")
cur = conn.cursor()

# 2. Membuat tabel stok_hasil_tani jika belum ada
cur.execute("""
CREATE TABLE IF NOT EXISTS stok_hasil_tani (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    komoditas TEXT NOT NULL,
    jumlah_kg REAL NOT NULL,
    tanggal_masuk TEXT NOT NULL
)
""")

# 3. Memasukkan data sampel
cur.execute(
    "INSERT INTO stok_hasil_tani (komoditas, jumlah_kg, tanggal_masuk) VALUES"
    " (?, ?, ?)",
    ("Jagung", 1200.0, "2026-09-01"),
)
conn.commit()

# 4. Ambil SEMUA kolom (id, komoditas, jumlah_kg, tanggal_masuk)
cur.execute(
    "SELECT id, komoditas, jumlah_kg, tanggal_masuk FROM stok_hasil_tani WHERE"
    " jumlah_kg > 500"
)

# 5. Gunakan Tuple Unpacking (Aman dari tuple index error)
print("=== Daftar Stok Komoditas > 500 kg ===")
for id_stok, komoditas, jumlah_kg, tanggal in cur.fetchall():
  print(
      f"ID: {id_stok} | Komoditas: {komoditas} | Stok: {jumlah_kg} kg |"
      f" Tanggal: {tanggal}"
  )

# 6. Menutup koneksi
conn.close()