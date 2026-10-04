let nama: string = "Excell";
let kelas: string = "X RPL 1";
let umur: number = 16;

const output = document.getElementById("output");

const teks = `
====================================

Siswa                : ${nama}
Kelas                : ${kelas}
Umur                 : ${umur}
====================================
`;

if (output) {
    output.textContent = teks;
}