using Microsoft.VisualStudio.TestTools.UnitTesting;
using Algs4.Exercises;
using System;
using System.Collections.Generic;
using System.Text;

namespace Algs4.Exercises.Test
{
    [TestClass()]
    public class Tests_Parentheses
    {
        [TestMethod()]
        public void Test_IsBalanced()
        {
            string input;

            input = "[()]{}{[()()]()}";
            Assert.AreEqual(true, Parentheses.IsBalanced(input));

            input = "[(]) ";
            Assert.AreEqual(false, Parentheses.IsBalanced(input));

        }
    }
}