using System.Collections.Generic;

namespace Algs4.Exercises
{

    public class Parentheses
    {
        public static bool IsBalanced(string input)
        {
            Stack<char> stack = new Stack<char>();
            for (int i = 0; i < input.Length; i += 1)
            {
                bool match = false;
                char ele = input[i];
                if ("([{".Contains(ele))
                {
                    stack.Push(ele);
                }
                else
                {
                    char prev = stack.Pop();

                    match =
                      (prev == '(' && ele == ')') ||
                      (prev == '[' && ele == ']') ||
                      (prev == '{' && ele == '}');

                    if (!match)
                    {
                        return false;
                    }
                }
            }
            return stack.Count == 0;

        }
    }
}