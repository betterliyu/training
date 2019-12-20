#include <stdio.h>

int main()
{
  int i = 0;
  int p;
  p = (intptr_t)&i;
  printf("%p\n", &i);
  printf("0x%x\n", p);

  // &(i + p);

  int a[10];
  printf("%p\n", &a);
  printf("%p\n", a);
  printf("%p\n", &a[0]);
  printf("%p\n", &a[1]);

  return 0;
}
