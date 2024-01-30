const text = 'The rain in SPAIN stays mainly in the plain';
console.log(text.search(/ain/));//5
console.log(text.search('ain'));//5
console.log(text.search(/AIn/));//-1
console.log(text.search(/AIN/));//14
console.log(text.search(/AIN/i));//5
console.log(text.search(/aiN/i));//5
