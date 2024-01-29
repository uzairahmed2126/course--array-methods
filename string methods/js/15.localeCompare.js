console.log(['Z', 'a', 'z', 'ä'].sort(new Intl.Collator('ll').compare));
console.log(['Z', 'a', 'z', 'ä'].sort(new Intl.Collator('ab').compare));
const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase
console.log(a.localeCompare(b));
// Expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// Expected output: 0


