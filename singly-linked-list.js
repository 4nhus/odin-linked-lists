function Node(value, nextNode) {
  this.value = value || null;
  this.nextNode = nextNode || null;
}

function LinkedList(headNode) {
  this.headNode = headNode || null;
  this.tailNode = null;
  this.listSize = headNode ? 1 : 0;

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

  this.prepend = function (value) {
    if (this.headNode) {
      const newHead = new Node(value);
      newHead.nextNode = this.headNode;
      this.headNode = newHead;
    } else {
      this.headNode = new Node(value);
      this.tailNode = this.headNode;
    }
    this.listSize++;
  };

  this.size = function () {
    return this.listSize;
  };

  this.head = function () {
    return this.headNode;
  };

  this.tail = function () {
    return this.tailNode;
  };

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

  this.contains = function (value) {
    return this.find(value) ? true : false;
  };

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
          previous.nextNode = new Node(value);
          previous.nextNode.nextNode = current;
          break;
        }
      }
    }
  };

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
