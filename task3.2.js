const login = (username, email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        username == "sangkanfaiq" &&
        email == "sangkanfaiq@gmail.com" &&
        password == "123qweasd"
      ) {
        resolve(`Selamat datang ${username}`);
      } else {
        reject("Gagal login");
      }
    }, 1000);
  });
};

// then-catch
login("sangkanfaiq", "sangkanfaiq@gmail.com", "123qweasd")
  .then((data) => {
    console.log({
      message: "Login berhasil",
      pesan: data,
    });
  })
  .catch((err) => {
    console.log({
      message: "Coba login kembali",
    });
    console.log(err);
  });

// try-catch
async function cekLogin() {
  try {
  const result = await login('sangkanfaiq',"sangkanfaiq@gmail.com", "123qweasd");
    console.log({
      message: 'Login berhasil',
      pesan: result
    })

  } catch (error) {
    console.log({
      message:'Silahkan login lagi'
    })
    console.log(error)
  } finally {
    console.log('\n'+'Proses selesai...')
  }
}
cekLogin();
