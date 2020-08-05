using Microsoft.VisualStudio.TestTools.UnitTesting;
using Algs4.Exercises;
using System;
using System.Collections.Generic;
using System.Text;
using static Algs4.Exercises.EX_1_3_20;

namespace Algs4.Exercises.Test
{
    [TestClass()]
    public class Tests_EX_1_3_20
    {
        [TestMethod()]
        public void Test_Delete()
        {

            var test = new EX_1_3_20();
            test.Append(new Lib.LinkedListNode<int>(1));
            test.Append(new Lib.LinkedListNode<int>(2));
            test.Append(new Lib.LinkedListNode<int>(3));
            test.Append(new Lib.LinkedListNode<int>(4));

            // delete the 5th
            var deleted = test.Delete(5);
            Assert.IsNull(deleted);
            Assert.AreEqual(4, test.Length());

            // delete the 1st
            deleted = test.Delete(1);
            Assert.AreEqual(3, test.Length());
            Assert.AreEqual(1, deleted.item);
            Assert.AreEqual(2, test.first?.item);

            // delete the 3rd
            deleted = test.Delete(3);
            Assert.AreEqual(2, test.Length());
            Assert.AreEqual(4, deleted?.item);

            // delete the 4th
            deleted = test.Delete(-1);
            Assert.IsNull(deleted);
        }
    }
}