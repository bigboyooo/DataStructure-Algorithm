// function factorialIterative (number) {
//   if (number < 0) {
//     return undefined;
//   }
//   let total = 1;
//   for (let n = number; n > 1; n--){
//     total = total * n
//   }
//   return total;
// }

// console.log(factorialIterative(4));

// function factorial (n) {
//   if (n === 1 || n === 0) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// console.log(factorial(4));

let i = 0;
function recursiveFn () {
  i++;
  recursiveFn();
}

try {
  recursiveFn();
} catch (ex) {
  console.log('i = ' + i + 'error: ' + ex);
}
