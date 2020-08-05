namespace Algs4.Exercises
{
    public class Ex_1_3_19
    {
        public static void DeleteLast(ref Lib.LinkedListNode<int> first)
        {
            if (first == null)
            {
                return;
            }

            if (first.next == null)
            {
                first = null;
                return;
            }

            Lib.LinkedListNode<int> cur = first;

            while (cur.next.next != null)
            {
                cur = cur.next;
            }

            cur.next = null;
        }
    }
}