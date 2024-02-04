const str = new String('Hello World');
console.log(str);//String {'Hello World'}

String.prototype.valueOf = () => "Overridden";
console.log(`${"foo"}`); // "foo"
console.log(`${new String("foo")}`); // 'foo'

const num = 123;
console.log(num.valueOf());//123






