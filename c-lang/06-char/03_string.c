#include <stdio.h>
#include <string.h>

int main()
{
  // 1.
  char word[] = {'H', 'e', 'l', 'l', 'o', '\0'}; // 最后以0结尾
  printf("word=%s\n", word);

  // 2.
  char *str = "Hello";

  // 3.
  char word1[] = "Hello";

  // 4.
  char line[10] = "Hello";
  return 0;
}