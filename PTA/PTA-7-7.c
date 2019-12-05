#include <stdio.h>

int main()
{
  int f = 0;
  scanf("%d", &f);
  int C = 5.0 * (f - 32) / 9;
  printf("Celsius = %d", C);

  return 0;
}