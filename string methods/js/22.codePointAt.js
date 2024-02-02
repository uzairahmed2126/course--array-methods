const icons = 'abc 👍';
// console.log(icons.codePointAt(4));

const icon = 'abc 👍';
// console.log(icon.charCodeAt(4));


const str = "A😊";
console.log(str.charCodeAt(0)); // Output: 65 (UTF-16 code unit for "A")
console.log(str.charCodeAt(1)); // Output: 55357 (High surrogate for the emoji)
console.log(str.charCodeAt(2)); // Output: 56842 (Low surrogate for the emoji)

const str1 = "A😊";
console.log(str1.codePointAt(0)); // Output: 65 (Unicode code point for "A")
console.log(str1.codePointAt(1)); // Output: 128522 (Unicode code point for the emoji)
console.log(str1.codePointAt(2)); // Output: 128522 (Unicode code point for the emoji)
console.log(str1.length);//3


const str2 = "😊";
console.log(str2.codePointAt()); // Output: 128522 (Unicode code point for the emoji)


