console.log(String.fromCharCode(65, 97, 66, 98));//'aAbB'

console.log(String.fromCharCode(189, 43, 190, 61, 117));

console.log(String.fromCharCode(90, 90, 122))//ZZz

const str = "😊";
let charCode = str.codePointAt();
console.log(charCode);
console.log(String.fromCharCode(charCode));
document.write(String.fromCodePoint(128522));//😊
