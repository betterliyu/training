// https://pintia.cn/problem-sets/1163286449659043840/problems/1174288506294865967

#include <stdio.h>
#include <stdbool.h>

int main()
{
  int year, month, day;
  scanf("%d/%d/%d", &year, &month, &day);
  bool isLeap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
  int dayOfYear = 0;
  for (int m = 1; m < month; m++)
  {
    if (m <= 7)
    {
      if (m == 2)
      {
        dayOfYear += isLeap ? 29 : 28;
      }
      else
      {
        dayOfYear += m % 2 == 1 ? 31 : 30;
      }
    }
    else
    {
      dayOfYear += m % 2 == 1 ? 30 : 31;
    }
  }
  dayOfYear += day;
  printf("%d", dayOfYear);
  return 0;
}