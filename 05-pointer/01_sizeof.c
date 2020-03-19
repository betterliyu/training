#include <stdio.h>

int main(int argc, char **argv) {
    int a;
    a = 6;
    printf("sizeof(int)=%ld\n", sizeof(int));
    printf("sizeof(double)=%ld\n", sizeof(double));
    printf("sizeof(a)=%ld\n", sizeof(a));
    return 0;
}
