// 1. Error const (Nggak bisa diubah)
// ERROR: const nama = "Excell"; nama = "Marcely"; 
// PERBAIKAN: Pakai let biar bisa diubah
let namaPanggilan = "Excell";
namaPanggilan = "Marcely"; 
console.log(`1. Nama: ${namaPanggilan}`);

// 2. Error Tipe Data (Salah masukin tipe)
// ERROR: let nilai: number = 95; nilai = "Seratus"; 
// PERBAIKAN: Masukin angka juga, jangan teks
let nilaiUjian: number = 95;
nilaiUjian = 100; 
console.log(`2. Nilai: ${nilaiUjian}`);

// 3. Error Typo (Salah ketik huruf besar/kecil)
// ERROR: let skor = 50; console.log(SKOR); 
// PERBAIKAN: Samain persis huruf besar/kecilnya
let skorPertandingan = 50;
console.log(`3. Skor: ${skorPertandingan}`);