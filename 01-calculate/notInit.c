#include <stdio.h>

void func()
{
	int a = 11323;
	printf("%d\n", a);
}

void func2()
{
	int a;
	printf("%d\n", a);
}

int main()
{

	func();
	func2(); // 这里会输出11323， 因为 a 没有初始化
	int a;
	printf("a = %d\n", a); // 这里同样没有初始化，但是输出 0，
	return 0;
}
