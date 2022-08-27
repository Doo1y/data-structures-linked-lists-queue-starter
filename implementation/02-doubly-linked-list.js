// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
  constructor(val, next = null, prev = null) {
    this.value = val;
    this.next = next;
    this.prev = prev;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    let newNode = new DoublyLinkedNode(val);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      let currNode = this.head;
      newNode.next = currNode;
      currNode.prev = newNode;
      this.head = newNode;
    }

    this.length++
  }


  addToTail(val) {
    let newNode = new DoublyLinkedNode(val);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      let currNode = this.tail;
      newNode.prev = currNode;
      currNode.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  removeFromHead() {
    let oldNode = this.head;
    // account for empty linked list
    if (!this.head) {
      return undefined;
    }
    else if (!this.head.next) {
      this.length = 0
      this.head = this.tail = null;
      return oldNode.value;
    }
    let newHead = this.head.next;
    this.head = newHead;
    this.head.prev = null;
    this.length --;
    return oldNode.value;
  }

removeFromTail() {
  let oldNode = this.tail;
  if (!oldNode) {
    return undefined;
  } else if (!oldNode.prev) {
    this.length = 0;
    this.tail = this.head = null;
    return oldNode.value;
  }
  let newTail = this.tail.prev;
  newTail.next = null;
  this.tail = newTail;
  this.length--;
  return oldNode.value;


  // Write your hypothesis on the time complexity of this method here
}

peekAtHead() {
  if (!this.head) {
    return undefined;
  } return this.head.value;
  // Write your hypothesis on the time complexity of this method here
}

peekAtTail() {
  if (!this.head) {
    return undefined;
  } return this.tail.value;

  // Write your hypothesis on the time complexity of this method here
}
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode
}
