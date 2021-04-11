import { LinkedList } from '../apis/LinkedList';

export class MyList<T> extends LinkedList<T> {
  deleteLast(): void {
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
