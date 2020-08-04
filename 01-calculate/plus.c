#include <stdio.h>

int main()
{
  int a = 0,
      b = 0;
  printf("请输入两个整数:");
  scanf("%d, %d", &a, &b);  // 输入中必须包含逗号

  printf("%d + %d = %d", a, b, a + b);
  return 0;
}