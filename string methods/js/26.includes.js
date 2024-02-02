const str = 'abcdefghi Hello World! jklmnopqrstuvwxyz';
console.log(str.includes('!', 21));//true
let result = str.indexOf('!');//21
console.log(str.charAt(result));//!