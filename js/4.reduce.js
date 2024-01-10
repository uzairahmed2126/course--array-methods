const numbers = [1, "", 3, 4, 5];
// numbers.reduce((value, index, arr) => console.log(value, index, arr));
const total = numbers.reduce(num, -Infinity);
function num(accumulater, value) {
    if (accumulater < value) {
        return accumulater
    }

    return value
}
console.log(Infinity)
// 1 * 2 = 2
// 2 * 3 = 6
// 6 * 4 = 24
// 24 * 5 = 120
