#include <stdio.h>
#include <stdbool.h>
#include <math.h>

bool isPrime(int num);

int main()
{
  int num = 0;
  printf("Please input a number: ");
  scanf("%d", &num);
  if ((isPrime(num)))
  {
    printf("%d is a prime number", num);
  }
  else
  {
    printf("%d is not a prime number", num);
  }
  return 0;
}

// bool isPrime(int num)
// {
//   bool isPrime = true;
//   if (num == 1 || (num % 2 == 0 && num != 2))
//   {
//     isPrime = false;
//   }
//   else
//   {
//     for (int i = 3; i < sqrt(num); i += 2)
//     {
//       if (num % i == 0)
//       {
//         isPrime = false;
//         break;
//       }
//     }
//   }
//   return isPrime;
// }

bool isPrime(int num)
{
  bool isPrime = true;
  if (num <= 1 || (num % 2 == 0 && num != 2))
  {
    isPrime = false;
  }
  else
  {
    int primeNums[num];
    for (int _ = 0; _ < num; _++)
    {
      primeNums[_] = 0;
    }
    int primeNumsCount = 0;
    int currnt = 2;
    while (currnt <= num)
    {
      isPrime = true;
      for (int _ = 0; _ < primeNumsCount; _++)
      {
        if (primeNums[_] == 0)
        {
          break;
        }
        if (currnt % primeNums[_] == 0)
        {
          isPrime = false;
          break;
        }
      }
      if (isPrime)
      {
        primeNums[primeNumsCount++] = currnt;
      }
      currnt++;
    }
  }
  return isPrime;
}