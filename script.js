const hello = "Hello";
const falsyValue = 0;
const nullish = null;
const num = 1;
const falsy = undefined;
// If the first operand is false and second operand is true, then it will be returned;
const result = falsyValue || hello;
// That means, in logical AND if any operand is false, then the falsy value will be returned;
const result2 = hello || falsy;
// //
// const result3 = hello && num;
console.log(result, result2);