const DOES_NOT_EXIST = -1;

function sequentialSearch(array, value, equalsFn = defaultEquals) {
  for (let i = 0; i < array.length; i++) {
    if (equalsFn(value, array[i])) {
      return i;
    }
  }
  return DOES_NOT_EXIST;
}

function defaultEquals (a, b) {
  return a === b;
}

console.log(sequentialSearch([5, 4, 3, 2, 1], 3));