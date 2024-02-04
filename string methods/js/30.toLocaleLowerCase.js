const dotted = 'İstanbul';
console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);
// Expected output: "i̇stanbul"
console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);
// Expected output: "istanbul"

"ALPHABET".toLocaleLowerCase(); // 'alphabet'

"\u0130".toLocaleLowerCase("tr") === "i"; // true
"\u0130".toLocaleLowerCase("en-US") === "i"; // false

const locales = ["tr", "TR", "tr-TR", "tr-u-co-search", "tr-x-turkish"];
console.log("\u0130".toLocaleLowerCase(locales) === "`I"); // false

const lower = 'istanbul';
const local = 'tr';
console.log(lower.toLocaleUpperCase(local));