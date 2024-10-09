class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }
    let temp = this.headNode;
    while (temp.nextNode) {
      temp = temp.nextNode;
    }
    temp.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
  }

  size() {
    let counter = 0;
    let temp = this.headNode;
    while (temp) {
      counter++;
      temp = temp.nextNode;
    }
    return counter;
  }

  head() {
    return this.headNode;
  }

  tail() {
    let temp = this.headNode;
    while (temp.nextNode) {
      temp = temp.nextNode;
    }
    return temp;
  }

  at(index) {
    let counter = 0;
    let temp = this.headNode;
    while (temp) {
      if (counter === index) {
        return temp;
      }
      temp = temp.nextNode;
      counter++;
    }
    return null;
  }

  pop() {
    let curr = this.headNode;
    let prev = null;

    if (!this.headNode) return null;

    while (curr.nextNode) {
      prev = curr;
      curr = curr.nextNode;
    }

    if (prev === null) {
      this.headNode = null;
    } else {
      prev.nextNode = null;
    }
  }

  contains(value) {
    if (!this.headNode) return null;
    let temp = this.headNode;

    while (temp) {
      if (temp.value === value) return true;
      temp = temp.nextNode;
    }
    return false;
  }

  find(value) {
    if (!this.headNode) return null;

    let temp = this.headNode;
    let counter = 0;

    while (temp) {
      if (temp.value === value) return counter;
      temp = temp.nextNode;
      counter++;
    }
    return null;
  }

  toString() {
    if (!this.headNode) return null;
    let temp = this.headNode;
    let listOfArray = [];
    while (temp) {
      listOfArray.push(temp.value);
      temp = temp.nextNode;
    }
    return listOfArray.join(" -> ");
  }

  insertAt(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    const prev = this.at(index - 1);
    const newNode = new Node(value, prev.nextNode);
    prev.nextNode = newNode;
  }
}

let createNode = new LinkedList();

createNode.append("dog");
createNode.append("cat");
// createNode.prepend("Human");

console.log(createNode);
console.log(createNode.size());
console.log(createNode.head());
console.log(createNode.tail());
console.log(createNode.at(3));

// createNode.pop();
// createNode.pop();
// createNode.pop();
// console.log(createNode.contains("Hu"));
console.log(createNode.toString());
console.log(createNode.find("cat"));

console.log(createNode.insertAt(0, "Giraffe"));
console.log(createNode.insertAt(1, "Giraffe"));
console.log(createNode);
