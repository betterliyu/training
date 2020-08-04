// https://pintia.cn/problem-sets/1163286449659043840/problems/1174288506294865956
#include <stdio.h>

int main()
{
  int height = 0;
  scanf("%d", &height);
  double weight = (height - 100) * 0.9;
  printf("%.1f", weight * 2);

  return 0;
}