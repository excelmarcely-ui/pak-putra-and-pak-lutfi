function prosesData(data: unknown): void {
  if (typeof data === "string") {
    console.log(`[String]  : ${data.toUpperCase()}`);
  } else if (typeof data === "number") {
    console.log(`[Number]  : Hasil kali dua = ${data * 2}`);
  } else if (typeof data === "boolean") {
    console.log(`[Boolean] : ${data ? "Status aktif" : "Status nonaktif"}`);
  } else {
    console.log(`[Lainnya] : Data tidak didukung`);
  }
}

console.log("\n--- Output Challenge 8 ---");
prosesData("tes ngoding");
prosesData(50);            
prosesData(false);         
prosesData([1, 2, 3]);     