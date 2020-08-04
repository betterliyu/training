#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{

  srand(time(0));
  int number = rand() % 100;
  int input = 0;
  int count = 0;
  do
  {
    printf("Please give a number: ");
    scanf("%d", &input);
    if (input > number)
    {
      printf("Your number is bigger!\n");
    }
    else if (input < number)
    {
      printf("Your number is smaller!\n");
    }
    count++;
  } while (input != number);
  printf("Congratulations! You guessed right only %d times!", count);
  return 0;
}