
// compare function
// const alphabets = ['d', 'c', 'b', 'a'];
// function compareFucntion(a, b) {
//     if (a < b) {
//         return -1;
//     } else if (a > b) {
//         return 1;
//     }
//     return 0;
// }
// alphabets.sort(compareFucntion)
// console.log(alphabets)
/*     for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n - i - 1; j++)
        {
            int currentEl = array[j];
            int nextEl = array[j + 1];
            if (currentEl > nextEl)
            {
                int temp = currentEl;
                array[j] = nextEl;
                array[j + 1] = currentEl;
                return 0;
            }
        }
    }*/

// const a = [22345, 2435, 14, 14, 1, 0];
// mannual method to sort array.
const a = ['d', 'c', 'b', 'a'];
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i; j++) {
        let currentEl = a[j];
        let nextEl = a[j + 1];
        if (currentEl > nextEl) {
            a[j] = nextEl;
            a[j + 1] = currentEl;
        };
    };
};
console.log(a)

// without compare function
const arr = [256, 64, 32, 16, 8, 4, 2];
console.log(arr.sort()) // [16,  2, 256, 32,4, 64,   8]

// with compare function
arr.sort((a, b) => {
    return a - b;
});
console.log(arr) // [2,  4,   8, 16,32, 64, 256]