#include <stdio.h>
#include <stdbool.h>

int main()
{
  bool b = 6 > 5; // 本质上还是整型， C 的 bool不是基本类型
  printf("%d\n", b);

  return 0;
}