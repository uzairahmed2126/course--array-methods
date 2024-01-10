# Introduction of an array.
### 1.The array (object) enables storing a collection of multiple items under a single variable name. It stores items in the form of a homogeneous sequence and has methods for performing common array operations.
### 2.If we don't have an array, then we need to use multiple variables to add values one by one. This is an annoying and error-prone way to write code. That's why we have arrays.
# Creating arrays.
## Array consist of square brackets and items that are separated by commas.
### 1. Let's make a list of a tea ingredients.
```JavaScript
    const tea = ["milk","water","tea leaf","tea spices","sugar"];
    console.log(tea);
```
### 2. In the above example, each item is a string, but in an array we can store various data types — strings, numbers, objects, and even other arrays. We can also mix data types in a single array — we do not have to limit ourselves to storing only numbers in one array, and in another only strings. For example:
```JavaScript
    const sequence = [1, 1, 2, 3, 5, 8, 13,true,false,3.3];
    const random = ["tree", 795, [0, 1, [2]]];
```
# The length property, A nonnegative integer less than 2^32(4,294,967,295).
| Property     | Writable | Enumerable | Configurable |
| ------------ | -------- | ---------- | ------------ |
| Array.length | yes      | no         | no           |

```JavaScript

const listA = [1, 2, 3];
const listB = new Array(6);

console.log(listA.length);
// 3

console.log(listB.length);
// 6

listB.length = 2 ** 32; // 4294967296
// RangeError: Invalid array length

const listC = new Array(-100); // Negative numbers are not allowed
// RangeError: Invalid array length
```

# Array methods and empty slots.
###  Array methods have different behaviors when encountering empty slots in sparse arrays. In general, older methods (e.g. forEach) treat empty slots differently from indices that contain undefined.

### Methods that have special treatment for empty slots include the following: `concat()`, `copyWithin()`, `every()`, `filter()`, `flat()`, `flatMap()`, `forEach()`, `indexOf()`, `lastIndexOf()`, `map()`, `reduce()`, `reduceRight()`, `reverse()`, `slice()`, `some()`, `sort()`, and `splice()`. Iteration methods such as `forEach` don't visit empty slots at all. Other methods, such as `concat`, `copyWithin`, etc., preserve empty slots when doing the copying, so in the end, the array is still sparse.

```JavaScript
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
// Output:
// 0: red
// 1: yellow
// 2: blue
// 5: purple
console.log(colors) // ['purple', empty × 2, 'blue', 'yellow', 'red']
```
### Newer methods (e.g., keys) do not treat empty slots specially and treat them as if they contain `undefined`. Methods that conflate empty slots with `undefined` elements include the following: `entries()`, `fill()`, `find()`, `findIndex()`, `findLast()`, `findLastIndex()`, `includes()`, `join()`, `keys()`, `toLocaleString()`, `toReversed()`, `toSorted()`, `toSpliced()`, `values()`, and `with()`.

```javascript
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
const iterator = colors.keys();
for (const key of iterator) {
  console.log(`${key}: ${colors[key]}`);
}
// Output
// 0: red
// 1: yellow
// 2: blue
// 3: undefined
// 4: undefined
// 5: purple

const newColors = colors.reverse(); // ['purple', undefined, undefined, 'blue', 'yellow', 'red']
```
# Array Literal.
### An array literal is a syntactical way to create an array in programming languages, including JavaScript. It provides a concise and convenient way to define an array with a list of elements. In JavaScript, an array literal is defined using square brackets `[]` and can contain zero or more values separated by commas.

#### Here is a simple example of an array literal in JavaScript:

```javascript
const fruits = ['apple', 'banana', 'orange', 'grape'];
//In this example:

//const declares a constant variable.
//fruits is the variable name assigned to the array.
//['apple', 'banana', 'orange', 'grape'] is the array literal, specifying the elements of the array.
```
# Hey i wrote down the explanation of the Array Methods read and enjoy it..
#### [How are browser work's](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)
#### [1.For Each Method](./markdown/1.foreach.md)
#### [2.Map Method](./markdown/2.map.md)
#### [3.Filter Method](./markdown/3.filter.md)
#### [4.Reduce Method](./markdown/4.reduce.md.md)
