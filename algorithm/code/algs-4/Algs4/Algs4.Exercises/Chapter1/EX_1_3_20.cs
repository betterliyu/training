using System;
using System.Collections.Generic;
using System.Text;

namespace Algs4.Exercises
{
    public class EX_1_3_20 : Lib.LinkedList<int>
    {
        public EX_1_3_20() : base()
        {
        }

        public EX_1_3_20(Lib.LinkedListNode<int> first) : base(first)
        {
        }

        public new Lib.LinkedListNode<int> Delete(int k)
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

            Lib.LinkedListNode<int> cur = first;
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
    }
}