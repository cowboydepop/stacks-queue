/** Node: node for a queue. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  

  
    enqueue(val) {
      let node = new Node(val);
      if (!this.first) this.first = node;
      if (this.last) this.last.next = node;
      this.last = node;
      this.size++;
    }
  
    
  
    dequeue() {
      if (!this.first) throw Error("Queue is empty.");
      let first = this.first;
      this.first = this.first.next;
      this.size--;
      return first.val;
    }
  
   
  
    peek() {
      return this.first.val;
    }
  
    
  
    isEmpty() {
      return (!this.first) ?  true  :  false;
    }
  }
  
  module.exports = Queue;