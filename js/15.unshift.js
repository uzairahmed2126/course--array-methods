const str = ['c', 'd', 'e'];
str.unshift('a', 'b');
console.log(str);

// without compare function
const arr = [256, 64, 32, 16, 8, 4, 2];
console.log(arr.sort()) // [16,  2, 256, 32,4, 64,   8]

// with compare function
arr.sort((a, b) => {
    return a - b;
});
console.log(arr) // [2,  4,   8, 16,32, 64, 256]