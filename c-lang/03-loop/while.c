#include <stdio.h>

int main()
{
  printf("输入一个数字");
  int input = 0;
  scanf("%d", &input);

  int length = 1;
  input /= 10;
  while (input > 0)
  {
    input /= 10;
    length++;
  }
  printf("这是一个%d位数", length);

  return 0;
}