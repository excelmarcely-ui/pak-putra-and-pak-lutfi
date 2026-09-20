const namaSiswa: string = "Excell Marcely";
const nilaiAkhir: number = 89;
const nilaiUjian: number = 88;

const nilaiMinimum: number = 85;
const nilaiMaksimum: number = 100;

const nilaiUjianLulus: boolean = nilaiUjian >= nilaiMinimum && nilaiUjian <= nilaiMaksimum;
const nilaiBagus: boolean = nilaiAkhir >= nilaiMinimum && nilaiAkhir <= nilaiMaksimum;

console.log("Nama Siswa:", namaSiswa);
console.log("Nilai Ujian:", nilaiUjian);
console.log("Nilai Akhir:", nilaiAkhir);
console.log("Nilai Minimum:", nilaiMinimum);
console.log("Nilai Maksimum:", nilaiMaksimum);
console.log("Apakah Nilai Ujian Lulus?", nilaiUjianLulus);
console.log("Apakah Nilai Bagus?", nilaiBagus);