#include <stdio.h>

int main(int argc, char **argv)
{
  char a = '1';
  char b = 49;
  printf("a=%d\n", a);
  printf("b=%d\n", b);

  printf("a='%c'\n", a);
  printf("b='%c'\n", b);

  printf("输入一个字符：\n");
  char c;
  scanf("%c", &c);
  printf("c='%c'\n", c);
  printf("c=%d\n", c);
  return 0;

  printf("输入数字和字符：\n");
  int d;
  char e;
  scanf("%d %c", &d, &e);
  printf("d=%d c='%c'\n", d, e);

  printf("输入数字和字符：\n");
  int d;
  char e;
  scanf("%d%c", &d, &e);
  printf("d=%d c='%c'\n", d, e);
  return 0;
}
