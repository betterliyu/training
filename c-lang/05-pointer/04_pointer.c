#include <stdio.h>

void f(int *p);
void g(int i);

int main()
{
  int i = 6;
  printf("&i=%p\n", &i);
  // 指针作参数传递到方法中
  f(&i);
  g(i);
  return 0;
}

void f(int *p)
{
  // 拿到外面参数的地址
  printf("*p=%p\n", p);
  // 访问地址上的变量值
  printf("*p=%d\n", *p);

  *p = 26;
}

void g(int i)
{
  printf("i=%d\n", i);
}
