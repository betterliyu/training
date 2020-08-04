#include <stdio.h>

int main()
{
  int hour1, hour2, min1, min2;
  printf("输入第一个时间(hh:mm)：");
  scanf("%d:%d", &hour1, &min1);
  printf("输入第二个时间(hh:mm)：");
  scanf("%d:%d", &hour2, &min2);

  int hourDiff = hour2 - hour1;
  int minDiff = min2 - min1;
  if (minDiff < 0)
  {
    minDiff += 60;
    hourDiff--;
  }
  printf("时间差为%d:%d", hourDiff, minDiff);

  return 0;
}