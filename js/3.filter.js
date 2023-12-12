const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter((item, index, array) => {
    if (item % 2 == 0) {
        return item ? item : item;
    }
})
console.log(even)

const people = [
    {name:'uzair',age:20},
    {name:'adnan',age:21},
    {name:'sohail',age:22}
]
const filterdVal = people.filter((value)=>{
    return value.age>21
})
console.log(filterdVal)

// array takes same index of same data like array of 1 value is 4 and index is 0 rest duplicate values takes the same index of the one value already
// 4th index is 0 and rest 4th index is also 0
const int = [4,3,9,0,4,5,0,4,];
const filterdIntVal = int.filter((value,index,array)=>{
    return (array.indexOf(value)===index);
})
console.log(filterdIntVal)