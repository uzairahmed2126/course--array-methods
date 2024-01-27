const str = 'Hello World!'
console.log(str.slice(0, 4));//Hell
console.log(str.slice(0, Infinity));//Hello World!
console.log(str.slice(0, str.length));//Hello World!
console.log(str.slice(6, 12));//World!

