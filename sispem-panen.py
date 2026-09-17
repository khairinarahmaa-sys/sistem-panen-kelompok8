# Program Pencatatan Hasil Panen Agroindustri

def hitung_total_pendapatan(berat_kg, harga_per_kg):
    return berat_kg * harga_per_kg

def main():
    print("=== SISTEM PENCATATAN HASIL PANEN DIGITAL ===")
    komoditas = "Padi Organik"
    berat = 100
    harga = 12000
    
    total = hitung_total_pendapatan(berat, harga)
    print(f"Komoditas             {komoditas}")
    print(f"Total Berat           {berat} kg")
    print(f"Harga per kg          Rp{harga:,}")
    print(f"Total Pendapatan Awal Rp{total:,}")

if __name__ == "__main__":
    main()
