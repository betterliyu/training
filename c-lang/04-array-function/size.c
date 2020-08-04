#include <stdio.h>

int main()
{
  int a[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
  for (int _ = 0; _ < sizeof(a) / sizeof(a[0]); _++)
  {
    printf("%d ", a[_]);
  }

  return 0;
}