#include <stdio.h>

int main()
{
  int a = 10;
  printf("size of a = %d\n", sizeof(a));
  printf("size of int = %d\n", sizeof(int));
  printf("size of short = %d\n", sizeof(short));
  printf("size of long = %d\n", sizeof(long));
  printf("size of float = %d\n", sizeof(float));
  printf("size of double = %d\n", sizeof(double));
  printf("size of char = %d\n", sizeof(char));

  return 0;
}