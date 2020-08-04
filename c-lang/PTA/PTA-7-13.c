// https://pintia.cn/problem-sets/1163286449659043840/problems/1174288506294865961

#include <stdio.h>

int main()
{
  int today = 0;
  scanf("%d", &today);
  int twoDaysLater = (today += 2) % 7;
  if (twoDaysLater == 0)
  {
    twoDaysLater = 7;
  }
  printf("%d", twoDaysLater);

  return 0;
}