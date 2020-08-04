#include <stdio.h>

int main()
{
  int divisor, dividend;
  int result[200];
  for (int i = 0; i < 200; i++)
  {
    result[i] = 0;
  }
  scanf("%d/%d", &dividend, &divisor);
  int digit = 0;
  do
  {
    result[digit] = dividend * 10 / divisor;
    dividend = dividend * 10 % divisor;
    digit++;
  } while (digit < 200 && dividend > 0);

  printf("0.");
  for (int i = 0; i < digit; i++)
  {
    printf("%d", result[i]);
  }
  printf("\n");
  return 0;
}