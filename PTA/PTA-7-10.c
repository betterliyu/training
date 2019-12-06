// https://pintia.cn/problem-sets/1163286449659043840/problems/1174288506294865958
#include <stdio.h>

int main()
{
  int val1 = 0, val2 = 0;
  scanf("%d %d", &val1, &val2);

  printf("%d + %d = %d\n", val1, val2, val1 + val2);
  printf("%d - %d = %d\n", val1, val2, val1 - val2);
  printf("%d * %d = %d\n", val1, val2, val1 * val2);
  if (val1 % val2 == 0)
  {
    printf("%d / %d = %d\n", val1, val2, val1 / val2);
  }
  else
  {
    printf("%d / %d = %.2f\n", val1, val2, val1 / (val2 * 1.0));
  }
  return 0;
}
