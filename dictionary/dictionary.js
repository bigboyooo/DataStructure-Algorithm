const defaultToString = require('../utils/defaultToString');

class Dictionary {
  constructor(toStrFn = defaultToString){
    this.toStrFn = toStrFn;
    this.table = {};
  }
}

// console.log(defaultToString('item'));