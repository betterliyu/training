const { LinkedList } = require('../lib/LinkedList');

class MyList extends LinkedList {
  delete(k) {
    if (this.first == null) {
      return null;
    }

    if (k === 1) {
      const res = this.first;
      this.first = this.first.next;
      return res;
    }

    let cur = this.first;
    let pos = 2;

    while (cur.next != null) {
      if (pos === k) {
        const res = cur.next;
        cur.next = cur.next.next;
        return res;
      }
      pos += 1;
      cur = cur.next;
    }

    return null;
  }
}

exports = MyList;
