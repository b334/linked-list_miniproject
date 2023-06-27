class Node {
  constructor(value) {
    this._value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._size = 0;
  }

  isEmpty() {
    return this._size === 0;
  }

  insertFirst(value) {
    const newNode = new Node(value);
    newNode.next = this._head;
    this._head = newNode;
    this._size++;
  }

  insertLast(value) {
    if (this.isEmpty()) {
      this.insertFirst(value);
      return;
    }
    const newNode = new Node(value);
    let currentNode = this._head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this._size++;
  }

  insertAt(index, value) {
    if (index === 0) {
      linkedList.insertFirst(value);
      return;
    }
    if (index < this._size) {
      let count = 0;
      let previousNode;
      let currentNode = this._head;
      while (count < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        count++;
      }
      const newNode = new Node(value);
      previousNode.next = newNode;
      newNode.next = currentNode;
      this._size++;
    } else alert(`Please choose index between 0 and ${this._size - 1}`);
  }

  getAt(index) {
    if (index === 0) {
      return this._head;
    }
    if (index < this._size) {
      let count = 0;
      let currentNode = this._head;
      while (count < index) {
        currentNode = currentNode.next;
        count++;
      }
      return currentNode;
    } else alert(`Please choose index between 0 and ${this._size - 1}`);
  }

  removeAt(index) {
    if (index === 0) {
      this._head = this._head.next;
      this._size--;
      return;
    }
    if (index < this._size) {
      let count = 0;
      let currentNode = this._head;
      let previousNode, succeedingNode;
      while (count < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        count++;
      }

      succeedingNode = currentNode.next;
      previousNode.next = succeedingNode;
      this._size--;
    } else alert(`Please choose index between 0 and ${this._size - 1}`);
  }

  clearAll() {
    this._head = null;
    this._size = 0;
  }

  printListData() {
    let currentNode = this._head;
    let count = 0;
    while (count < this._size) {
      console.log('currentNode,', currentNode);
      currentNode = currentNode.next;
      count++;
    }
  }
}
const linkedList = new LinkedList();
linkedList.insertLast(33);
linkedList.insertLast(44);
linkedList.insertLast(55);
linkedList.insertFirst(22);
linkedList.insertLast(66);
linkedList.insertLast(77);
linkedList.insertFirst(11);
linkedList.insertLast(3333);
linkedList.insertAt(3, 900);
linkedList.removeAt(6);
console.log(linkedList.getAt(5));
linkedList.printListData();
console.log('After clear');
linkedList.clearAll();
linkedList.printListData();
