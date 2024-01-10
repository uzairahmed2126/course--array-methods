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
|--------------|----------|------------|--------------|
| Array.length | yes      | no         | no           |

# Hey i wrote down the explanation of the Array Methods read and enjoy it..
#### [How are browser work's](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)
#### [1.For Each Method](./markdown/1.foreach.md)
#### [2.Map Method](./markdown/2.map.md)
#### [3.Filter Method](./markdown/3.filter.md)
#### [4.Reduce Method](./markdown/4.reduce.md.md)
