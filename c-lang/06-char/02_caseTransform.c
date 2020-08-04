#include <stdio.h>

int main(int argc, char **argv)
{
  char a = 'd';
  char b = 'F';
  printf("d-->%c\n", 'A' - 'a' + a);
  printf("F-->%c\n", b - 'A' + 'a');
  return 0;
}
