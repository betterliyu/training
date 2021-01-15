class Node {
  constructor() {
    this.expon = 0;
    this.coef = 0;
    this.next = null;
  }
}

function add(p1, p2) {
  let result = new Node();
  let cur = result;
  while (p1 != null && p2 != null) {
    if (p1.expon > p2.expon) {
      cur.next = p1;
      p1 = p1.next;
    } else if (p1.expon < p2.expon) {
      cur.next = p2;
      p2 = p2.next;
    } else {
      const newNode = new Node();
      newNode.expon = p1.expon;
      newNode.coef = p1.coef + p2.coef;
      cur.next = newNode;
      p1 = p1.next;
      p2 = p2.next;
    }
    cur = cur.next;
  }
  if (p1 != null) {
    cur.next = p1;
  } else if (p2 != null) {
    cur.next = p2;
  }
  return result.next;
}

function multiply(p1, p2) {
  let cur1 = p1;
  let res = null;
  while (cur1) {
    let exp = null;
    let expCur = null;
    let cur2 = p2;
    while (cur2) {
      const node = new Node();
      node.coef = cur1.coef * cur2.coef;
      node.expon = cur1.expon + cur2.expon;
      if (!exp) {
        expCur = node;
        exp = expCur;
      } else {
        expCur.next = node;
      }
      expCur = node;
      cur2 = cur2.next;
    }
    if (res) {
      res = add(res, exp)
    } else {
      res = exp;
    }
    cur1 = cur1.next;
  }
  return res;
}



const n1 = new Node();
n1.expon = 4;
n1.coef = 3;
const n2 = new Node();
n2.expon = 2;
n2.coef = -5;
const n3 = new Node();
n3.expon = 1;
n3.coef = 6;
const n4 = new Node();
n4.expon = 0;
n4.coef = -2;
n1.next = n2;
n2.next = n3;
n3.next = n4;
const p1 = n1;

const m1 = new Node();
m1.expon = 20;
m1.coef = 5;
const m2 = new Node();
m2.expon = 4;
m2.coef = -7;
const m3 = new Node();
m3.expon = 1;
m3.coef = 3;
m1.next = m2;
m2.next = m3;
const p2 = m1;

//let res = add(p1, p2);

let res2 = multiply(p1, p2);
debugger