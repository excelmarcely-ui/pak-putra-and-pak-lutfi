const namaPembeli: string = "Excell Marcely";
const hargaMakanan: number = 15000;
const hargaMinuman: number = 5000;
const uangDibawa: number = 25000;

const totalBelanja: number = hargaMakanan + hargaMinuman;
const sisaUang: number = uangDibawa - totalBelanja;

const statusPembayaran: boolean = uangDibawa >= totalBelanja;

const laporanBelanja = `
--- Output Challenge 9 ---
LAPORAN BELANJA KANTIN
Nama Pembeli  : ${namaPembeli}
--------------------------
Harga Makanan : Rp ${hargaMakanan}
Harga Minuman : Rp ${hargaMinuman}
Total Belanja : Rp ${totalBelanja}
--------------------------
Uang Dibawa   : Rp ${uangDibawa}
Pembayaran OK : ${statusPembayaran ? "Ya, uang cukup/berlebih" : "Tidak, uang kurang"}
Kembalian     : Rp ${sisaUang}
`;

console.log(laporanBelanja);