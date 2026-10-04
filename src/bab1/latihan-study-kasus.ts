const nama: string = "excel marcely";
const kelas: string = "XII";
const jurusan: string = "Rekayasa Perangkat Lunak";
const nilai: number = 85;

const nomorAbsen: number = 12;

const email: string | null = null;

const hobi: string = "Membaca Buku Pemrograman";


const biodataLengkap: string = `
======================================
           BIODATA LENGKAP SISWA
======================================
Nama Lengkap : ${nama}
No. Absen    : ${nomorAbsen}
Kelas        : ${kelas}
Jurusan      : ${jurusan}
Email        : ${email ?? "Belum diisi"}
Hobi         : ${hobi}
--------------------------------------
Nilai        : ${nilai}
======================================`;

console.log(biodataLengkap);