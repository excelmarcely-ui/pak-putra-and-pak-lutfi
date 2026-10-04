const JUDUL_APLIKASI: string = "SISTEM DATA SISWA TERPADU";
const namaLengkap: string = "Excell Marcely";
const kelasSaatIni: string = "X RPL 1";
const namaSekolah: string = "SMKS Antartika 1sda";
const alamatSiswa: string = "jl.candi,Gelam,SDA";
const umurSiswa: number = 15;
const nomorAbsensi: number = 10;
type DaftarJurusan = "Rekayasa Perangkat Lunak" | "Teknik Komputer Jaringan" | "Multimedia";
const jurusan: DaftarJurusan = "Rekayasa Perangkat Lunak";
const emailAkun: string | null = "excell.marcely@sekolah.id";
const isAktif: boolean = true;
const estimasiTahunLulus: number = 2024 + 2; 
const laporanBiodataSiswa = `


\n--- Output Challenge 10 ---

=========================================
      ${JUDUL_APLIKASI}
=========================================
Nama Lengkap   : ${namaLengkap}
No. Absen      : ${nomorAbsensi}
Umur           : ${umurSiswa} Tahun
Sekolah        : ${namaSekolah}
Kelas/Jurusan  : ${kelasSaatIni} - ${jurusan}
Alamat         : ${alamatSiswa}

[ Info Tambahan ]
Email          : ${emailAkun ?? "Belum mendaftarkan email"}
Status Aktif   : ${isAktif ? "Siswa Aktif Terdaftar" : "Alumni / Non-aktif"}
Est. Lulus     : Tahun ${estimasiTahunLulus}
=========================================`;

console.log(laporanBiodataSiswa);