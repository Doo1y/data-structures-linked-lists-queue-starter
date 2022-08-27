const { SinglyLinkedList, SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    let newTail = new SinglyLinkedNode(value);
    if (!this.head) {
      this.head = newTail;
    }
    if (this.tail) {
      this.tail.next = newTail;
    }

    this.tail = newTail;
    this.length++;
    return this.length;

}

  dequeue() {
    let removeNode = this.head;
    if (!this.head) {
      return null;
    } else if (!this.head.next) {
      let removedNode = this.head
      this.head = this.tail = null;
      this.length --;
      return removedNode.value;
    } else if (this.head.next) {
      this.tail = null;
      this.head = this.head.next;
      // update the length by -1
      this.length--;
      // return the removed node
      return removeNode.value;
    }
  }
}

module.exports = {
  Queue,
  SinglyLinkedNode
}
