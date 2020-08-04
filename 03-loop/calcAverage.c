#include <stdio.h>
#include <stdbool.h>

int main()
{
  int count = 0;
  int number = 0;
  int sum = 0;

  while (true)
  {
    printf("Please input a number, input -1 to finish: ");
    scanf("%d", &number);
    if (number == -1)
    {
      break;
    }
    sum += number;
    count++;
  }

  printf("The average of your numbers is %.2f", 1.0 * sum / count);
  return 0;
}