const str1 = '5';

console.log(str1.padStart(1, 'Hey Boi'));

const fullNumber = '2034399002125581';
console.log(fullNumber.padStart(19, 'asd'));

const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
console.log(maskedNumber);// "************5581"
console.log('abc'.padEnd(11, '12345678'));

const str = '456789';
console.log(str.padStart(3 + str.length, '123'));

const num = '123';
console.log(num.padStart(5, '10'));