// Meminta pengguna memasukkan nilai awal dan nilai akhir
const nilaiAwal = parseInt(prompt("Masukkan nilai awal:"));
const nilaiAkhir = parseInt(prompt("Masukkan nilai akhir:"));

// Memeriksa apakah nilai awal dan akhir valid
if (!isNaN(nilaiAwal) && !isNaN(nilaiAkhir)) {
    // Menampilkan judul hasil
    console.log("Bilangan genap dan ganjil antara" + nilaiAwal + " dan " + nilaiAkhir + ":");

    // Melakukan perulangan dari nilai awal hingga nilai akhir
    for (let i = nilaiAwal; i <= nilaiAkhir; i++) {
        if (i % 2 === 0) {
            console.log(i + " adalah bilangan genap");
        } else {
            console.log(i + "adalah bilangan ganjil");
       }
   }
} else {
    console.log("Nilai yang dimasukkan tidak valid. Mohon masukkan angka.");
}