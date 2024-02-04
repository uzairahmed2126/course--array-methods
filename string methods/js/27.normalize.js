const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

// console.log(name1,name2);
// console.log(name1 === name2);
// console.log(name1.length === name2.length);

const name1NFC = name1.normalize('NFC');
const name2NFC = name2.normalize('NFC');

console.log(name1NFC , name2NFC);
console.log(name1NFC === name2NFC);
console.log(name1NFC.length === name2NFC.length)


let string1 = "\u00F1"; // ñ
let string2 = "\u006E\u0303"; // ñ

string1 = string1.normalize("NFD");
string2 = string2.normalize("NFD");

console.log(string1 === string2); // true
console.log(string1.length); // 2
console.log(string2.length); // 2


