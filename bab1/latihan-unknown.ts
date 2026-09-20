function cekData(data: unknown): void {
  
  if (typeof data === "string") {
    console.log(`Data String  -> Panjang teks: ${data.length} karakter`);
  } 
  
  else if (typeof data === "number") {
    console.log(`Data Number  -> Hasil ditambah 10: ${data + 10}`);
  } 
  
  else if (typeof data === "boolean") {
    const status = data ? "Status aktif" : "Status tidak aktif";
    console.log(`Data Boolean -> ${status}`);
  } 
  
  else {
    console.log("Tipe data tidak dikenali untuk operasi ini.");
  }
}

console.log("--- Hasil Pengujian Fungsi cekData ---");

cekData("Belajar TypeScript"); // Menguji String
cekData(40);                 // Menguji Number
cekData(true);               // Menguji Boolean (True)
cekData(false);              // Menguji Boolean (False)