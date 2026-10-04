type HariSekolah = "Senin" | "Selasa" | "Rabu" | "Kamis" | "Jumat";

type StatusTugas = "belum" | "dikerjakan" | "dikumpulkan";

let hariIni: HariSekolah = "Rabu"; 
let statusKu: StatusTugas = "dikerjakan";

console.log("--- Info Tugas ---");
console.log(`Hari          : ${hariIni}`);
console.log(`Status Tugas  : ${statusKu}`);
