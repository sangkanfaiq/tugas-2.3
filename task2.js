function showMonth(result) {
  if (result != null) {
      console.log(result)
  } 
}

const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "January", "Febuary", "March","April",
      "May", "Juni", "July", "August",
      "September", "October", "November", "Desember",
    ];

    if (!error) {
      callback(null, month.map((item) => {
        console.log(item)
      }));
    } else {
      callback(new Error("Sorry Data Not Found"));
    }
  }, 4000);
};
getMonth(showMonth)
  


