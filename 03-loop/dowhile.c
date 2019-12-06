#include <stdio.h>

int main()
{
  printf("输入一个数字");
  int input = 0;
  scanf("%d", &input);
  int length = 0;
  do
  {
    input /= 10;
    length++;
  } while (input > 0);
  printf("这是一个%d位数", length);

  return 0;
}
