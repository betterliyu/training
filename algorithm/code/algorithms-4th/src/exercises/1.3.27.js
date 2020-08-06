const { LinkedList } = require('../lib/LinkedList');

class MyList extends LinkedList {
  max() {
    if (this.first === null) {
      return 0;
    }
    let cur = this.first;
    let maxKey = this.first;
    while (cur.next) {
      if (maxKey.key < cur.key) {
        maxKey = cur;
      }
      cur = cur.next;
    }
    return maxKey.item;
  }
}

module.exports = MyList;
