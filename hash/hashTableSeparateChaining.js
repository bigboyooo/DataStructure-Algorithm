const ValuePair = require("../utils/valuePair");

class HashTableSeparateChaining {
  constructor(toStrFn = defaultToString){
    this.toStrFn = toStrFn;
    this.table = {};
  }
  put(key, value){
    if(key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null) {
        this.table[position] = new LinkedList();
      }
      this.table[position].push(new ValuePair(key, value));
      return true;
    }
    return false;
  }
  get(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (linkedList != null && !linkedList.isEmpty) {
      let current = linkedList.getHead();
      while(current != null){
        return current.element.value;
      }
      current = current.next;
    }
  }
  return undefined;
}