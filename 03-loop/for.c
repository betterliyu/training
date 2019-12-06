#include <stdio.h>

int main()
{
  int n = 10;
  int fact = 1;
  for (int i = 2; i <= n; i++)
  {
    fact *= i;
  }
  printf("%d的阶乘是%d", n, fact);

  return 0;
}