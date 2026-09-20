function laporkanError(pesan: string): never {
  throw new Error(pesan);
}

console.log("--- Memulai Eksekusi Program ---");

try {
  console.log("Mencoba menjalankan fungsi yang memicu error...");
  laporkanError("Aplikasi gagal terhubung ke database!");
  
  console.log("Baris ini tidak akan terlihat."); 
} catch (error) {
  if (error instanceof Error) {
    console.log(`[Tertangkap] Pesan Error: ${error.message}`);
  }
}

console.log("Program berhasil melewati error dan tetap berjalan normal.");