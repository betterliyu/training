#include <stdio.h>

int main()
{
  int a[255];
  a['A'] = 1;
  for (int _ = 0; _ < 256; _++)
  {
    printf("%d: %d\n", _, a[_]);
  }

  return 1;
}