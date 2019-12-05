#include <stdio.h>

int main()
{
  const int AMOUNT = 100;
  // AMOUNT = 200; 不能修改

  int price = 0;

  printf("请输入金额（元）：");
  scanf("%d", &price);

  int change = AMOUNT - price;

  printf("找零 %d 元\n", change);

  return 0;
}