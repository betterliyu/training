#include <stdio.h>

int max(int a[], int len);

int main()
{
  int num = 5;
  int queue[] = {50, 34, 23, 67, 14, 13, 5, 9, 2, 45, 24};
  int last = sizeof(queue) / sizeof(queue[0]) - 1;
  while (last > 0)
  {
    int maxId = max(queue, last + 1);
    int t = queue[maxId];
    queue[maxId] = queue[last];
    queue[last] = t;
    last--;
  }
  for (int i = 0; i < sizeof(queue) / sizeof(queue[0]); i++)
  {
    printf("%d\t", queue[i]);
  }
  return 0;
}

int max(int a[], int len)
{
  int maxId = 0;
  for (int i = 1; i < len; i++)
  {
    if (a[i] > a[maxId])
    {
      maxId = i;
    }
  }
  return maxId;
}
