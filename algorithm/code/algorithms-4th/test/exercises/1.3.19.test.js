const { expect } = require('chai');
const deleteLast = require('../../src/exercises/1.3.19.js');
const { Node } = require('../../src/lib/LinkedList');

describe('Exercises 1.3.19 Test', () => {
  it('should be null', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;

    deleteLast(node1);
    expect(node3.next).to.be(null);

    deleteLast(node1);
    expect(node2.next).to.be(null);

    deleteLast(node1);
    expect(node1.next).to.be(null);

    deleteLast(node1);
    expect(node1).to.be(null);
  });
});
