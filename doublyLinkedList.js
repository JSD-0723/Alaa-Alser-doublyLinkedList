class Node {
    constructor(val) {
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    push(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
    }
  
    pop() {
      if (!this.tail) return undefined;
      const removed = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = removed.prev;
        this.tail.next = null;
        removed.prev = null;
      }
      this.length--;
      return removed;
    }
  
    shift() {
      if (!this.head) return undefined;
      const removed = this.head;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = removed.next;
        this.head.prev = null;
        removed.next = null;
      }
      this.length--;
      return removed;
    }
  
    unshift(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
      this.length++;
    }
  
    get(index) {
      if (index < 0 || index >= this.length) return null;
      let current;
      if (index <= this.length / 2) {
        current = this.head;
        for (let i = 0; i < index; i++) {
          current = current.next;
        }
      } else {
        current = this.tail;
        for (let i = this.length - 1; i > index; i--) {
          current = current.prev;
        }
      }
      return current;
    }
  
    set(index, val) {
      const foundNode = this.get(index);
      if (foundNode) {
        foundNode.val = val;
        return true;
      }
      return false;
    }
  
    insert(index, val) {
      if (index < 0 || index > this.length) return false;
      if (index === 0) {
        this.unshift(val);
        return true;
      }
      if (index === this.length) {
        this.push(val);
        return true;
      }
      const newNode = new Node(val);
      const beforeNode = this.get(index - 1);
      const afterNode = beforeNode.next;
      beforeNode.next = newNode;
      newNode.prev = beforeNode;
      newNode.next = afterNode;
      afterNode.prev = newNode;
      this.length++;
      return true;
    }
  
    remove(index) {
      if (index < 0 || index >= this.length) return undefined;
      if (index === 0) return this.shift();
      if (index === this.length - 1) return this.pop();
      const removedNode = this.get(index);
      const beforeNode = removedNode.prev;
      const afterNode = removedNode.next;
      beforeNode.next = afterNode;
      afterNode.prev = beforeNode;
      removedNode.prev = null;
      removedNode.next = null;
      this.length--;
      return removedNode;
    }
  }
  
  module.exports = DoublyLinkedList;
  