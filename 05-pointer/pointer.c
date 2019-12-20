#include <stdio.h>

void p(int *p);

int main()
{
  int a = 0;
  printf("&a = %p\n", &a);
  p(&a);
  printf("a = %d\n", a);
  return 0;
}

void p(int *p)
{
  printf("p = %p\n", p);
  printf("*p = %d\n", *p);
  *p = 10;
}