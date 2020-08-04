#include <stdio.h>
#include <stdbool.h>

void printPrimes(int num);

int main()
{
  int num = 0;
  printf("Please input a number: ");
  scanf("%d", &num);
  printPrimes(num);
  return 0;
}

void printPrimes(int num)
{
  int nums[num];
  for (int _ = 0; _ < num; _++)
  {
    nums[_] = 1;
  }
  for (int x = 2; x < num; x++)
  {
    if (nums[x] == 1)
    {
      for (int n = 2; n * x < num; n++)
      {
        nums[n * x] = 0;
      }
    }
  }
  for (int _ = 2; _ < num; _++)
  {
    if (nums[_] == 1)
    {
      printf("%d\t", _);
    }
  }
}