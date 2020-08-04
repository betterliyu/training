// https://pintia.cn/problem-sets/1163286449659043840/problems/1174288506294865960

#include <stdio.h>

int main()
{
  int day, month, year;
  scanf("%d-%d-%d", &month, &day, &year);
  if (day < 10)
  {
    if (month < 10)
    {
      printf("%d-0%d-0%d", year, month, day);
    }
    else
    {
      printf("%d-%d-0%d", year, month, day);
    }
  }
  else
  {
    if (month < 10)
    {
      printf("%d-0%d-%d", year, month, day);
    }
    else
    {
      printf("%d-%d-%d", year, month, day);
    }
  }
  return 0;
}
