const a = [12324, 234, 3, 234, 23];
a.fill(2);
console.log(a);

const alphabets = ['a', 'b', 'c', 'd'];
const numbers = [1, 2, 3, 4];
const result = alphabets.fill('.');
console.log(result);

const obj = {
    str: ['asdf'],
    num: [1, 2, 3]
};
const finalResult = obj.str.fill(111);
console.log(finalResult)

// fill(value, start)
const arr = [0,1,2,3,4];
const startAtIndex3 = arr.fill(10,4);
console.log(startAtIndex3);

// fill(value, start, end)
const arr2 = [0,1,2,3,4];
const startAndEnd = arr.fill(0,2,4);
console.log(startAndEnd);
