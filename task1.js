const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// a. then-catch
cekHariKerja("senin")
  .then((data) => {
    console.log({
      message: "Hari ini adalah hari kerja",
      data: data,
    });
  })
  .catch((error) => {
    console.log({
      message: "Hari ini bukan hari kerja",
    });
    console.log(error);
  });

// b. try-catch
async function getHariKerja() {
  try {
    const result = await cekHariKerja("senin");
    console.log({
      message: "Hari ini adalah hari kerja",
      data: result,
    });
  } catch (error) {
    console.log({
      message: "Hari ini bukan hari kerja",
    });
    console.log(error);
  } finally {
    console.log("\n" + "Proses selesai...");
  }
}
getHariKerja();
