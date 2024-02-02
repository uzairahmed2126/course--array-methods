const str = '😊';
let charCode = str.codePointAt();

console.log(String.fromCharCode(charCode));//
console.log(String.fromCodePoint(128522));//😊

console.log(String.fromCodePoint(65, 97, 66, 98));//'aAbB'

console.log(String.fromCodePoint(90, 90, 122))//ZZz


