#include <stdio.h>

struct
{
  int amount;
  char *name;
} coins[] = {
    {1, "penny"},
    {5, "nickel"},
    {10, "dime"},
    {25, "quarter"},
    {50, "half-dollar"},
};

int main()
{
  int amount = 5;
  printf("Please input a amount: ");
  scanf("%d", &amount);

  for (int _ = 0; _ < sizeof(coins) / sizeof(coins[0]); _++)
  {
    if (amount == coins[_].amount)
    {
      printf("%s\n", coins[_].name);
      break;
    }
  }

  return 0;
}