//find the maximum value in a list using linked lists

class Node {
  constructor(data) {
    this.head = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(data) {
    const newNode = new Node(data);
    //first check if the list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //there is a head
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  removeNode(data) {
    //first check if the list is empty
    if (!this.head) {
      return;
    }
    //check for the first item
    if (this.head.data === data) {
      this.head = this.head.next;
    }
    //loop over the list
    let current = this.head;
    while (current) {
      if (current.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }
  //propagating the list
  traverse(callback) {
    let current = this.head;
    while (current) {
      callback(current);
      current = current.next;
    }
  }

  findMax(node) {
    let max = Number.NEGATIVE_INFINITY;
    let current = this.head;
    while (current) {
      if (current.head > max) {
        max = current.head;
      }
      current = current.next;
    }
    return max;
  }
}

const list = new LinkedList();
list.addNode(10);
list.addNode(4);
list.addNode(18);
list.addNode(34);
list.addNode(35);

console.log(list.findMax());
