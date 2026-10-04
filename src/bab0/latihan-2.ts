let namaSiswa: string = "Excell Marcely";
let nomorAbsen: number = 9;
let tempattanggallahir: string = "sidoarjo, candi";
let nomorHanphone: number = 6283137160768;

const output = document.getElementById("output");
const teks = `
====================================
Siswa                : ${namaSiswa}
Absen                : ${nomorAbsen}
tempattanggallahir   : ${tempattanggallahir}
nomorHanphone        : ${nomorHanphone}
====================================
`;

if (output) {output.textContent = teks;}