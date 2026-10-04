// 7. Gunakan data kamu sendiri untuk seluruh project (Silakan sesuaikan datanya)
const nama: string = "excel marcely";
const kelas: string = "XI RPL 1";
const jurusan: string = "Rekayasa Perangkat Lunak";
const nilai: number = 90;
const nomorAbsen: number = 5;
const email: string | null = "excel.marcely@email.com";

type JenisKelamin = "L" | "p";
const jenisKelamin: JenisKelamin = "L";

const nomorTelepon: string | null = null;

const hobi: string = "Mempelajari TypeScript";

const sudahMembayarSPP: boolean = true;

const statusPembayaran: string = sudahMembayarSPP ? "Lunas" : "Belum Lunas";

const laporanFinal: string = `
======================================
           BIODATA LENGKAP SISWA
======================================
Nama Lengkap : ${nama}
Jenis Kelamin: ${jenisKelamin === "L" ? "Laki-laki" : "Perempuan"}
No. Absen    : ${nomorAbsen}
Kelas        : ${kelas}
Jurusan      : ${jurusan}
Email        : ${email ?? "Belum diisi"}
======================================
           DATA TAMBAHAN
======================================
Hobi         : ${hobi}
No. Telepon  : ${nomorTelepon ?? "Belum diisi"}
Status SPP   : ${statusPembayaran}
--------------------------------------
Nilai Akhir  : ${nilai}
======================================`;

console.log(laporanFinal);