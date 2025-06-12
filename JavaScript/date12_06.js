console.log("Hello World");

function test() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x);
  }
  console.log(x);
}
test();

let x = 10;
if (true) {
  let x = 20;
  console.log(x);
}
console.log(x);
//Recursion
// function printNumber(n) {
//   if (n > 100) return;
//   console.log(n);
//   printNumber(n + 1);
// }
// printNumber(1);

// function Factorial(n) {
//   if (n == 0 || n == 1) {
//     return 1;
//   } else {
//     return n*Factorial(n - 1);
//   }
// }
// console.log(Factorial(5));
