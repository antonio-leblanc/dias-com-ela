console.log('oi')
let date1 = new Date("2021-07-31 20:00:00")
let date2 = new Date()

const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
console.log(diffTime + " milliseconds");
console.log(diffDays + " days");

var nDaysSpan = document.getElementById("ndays");
nDaysSpan.innerText = diffDays