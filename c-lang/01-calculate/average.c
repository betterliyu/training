#include <stdio.h>

int main()
{
  int a = 0,
      b = 0;

  printf("请输入两个数:");
  scanf("%d %d", &a, &a);

  double average = (a + b) / 2.0;
  printf("平均值是：%.2f", average);

  return 0;
}