// https://pintia.cn/problem-sets/1163286449659043840/problems/1174288506294865966

#include <stdio.h>

int main()
{
  double mileage = 0;
  int waitTime = 0;
  scanf("%lf %d", &mileage, &waitTime);
  double cost = 0;
  if (mileage <= 3)
  {
    cost = 10;
  }
  else if (mileage <= 10 && mileage > 3)
  {
    cost = 10 + (mileage - 3) * 2;
  }
  else if (mileage > 10)
  {
    cost = 10 + 7 * 2 + (mileage - 10) * 3;
  }
  cost += waitTime / 5 * 2;
  printf("%d", (int)(cost + 0.5));
  return 0;
}