const str = new String('Hello World');
console.log(`${str}`);
String.prototype.toString = () => "Overridden";
console.log(`${"foo"}`); // "foo"
console.log(`${new String("foo")}`); // "Overridden"


const num = 123;
console.log(num.toString());//'123'
