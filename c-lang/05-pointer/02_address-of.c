#include <stdio.h>

int main(int argc, char **argv) {
    int i = 0;
    int p;
    p = (int)&i;
    printf("0x%x\n", &i); // 0x61fe1c   可能会有warnning, 取决于编译器
    printf("&i=%p\n", &i);
    printf("p=%p\n", p);
    printf("sizeof(&i)=%d\n", sizeof(&i));
    return 0;
}
