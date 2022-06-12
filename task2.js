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
    
    month.map((data) => {
      console.log(data)
    })

    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"));
    }
  }, 4000);
};
getMonth(showMonth)
  


