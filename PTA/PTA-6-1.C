#include <stdio.h>

int prime(int num);
int PrimeSum(int m, int n);

int main()
{
  int m, n, p;

  scanf("%d %d", &m, &n);
  printf("Sum of ( ");
  for (p = m; p <= n; p++)
  {
    if (prime(p) != 0)
      printf("%d ", p);
  }
  printf(") = %d\n", PrimeSum(m, n));

  return 0;
}

int prime(int num)
{
  int isPrime = 1;
  if (num <= 1)
  {
    isPrime = 0;
  }
  for (int i = 2; i < num; i++)
  {
    if (num % i == 0)
    {
      isPrime = 0;
      break;
    }
  }
  if (isPrime == 1)
  {
    return 1;
  }
  return 0;
}

int PrimeSum(int m, int n)
{
  int sum = 0;
  for (int i = m; i <= n; i++)
  {
    if (prime(i))
    {
      sum += i;
    }
  }
  return sum;
}