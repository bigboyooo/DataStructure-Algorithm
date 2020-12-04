// import { Compare, defaultCompare } from './defaultCompare.js'
const { Compare, defaultCompare } = require('./defaultCompare');

class Test{
  constructor(test){
    console.log(test);
  }
}


console.log(defaultCompare(1, 2));