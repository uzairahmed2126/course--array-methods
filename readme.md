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
//['apple', 'banana', 'orange', 'grape'] is the array literal, specifying the elements of the array.
```
# Hey i wrote down the explanation of the Array Methods read and enjoy it..
#### [How are browser work's](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)
#### [1.for Each Method](./markdown/1.foreach.md)
#### [2.map Method](./markdown/2.map.md)
#### [3.filter Method](./markdown/3.filter.md)
#### [4.reduce Method](./markdown/4.reduce.md)
#### [5.slice Method](./markdown/5.slice.md)
#### [6.splice Method](./markdown/6.splice.md)
#### [7.sort Method](./markdown/7.sort.md)
#### [8.concat Method](./markdown/8.concat.md)
#### [9.fill Method](./markdown/9.fill.md)
#### [10.includes Method](./markdown/10.includes.md)
#### [11.join Method](./markdown/11.join.md)
#### [12.reverse Method](./markdown/12.reverse.md)
#### [13.push Method](./markdown/13.push.md)
#### [14.pop Method](./markdown/14.pop.md)
#### [15.unshift Method](./markdown/15.unshift.md)
#### [16.shift Method](./markdown/16.shift.md)
#### [17.indexOf Method](./markdown/17.indexOf.md)
#### [18.every Method](./markdown/18.every.md)
#### [19.some Method](./markdown/19.some.md)
#### [20.find Method](./markdown/20.find.md)
#### [21.findIndex Method](./markdown/21.findIndex.md)
#### [22.from Method](./markdown/22.from.md)
#### [23.isArray Method](./markdown/23.isArray.md)
#### [24.flat Method](./markdown/24.flat.md)
# String Methods
#### [1.charAt Method](./string%20methods/markdown/1.charAt.md)
#### [2.lastIndexOf Method](./string%20methods/markdown/2.lastIndexOf.md)
#### [3.slice Method](./string%20methods/markdown/3.slice.md)
#### [4.subString Method](./string%20methods/markdown/4.subString.md)
#### [5.split Method](./string%20methods/markdown/5.split.md)
#### [6.startsWith Method](./string%20methods/markdown/6.startWith.md)
#### [7.endsWith Method](./string%20methods/markdown/7.endsWith.md)
#### [8.concat Method](./string%20methods/markdown/8.concat.md)
#### [9.repeat Method](./string%20methods/markdown/9.repeat.md)
#### [10.trim Method](./string%20methods/markdown/10.trim.md)
#### [11.trimStart Method](./string%20methods/markdown/11.trimStart.md)
#### [12.trimEnd Method](./string%20methods/markdown/12.trimEnd.md)
#### [13.padStart Method](./string%20methods/markdown/13.padStart.md)
#### [14.padEnd Method](./string%20methods/markdown/14.padEnd.md)
#### [15.localeCompare Method](./string%20methods/markdown/15.localeCompare.md)
#### [16.search Method](./string%20methods/markdown/16.search.md)
#### [17.match Method](./string%20methods/markdown/17.match.md)
#### [18.matchAll Method](./string%20methods/markdown/18.matchAll.md)
#### [19.replace Method](./string%20methods/markdown/19.replace.md)
#### [20.replaceAll Method](./string%20methods/markdown/20.replaceAll.md)
#### [21.charCodeAt Method](./string%20methods/markdown/21.charCodeAt.md)
#### [22.charCodePoint Method](./string%20methods/markdown/22.codePointAt.md)
#### [23.at Method](./string%20methods/markdown/23.at.md)
#### [24.fromCharCode Method](./string%20methods/markdown/24.fromCharCode.md)
#### [25.fromCodePoint Method](./string%20methods/markdown/25.fromCodePoint.md)
#### [26.includes Method](./string%20methods/markdown/26.includes.md)
#### [27.normalize Method](./string%20methods/markdown/27.normalize.md)
#### [28.toLowerCase Method](./string%20methods/markdown/28.toLowerCase.md)
#### [29.toUpperCase Method](./string%20methods/markdown/29.toUpperCase.md)
#### [30.toLocaleLowerCase Method](./string%20methods/markdown/30.toLocaleLowerCase.md)
#### [31.toLocaleLowerCase Method](./string%20methods/markdown/31.toLocaleUpperCase.md)
#### [32.toString Method](./string%20methods/markdown/32.tostring.md)
#### [33.valueOf Method](./string%20methods/markdown/33.valueOf.md)
#### [34.raw Method](./string%20methods/markdown/34.raw.md)