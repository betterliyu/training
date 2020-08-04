#include <stdio.h>

int Euclidean(int num1, int num2);

int main()
{
  int num1 = 50, num2 = 140;
  // int gcd = 1;
  // for (int i = 1; i <= num1 && i <= num2; i++)
  // {
  //   if (num1 % i == 0 && num2 % i == 0)
  //   {
  //     gcd = i;
  //   }
  // }
  int gcd = Euclidean(num1, num2);
  printf("The gcd is %d", gcd);

  return 0;
}

int Euclidean(int num1, int num2)
{
  int bigger = num1 > num2 ? num1 : num2,
      smaller = num1 + num2 - bigger,
      mod;
  while (smaller != 0)
  {
    mod = bigger % smaller;
    bigger = smaller;
    smaller = mod;
  }

  return bigger;
}