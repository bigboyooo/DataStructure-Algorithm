exports.swap = function (array, a, b) {
  // const temp = array[a];
  // array[a] = array[b];
  // array[b] = temp;
  [array[a], array[b]] = [array[b], array[a]];
  // return array;
  console.log(array);
}

// module.exports = swap;