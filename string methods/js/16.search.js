const text = 'The rain in SPAIN stays mainly in the plain';
// console.log(text.search(/ain/));//5
// console.log(text.search('ain'));//5
// console.log(text.search(/AIn/));//-1
// console.log(text.search(/AIN/));//14
// console.log(text.search(/AIN/i));//5
// console.log(text.search(/aiN/i));//5
const str = "hEy JudE";
const re = /[A-Z]/;
const reDot = /[.]/;
console.log(str.search(re)); // returns 1, which is the index of the first capital letter "E"
console.log(str.search(reDot)); // returns -1 cannot find '.' dot punctuation
