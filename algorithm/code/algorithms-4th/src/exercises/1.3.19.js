/* eslint-disable no-param-reassign */

const { LinkedList } = require('../lib/LinkedList');

class MyList extends LinkedList {
  deleteLast() {
    if (this.first == null) {
      return;
    }

    if (this.first.next == null) {
      this.first = null;
      return;
    }

    let cur = this.first;

    while (cur.next.next != null) {
      cur = cur.next;
    }

    cur.next = null;
  }
}

module.exports = MyList;
