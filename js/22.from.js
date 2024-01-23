const arr = 'hey';
console.log(Array.from(arr));

const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
console.log(set);

// const map = new Map([
//     [1, 2],
//     [2, 4],
//     [4, 8],
//   ]);
//   Array.from(map);
//   console.log(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
    ["1", "a"],
    ["2", "b"],
]);
Array.from(mapper.values());
//   mapper.clear();
console.log(mapper);
// ['a', 'b'];

Array.from(mapper.keys());
console.log(mapper);
// ['1', '2'];
