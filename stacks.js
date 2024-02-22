/** Node: node for a stack. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  

  
  class Stack {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
   
  
    push(val) {
      let node = new Node(val);
      if (this.first) node.next = this.first;
      if (!this.last) this.last = node;
      this.first = node;
      this.size++;
    }
  
    
  
    pop() {
      if (!this.first) throw Error("Empty queue");
      let first = this.first;
      this.first = this.first.next;
      this.size--;
      return first.val;
    }
  
  
    peek() {
      return this.first.val;
  
    }
  
    
  
    isEmpty() {
      return (!this.first) ? true : false;
  
    }
  }
  
  module.exports = Stack;