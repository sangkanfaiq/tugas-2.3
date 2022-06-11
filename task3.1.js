const cekBarang = (limit) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        {
          namaBarang: "Jaket",
          ukuran: "XL",
          warna: "putih",
          harga: "249k",
        },
        {
          namaBarang: "Sweater",
          ukuran: "XL",
          warna: "biru dongker",
          harga: "299k",
        },
        {
          namaBarang: "Sepatu",
          nomorUkuran: "42",
          warna: "putih",
          harga: "1.500k",
        },
      ];

      if (data) {
        if (data.length < limit) {
          reject("Barang tidak sesuai");
        } else {
          resolve({
            message: "Success ambil barang",
            data: data,
          });
        }
      }
    }, 1000);
  });
};

// then-catch
cekBarang(3)
  .then((data) => {
    console.log(data, "Proses dilanjut");
  })
  .catch((err) => {
    console.log({
      message: "Proses tidak dilanjut",
    });
    console.log(err);
  });

// try-catch
async function cekProses() {
  try {
    const result = await cekBarang(3);
    console.log(result, "Proses dilanjut");
  } catch (error) {
    console.log({
      message: "Proses tidak dilanjut",
    });
    console.log(error);
  } finally {
    console.log("\n" + "Proses selesai...");
  }
}
cekProses();
