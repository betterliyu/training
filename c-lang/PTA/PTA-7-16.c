// https://pintia.cn/problem-sets/1163286449659043840/problems/1174288506294865964

#include <stdio.h>

int main()
{
  int input = 0;
  scanf("%d", &input);
  int res = 0;
  if (input < 0)
  {
    res = -1;
  }
  else if (input == 0)
  {
    res = 0;
  }
  else if (input > 0)
  {
    res = 1;
  }

  printf("sign(%d) = %d", input, res);
  return 0;
}