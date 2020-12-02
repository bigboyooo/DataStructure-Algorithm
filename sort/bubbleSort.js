// function bubbleSort(array, compareFn = defaultCompare) {
//   const { length } = array;
//   for (let i = 0; i < length; i++){
//     for (let j = 0; j < length - 1; j++){
//       if(compareFn(array[j], array[j + 1]) === compareFn.BIGGER_THAN){
//         swap(array, j, j + 1);
//       }
//     }
//   }
//   return array;
// }

// function defaultCompare(){
//   return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
// }

// function swap(array, a, b){
//   [array[a], array[b]] = [array[b], array[a]];
// }

const { swap } = require('./swap');
console.log(swap([1, 2], 0, 1));