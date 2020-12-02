exports.createNonSortedArray = function (size) {
  const array = [];
  for (let i = size; i > 0; i--) {
    array.push(i);
  }
  return array;
}

// let array = this.createNonSortedArray(5);
// console.log(array)