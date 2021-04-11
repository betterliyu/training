import { LinkedList } from '../apis/LinkedList';

export class MyList<T> extends LinkedList<T> {
  delete(k: number): T {
    if (this.first == null) {
      return null;
    }

    if (k === 1) {
      const res = this.first;
      this.first = this.first.next;
      return res.item;
    }

    let cur = this.first;
    let pos = 2;

    while (cur.next != null) {
      if (pos === k) {
        const res = cur.next;
        cur.next = cur.next.next;
        return res.item;
      }
      pos += 1;
      cur = cur.next;
    }

    return null;
  }
}
