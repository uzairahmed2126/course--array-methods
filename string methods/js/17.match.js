const str = 'Hello World!';
console.log(str.match(/[A-Z]/g));//[ 'H', 'W' ]

const str1 = 'The rain in SPAIN mainly in the plain';
console.log(str1.match(/ain/g));//[ 'ain', 'ain', 'ain' ]

const a = 'abcdEFghIjkLMNoP';
console.log(a.match(/[A-Z]/g));