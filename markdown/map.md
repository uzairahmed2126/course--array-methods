```javascript
const numbers = [1,2,3,4,5];
    numbers.map((value,index,arr)=> console.log(value,index,arr));
```
### map method returns a new array.
### It is a callback function, and in this variable it is have 3 parameters. The value will be shown the elements of the array (1,2,3,4,5) and the index will be shown the index of the array (0,1,2,3,4) and the last one parameter will be shown the whole array with the iterator. We have 5 elements then the array will be shown five times the array.


```output
//output
1 0 [ 1, 2, 3, 4, 5 ]
2 1 [ 1, 2, 3, 4, 5 ]
3 2 [ 1, 2, 3, 4, 5 ]
4 3 [ 1, 2, 3, 4, 5 ]
5 4 [ 1, 2, 3, 4, 5 ]
```
##### [Click And See Code Of JavaScript](../js/2.map.js)
