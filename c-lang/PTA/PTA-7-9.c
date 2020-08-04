// https://pintia.cn/problem-sets/1163286449659043840/problems/1174288506294865957
#include <stdio.h>

int main()
{
  int val1 = 0, val2 = 0, val3 = 0, val4 = 0;
  scanf("%d %d %d %d", &val1, &val2, &val3, &val4);
  int sum = val1 + val2 + val3 + val4;
  double average = sum / 4.0;
  printf("Sum = %d; Average = %.1f", sum, average);
  return 0;
}