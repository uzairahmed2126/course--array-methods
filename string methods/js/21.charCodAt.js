const str = '  abcd';
console.log(str.charCodeAt(0));//32 for space

const string = 'Hello World';
console.log(string.charCodeAt(string.length - 1));

const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// Expected output: "Character code 113 is equal to q"
