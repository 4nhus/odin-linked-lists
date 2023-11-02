function Node(value, nextNode) {
  this.value = value || null;
  this.nextNode = nextNode || null;
}

function LinkedList(headNode) {
  this.headNode = headNode || null;
  this.tailNode = null;
  this.listSize = headNode ? 1 : 0;

  // Adds a new node containing value to the end of the list.
  this.append = function (value) {
    if (this.tailNode) {
      this.tailNode.nextNode = new Node(value);
      this.tailNode = this.tailNode.nextNode;
    } else {
      this.headNode = new Node(value);
      this.tailNode = this.headNode;
    }
    this.listSize++;
  };

  // Adds a new node containing value to the start of the list.
  this.prepend = function (value) {
    if (this.headNode) {
      const newHead = new Node(value, this.headNode);
      this.headNode = newHead;
    } else {
      this.headNode = new Node(value);
      this.tailNode = this.headNode;
    }
    this.listSize++;
  };

  // Returns the total number of nodes in the list.
  this.size = function () {
    return this.listSize;
  };

  // Returns the first node in the list.
  this.head = function () {
    return this.headNode;
  };

  // Returns the last node in the list.
  this.tail = function () {
    return this.tailNode;
  };

  // Returns the node at the given index.
  this.at = function (index) {
    if (index >= this.listSize || index < 0) {
      return null;
    }

    let current = this.headNode;

    while (index > 0 && current) {
      current = current.nextNode;
      index--;
    }

    return current;
  };

  // Removes the last element from the list.
  this.pop = function () {
    if (this.listSize === 1) {
      this.headNode = null;
      this.tailNode = null;
    } else if (this.listSize > 1) {
      let previous = null;
      let current = this.headNode;

      while (current !== this.tailNode) {
        previous = current;
        current = current.nextNode;
      }

      previous.nextNode = null;
      this.tailNode = previous;
      this.listSize--;
    }
  };

  // Returns true if the passed in value is in the list and otherwise returns false.
  this.contains = function (value) {
    return this.find(value) ? true : false;
  };

  // Returns the index of the node containing value, or null if not found.
  this.find = function (value) {
    let current = this.headNode;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      } else {
        current = current.nextNode;
        index++;
      }
    }

    return null;
  };

  // Represents your LinkedList objects as strings, so you can print them out
  // and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  this.toString = function () {
    let string = "";
    let current = this.headNode;
    while (current) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    string += "null";
    return string;
  };

  // Inserts a new node with the provided value at the given index.
  this.insertAt = function (value, index) {
    if (index === 0) {
      this.prepend(value);
    } else if (index >= list.size()) {
      this.append(value);
    } else {
      let previous = null;
      let current = this.headNode;
      let counter = 0;

      while (current) {
        if (counter !== index) {
          counter++;
          previous = current;
          current = current.nextNode;
        } else {
          previous.nextNode = new Node(value, current);
          break;
        }
      }
    }
  };

  // Removes the node at the given index.
  this.removeAt = function (index) {
    if (index === 0) {
      this.headNode = this.headNode.nextNode;
      if (!this.headNode) {
        this.tailNode = null;
      }
    } else if (index === this.listSize - 1) {
      this.tailNode = this.at(index - 1);
      if (this.tailNode) {
        this.tailNode.nextNode = null;
      } else {
        this.headNode = null;
      }
    } else if (index > 0 && index < this.listSize - 1) {
      let previous = null;
      let current = this.headNode;
      let counter = 0;

      while (current) {
        if (counter !== index) {
          counter++;
          previous = current;
          current = current.nextNode;
        } else {
          previous.nextNode = current.nextNode;
          break;
        }
      }
    }
  };
}
