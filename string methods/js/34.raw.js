const filePath = String.raw`Hello World ${'!'}`;
console.log(filePath);

console.log(String.raw({ raw: 'test' }, 0, 1, 2)); // 't0e1s2t'
