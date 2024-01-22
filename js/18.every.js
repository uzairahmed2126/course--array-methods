const arr = [1, 2, 3, 4, 5];
let result = arr.every(isLessThanZero);
function isLessThanZero(item) {
    return 0 < item;
}
console.log(result);

const userNames = [{
    firstName: 'Uzair',
    lastName: 'Ahmed'
}]
let ans = userNames.every(function (person) { person.firstName == undefined });
console.log(ans)