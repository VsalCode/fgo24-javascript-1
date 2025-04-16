/* 
HOMEWORK

bikin object dlm array, nama transaksi isinya min: 10 item
setiap item: namaItem, tanggal, harga

mencari transaksi paling tinggi
mencari tanggal dengan nilai trasnaksi  terendah
memunculkan nama barang dengan harga rata2

*/

const dataTransaksi = [
  {
    namaItem: "hoodie",
    tanggal: "16-04-2025",
    harga: 150000
  },
  {
    namaItem: "kaos",
    tanggal: "07-02-2025",
    harga: 95000
  },
  {
    namaItem: "kemeja",
    tanggal: "2-04-2025",
    harga: 120000
  },
  {
    namaItem: "jeans",
    tanggal: "23-03-2025",
    harga: 145000
  },
  {
    namaItem: "jaket",
    tanggal: "04-02-2025",
    harga: 200000
  },
  {
    namaItem: "sendal",
    tanggal: "04-04-2025",
    harga: 75000
  },
  {
    namaItem: "sepatu",
    tanggal: "27-03-2025",
    harga: 127000
  },
  {
    namaItem: "rok",
    tanggal: "12-04-2025",
    harga: 99000
  },
  {
    namaItem: "polo",
    tanggal: "11-01-2025",
    harga: 170000
  },
]

let transaksiTertinggi = { harga: 0 } 

for (let i = 0; i < dataTransaksi.length; i++) {
  if(transaksiTertinggi.harga < dataTransaksi[i].harga ){
    transaksiTertinggi = dataTransaksi[i]
  }
}
console.log("- " + transaksiTertinggi.namaItem + " adalah transaksi tertinggi dari data transaksi, dengan harga : Rp." + transaksiTertinggi.harga);

let transaksiTerendah = { harga: 1000000000 } 

for (let i = 0; i < dataTransaksi.length; i++) {
  if(transaksiTerendah.harga > dataTransaksi[i].harga ){
    transaksiTerendah = dataTransaksi[i]
  }
}
console.log("- Tanggal " +transaksiTerendah.tanggal + " adalah tanggal transaksi terendah dari data transaksi, dengan harga : Rp." + transaksiTerendah.harga );

let rataRata = 0

for (let i = 0; i < dataTransaksi.length; i++) {

  rataRata = dataTransaksi[i].harga / dataTransaksi.length
  truncated =  Math.floor(rataRata *  100) / 100
}

console.log("- Rata rata harga dari data transaksi : " + truncated);

