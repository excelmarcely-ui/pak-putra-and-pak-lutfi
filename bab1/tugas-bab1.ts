const NAMA_SEKOLAH: string = "SMKS Antartika 1 SDA.";
const NAMA_SISWA: string = "Excell Marcely.";
let kelas: string = "XI RPL 1.";
const NOMOR_ABSEN: number = 9;
const UMUR: number = 16;
let namaFilm = "interstellar.";
let sutradara = "Cristoher Nolan.";
let produser = "Emma Thomas.";
let ditulisOleh = "Jonatahan Nolan.";
let pemeran = "Matthew McConaughey, Annw Hathaway.";
let penataMusik = "Hanz Zimmer.";
let sinematografi  = "Hoyte Van Hoytema.";
let distributor = "Pramount Pictures.";
let tanggalRilis = "7 November 2014.";
let durasi = "169 menit.";
let negara = "Amerika Serikat.";

const ouput =document.getElementById("output");
const teks = `
=============KARTU INDENTITAS==============
Nama Sekolah         : ${NAMA_SEKOLAH}
Nama Siswa           : ${NAMA_SISWA}
Kelas                : ${kelas}
Nomor Absen          : ${NOMOR_ABSEN}
Umur                 : ${UMUR}
-------------TUGAS DEKLARASI-----------------
Nama Film            : ${namaFilm}
Sutradara            : ${sutradara}
Produser             : ${produser}
Ditulis Oleh         : ${ditulisOleh}
Pemeran              : ${pemeran}
Penata Musik         : ${penataMusik}
Sinematografi        : ${sinematografi}
Distributor          : ${distributor}
Tanggal Rilis        : ${tanggalRilis}
Durasi               : ${durasi}
Negara               : ${negara}
===============================================
`;

if (ouput) {ouput.textContent = teks;}