const dotted = 'i̇stanbul';
console.log(`EN-US: ${dotted.toLocaleUpperCase('en-US')}`);
// Expected output: "i̇stanbul"
console.log(`TR: ${dotted.toLocaleUpperCase('tr')}`);
// Expected output: "istanbul"

"ALPHABET".toLocaleUpperCase(); // 'alphabet'

"\u0130".toLocaleUpperCase("tr") === "i"; // true
"\u0130".toLocaleUpperCase("en-US") === "i"; // false

const locales = ["tr", "TR", "tr-TR", "tr-u-co-search", "tr-x-turkish"];
console.log("\u0069".toLocaleUpperCase() === "I"); // true

const lower = 'istanbul';
const locale = 'tr';
console.log(lower.toLocaleUpperCase(locale));