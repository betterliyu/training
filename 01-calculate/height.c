#include <stdio.h>

int main()
{
  double foot = 0,
         inch = 0;
  printf("请输入身高的英尺和英寸，如输入\"5 7\"表示5英尺7英寸:");
  scanf("%lf %lf", &foot, &inch);

  printf("身高是%f米。", ((foot + inch / 12) * 0.3048));

  return 0;
}