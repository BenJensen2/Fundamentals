"use strict";
const Node = require("./Node.js");

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(newData) {
    let tempNode = new Node(newData);
    tempNode.next = this.head;
    this.head = tempNode;
    return this;
  }

  isEmpty() {
    return this.head === null;
  }

  insertAtBack(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
      return;
    }

    let runner = this.head;

    while (runner.next !== null) {
      runner = runner.next;
    }

    runner.next = newNode;
  }

  printList() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return false;
    } else {
      let temp = this.head;
      while (temp != null) {
        process.stdout.write(String(temp.data));
        process.stdout.write(" -> ");
        temp = temp.next;
      }
      console.log("null");
      return true;
    }
  }

  getHead() {
    return this.head;
  }

  setHead(newHead) {
    this.head = newHead;
    return this;
  }

  display() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return null;
    } else {
      let str = "";
      let runner = this.head;
      while (runner !== null) {
        str += runner.data;
        if (runner.next !== null) {
          str += " -> ";
        }
        runner = runner.next;
      }
      str += "null";
      console.log("Current Linked List: ", str);
      return str;
    }
  }

  seedFromArr(arr) {
    for (const element of arr) {
      this.insertAtBack(element);
    }
  }
}
