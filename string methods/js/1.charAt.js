// let a = 10; //0000000000001010
// // a <<= 2;
// a>>=5;
// console.log(a);//00000000001010
// let b = 5n;
// b <<= 2n; // 20n
// console.log(b)
const a = 10; //  00000000000000000000000000001010
const b = 2; //   00000000000000000000000000000010 //two bit ahead
const c = -5;//  1111111111111111TTT111011

console.log(a >> b); //  00000000000000000000000000000001
// Expected output: 1

// console.log(c >> b);//  11111111111111111111111111111110                 
// Expected output: -2
const str = 'asdf';
let findIndex = str.charAt(2);
console.log(findIndex); //d

const alphabets = 'abcdefghijklmnopqrstuvwxyz';
let result;
result = alphabets.charAt(3);
console.log(result);



