const str = '123';
console.log(str.at())

// A function which returns the last character of a given string
function returnLast(arr) {
    return arr.at(-1);
  }
  
  let invoiceRef = "myinvoice01";
  
  console.log(returnLast(invoiceRef)); // '1'
  
  invoiceRef = "myinvoice02";
  
  console.log(returnLast(invoiceRef)); // '2'

  let str1 = '1234';
  console.log(returnLast(str1)); // '4'


  
  