const str1 = '5';
console.log(str1.padEnd(1, 'Hey Boi'));

const fullNumber = '2034399002125581';
console.log(fullNumber.padEnd(19, 'asd'));

const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padEnd(fullNumber.length, '*');
console.log(maskedNumber);// "5581************"


console.log('abc'.padEnd(11, '12345678'));

const str = '456789';
console.log(str.padEnd(3 + str.length, '123'));

const num = '123';
console.log(num.padEnd(6, '456'));

const str11 = '123';
console.log(str11.padEnd(5 + 3, '45678'));//12345678

