// https://pintia.cn/problem-sets/1163286449659043840/problems/1174288506294865962

#include <stdio.h>

int main()
{
  int current = 0, minutes = 0;
  scanf("%d %d", &current, &minutes);
  int hour = current / 100;
  int min = current % 100;
  int totalMin = hour * 60 + min + minutes;
  int newTime = totalMin / 60 * 100 + totalMin % 60;

  printf("%d", newTime);
  return 0;
}