#include <stdio.h>

int main()
{
  double height = 0;
  scanf("%lf", &height);
  int foot = (height / 100 / 0.3048);
  int inch = ((height / 100 / 0.3048) - foot) * 12;
  printf("%d %d",foot, inch);

  return 0;
}