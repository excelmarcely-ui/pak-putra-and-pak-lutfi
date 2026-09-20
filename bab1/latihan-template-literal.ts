const nama: string = "excel marcely ";
const kelas: string = "X";
const jurusan: string = "Rekayasa Perangkat Lunak";
const nilai: number = 85;

const biodataSingkat: string = `
======================================
           BIODATA SISWA
======================================
Nama Lengkap : ${nama}
Kelas        : ${kelas}
Jurusan      : ${jurusan}
--------------------------------------`;

const laporanNilai: string = `Nilai akhir setelah bonus: ${nilai + 5}
======================================`;

// Menampilkan semua hasil ke terminal
console.log(biodataSingkat);
console.log(laporanNilai);