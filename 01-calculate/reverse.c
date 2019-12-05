/**
 * 程序每次读入一个正三位数，然后输出逆序的数字。注意，当输入的数字含有结尾的0时，输出不应带有前导的0。比如输入700，输出应该是7。
 * 提示：用%10可以得到个位数，用/100可以得到百位数...。将这样得到的三个数字合起来：百位*100+十位*10+个位，就得到了结果。
 */

#include <stdio.h>

int main()
{
  int input = 0;
  printf("请输入一个三位正整数：");
  scanf("%d", &input);
  int single = input % 10;
  int tens = input % 100 / 10;
  int hundreds = input / 100;
  int reversal = single * 100 + tens * 10 + hundreds;
  printf("反转后的值为：%d\n", reversal);

  return 0;
}