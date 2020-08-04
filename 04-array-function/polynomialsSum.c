#include <stdio.h>

int main()
{
  const int max = 101;
  int termsA[max];
  int termsB[max];
  for (int i = 0; i < max; i++)
  {
    termsA[i] = 0;
    termsB[i] = 0;
  }
  int constant = 0;
  while (constant < 2)
  {
    int coeff = 0,
        power = 0;
    scanf("%d %d", &power, &coeff);
    if (constant == 0)
    {
      termsA[power] = coeff;
    }
    else if (constant == 1)
    {
      termsB[power] = coeff;
    }
    if (power == 0)
    {
      constant++;
    }
  }
  int n = 0;
  for (int i = max - 1; i >= 0; i--)
  {
    int coeff = termsA[i] + termsB[i];
    if (coeff == 0)
    {
      continue;
    }
    n++;
    if (i == 0)
    {
      if (n == 1)
      {
        printf("%d", coeff);
      }
      else
      {
        printf("+%d", coeff);
      }
    }
    else if (i == 1)
    {
      if (n == 1)
      {
        printf("%dx", coeff, i);
      }
      else
      {
        printf("+%dx", coeff, i);
      }
    }
    else
    {
      if (n == 1)
      {
        printf("%dx%d", coeff, i);
      }
      else
      {
        printf("+%dx%d", coeff, i);
      }
    }
  }

  return 0;
}
