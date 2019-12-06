// https://pintia.cn/problem-sets/1163286449659043840/problems/1174288506294865965

#include <stdio.h>

int main()
{
  int score = 0;
  scanf("%d", &score);
  char degree = 'A';
  if (score >= 90)
  {
    degree = 'A';
  }
  else if (score < 90 && score >= 80)
  {
    degree = 'B';
  }
  else if (score < 80 && score >= 70)
  {
    degree = 'C';
  }
  else if (score < 70 && score >= 60)
  {
    degree = 'D';
  }
  else
  {
    degree = 'E';
  }

  printf("%c", degree);
  return 0;
}