#include <stdio.h>
#include <stdbool.h>

int main()
{
  int num = 0;
  printf("Please input a number: ");
  scanf("%d", &num);
  bool isPrime = true;
  if (num == 1)
  {
    isPrime = false;
  }
  for (int i = 2; i < num; i++)
  {
    if (num % i == 0)
    {
      isPrime = false;
      break;
    }
  }
  if (isPrime)
  {
    printf("%d is a prime number", num);
  }
  else
  {
    printf("%d is not a prime number", num);
  }

  return 0;
}
