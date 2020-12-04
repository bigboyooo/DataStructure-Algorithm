const defaultCompare = require('../utils/defaultCompare');

class Node {
  constructor(key){
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
  }

  insert(key){
    if(this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  insertNode(node, key) {
    if(this.compareFn(key, node.key) === Compare.LESS_THAN){
      if(node.left == null){
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }
  search(key){}
  inOrderTraverse(){}
  preOrderTravers(){}
  postOrderTraverse(){}
  min(){}
  max(){}
  remove(key){}
}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert