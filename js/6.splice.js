const numbers = [1, 2, 3, 4, 5];
const deleted = numbers.splice(2,5);
console.log(numbers);//spliced
console.log(deleted);

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1,0,'feb');
console.log(months);
// splice(startingVal,numOfDelItems,)