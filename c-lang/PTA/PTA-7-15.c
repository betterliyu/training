// https://pintia.cn/problem-sets/1163286449659043840/problems/1174288506294865963

#include <stdio.h>

int main()
{
  int input = 0;
  scanf("%d", &input);
  int real = input / 16 * 10 + input % 16;
  printf("%d", real);
  return 0;
}