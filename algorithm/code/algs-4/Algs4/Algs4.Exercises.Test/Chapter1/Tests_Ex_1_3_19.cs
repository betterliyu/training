using Microsoft.VisualStudio.TestTools.UnitTesting;
using Algs4.Exercises;
using System;
using System.Collections.Generic;
using System.Text;

namespace Algs4.Exercises.Test
{
    [TestClass()]
    public class Tests_Ex_1_3_19
    {
        [TestMethod()]
        public void Test_DeleteLast()
        {
            var node1 = new Lib.LinkedListNode<int>(1);
            var node2 = new Lib.LinkedListNode<int>(2);
            var node3 = new Lib.LinkedListNode<int>(3);
            var node4 = new Lib.LinkedListNode<int>(4);
            node1.next = node2;
            node2.next = node3;
            node3.next = node4;

            // delete node4
            Ex_1_3_19.DeleteLast(ref node1);
            Assert.IsNull(node3.next);

            // delete node3
            Ex_1_3_19.DeleteLast(ref node1);
            Assert.IsNull(node2.next);

            // delete node2
            Ex_1_3_19.DeleteLast(ref node1);
            Assert.IsNull(node1.next);

            // delete node1
            Ex_1_3_19.DeleteLast(ref node1);
            Assert.IsNull(node1);
        }
    }
}