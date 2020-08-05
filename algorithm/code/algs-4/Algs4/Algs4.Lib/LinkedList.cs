using System;

namespace Algs4.Lib
{
    public class LinkedList<Item>
    {
        public LinkedListNode<Item> first;

        public LinkedList()
        {
        }

        public LinkedList(LinkedListNode<Item> first)
        {
            this.first = first;
        }

        public LinkedListNode<Item> Find(int i)
        {
            if (first == null) return null;
            LinkedListNode<Item> cur = first;
            int pos = 1;
            while (cur.next != null)
            {
                if (pos == i)
                {
                    return cur;
                }
                pos++;
                cur = cur.next;
            }

            return null;
        }


        public void Append(LinkedListNode<Item> node)
        {
            if (first == null)
            {
                first = node;
                return;
            }

            LinkedListNode<Item> last = first;

            while (last.next != null)
            {
                last = last.next;
            }
            last.next = node;
        }

        public LinkedListNode<Item> Delete(int k)
        {
            if (first == null)
            {
                return null;
            }

            if (k == 1)
            {
                var res = first;
                first = first.next;
                return res;
            }

            Lib.LinkedListNode<Item> cur = first;
            int pos = 2;

            while (cur.next != null)
            {
                if (pos == k)
                {
                    var res = cur.next;
                    cur.next = cur.next?.next;
                    return res;
                }
                pos++;
                cur = cur.next;
            }

            return null;
        }

        public int Length()
        {
            if (first == null)
            {
                return 0;
            }

            Lib.LinkedListNode<Item> cur = first;
            int pos = 1;

            while (cur.next != null)
            {
                pos++;
                cur = cur.next;
            }
            return pos;
        }

        public void Print()
        {
            LinkedListNode<Item> cur = first;
            while (cur.next != null)
            {
                Console.Write("{0} ", cur.item);
                cur = cur.next;
            }
        }
    }

    public class LinkedListNode<Item>
    {
        public Item item;
        public LinkedListNode<Item> next;

        public LinkedListNode()
        {
        }

        public LinkedListNode(Item item)
        {
            this.item = item;
        }
    }

}
