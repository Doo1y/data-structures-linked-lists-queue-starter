// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) { // Array.prototype.unshift()
    // instantiate an node object;
    let newNode = new SinglyLinkedNode(val);

    // assign the new node's next property to the current head
    newNode.next = this.head

    // slide the head pointer to the new node
    this.head = newNode;

    // update the instance's length;
    this.length++;
    return {
      head: {
        value: this.head.value,
        next: this.head.next
      },
      length: this.length
    }
    // Write your hypothesis on the time complexity of this method here
    /** time complexity of SinglyLinkedList.prototype.addToHead(val) should be O(1):
     * Reason: 
     * Every indidivudual operation in the method has a constant time rate...
     * 1) effeicency of assigning next property to the head: constant O(1);
     * 2) effeicency of moving over the head pointer to the new instance: constant O(1);
     * 3) increasing the instance's length property: constant O(1);
     * */
  }


  addToTail(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.length++;
    } else {
      let currNode = this.head;
      while (currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = newNode;
      this.length++;
    } return {
      head: {
        value: this.head.value,
        next: this.head.next
      },
      length: this.length
    }
    // Write your hypothesis on the time complexity of this method here
    /** time complexity of SinglyLinkedList.prototype.addToTail(val) should be O(n):
     * Reason: 
     * While almost all the individual operations with this method have 
     * the time complexity of O(1), there is a while loop that iterates through 
     * the linked list values, which is dependent the length (n) of the linked list
     * */
  }

  removeFromHead() {
    // account for empty linked list
    if (!this.head) {
      return undefined;
    }
    // assign a variable to hold the current node data
    let removeNode = this.head;

    // slide the head over to the node to the right 
    this.head = this.head.next;

    // update the length by -1
    this.length--;

    // return the removed node
    return removeNode;

    // Write your hypothesis on the time complexity of this method here
    /** time complexity of SinglyLinkedList.prototype.removeFromHead(val) should be O(n):
     * Reason: 
     * Every operation in the method has a constant time rate
     * */
  }

  removeFromTail() {
    // account for empty linked list
    if (!this.head) {
      return undefined;
    } else if (!this.head.next) { // account for linked list length of 1
      let lastNode = this.head;
      this.head = null;
      this.length--;
      return lastNode;
    }// head -> 3 -> 2 -> 1 -> null
    // assign a placeholder variable to the head
    let secondLastNode = this.head; // 3
    let lastNode = secondLastNode.next; // 2
    // iterate through the existing nodes till next one is null
    while (lastNode.next) {
      lastNode = lastNode.next;
    } // 2 -> 1 -> null
    let removedTail = lastNode;
    secondLastNode.next = lastNode = null;
    // assign the second to last node to skip the last node
    this.length--;
    return removedTail;
    // return the value of the node that is skipped
    // Write your hypothesis on the time complexity of this method here
  }

  peekAtHead() {
    if (!this.head) {
      return undefined;
    } return this.head.value
    // Write your hypothesis on the time complexity of this method here
  }


  print() {
    if (!this.head) {
      return;
    }
    let current = this.head;

    while (current) {
      console.log(current.value); // process.stdout.write is
      current = current.next;                       // used to keep values all
    }                                               // values on the same line
    // Write your hypothesis on the time complexity of this method here
  }


}


module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode
}
