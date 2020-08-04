#include <stdio.h>

int main()
{
  int a = 5,
      b = 10;

  int temp = a;
  a = b;
  b = temp;

  printf("a=%d, b=%d", a, b);
  return 0;
}