console.log(['Z', 'a', 'z', 'ä'].sort(new Intl.Collator('sv').compare));
console.log(['Z', 'a', 'z', 'ä'].sort(new Intl.Collator('sv').compare));
const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase
console.log(a.localeCompare(b));
// Expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// Expected output: 0

// Example 1: Basic comparison
let string1 = 'banana';
let string2 = 'banana';

let result = string1.localeCompare(string2, 'en', { sensitivity: 'base' });
console.log(result); // Output: 0 eqvilant

// Example 2: Comparison with a specific locale (German)
let germanString1 = 'Apfel';
let germanString2 = 'Banane';

let germanResult = germanString1.localeCompare(germanString2, 'de', { sensitivity: 'base' });
console.log(germanResult); // Output: -1 (because 'Apfel' comes before 'Banane' in German)

// Example 3: Comparison with options (case-insensitive)
let caseSensitiveString1 = 'banana';
let caseSensitiveString2 = 'apple';

let caseInsensitiveResult = caseSensitiveString1.localeCompare(caseSensitiveString2, 'en', { sensitivity: 'base' });
console.log(caseInsensitiveResult); // Output: 1 (because 'Banana' comes after 'apple' in a case-insensitive comparison)

const str1 = 'apple';
const str2 = 'banana';
let compare = str1.localeCompare(str2);
console.log(compare);// output is -1 cause the apple comes before banana



