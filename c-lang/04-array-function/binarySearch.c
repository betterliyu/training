#include <stdio.h>

int search(int key, int a[], int len);

int main()
{
  int num = 0;
  int queue[] = {2, 3, 5, 7, 8, 9, 10, 16, 17, 20, 25, 26, 27, 28, 30, 50, 70, 100};
  printf("Please input a number: ");
  scanf("%d", &num);
  int position = search(num, queue, sizeof(queue) / sizeof(queue[0]));
  printf("%d", position);
  return 0;
}

int search(int key, int a[], int len)
{
  int left = 0,
      right = len - 1,
      result = -1;
  while (left <= right)
  {
    int mid = (left + right) / 2;
    if (a[mid] == key)
    {
      result = mid;
      break;
    }
    else if (a[mid] < key)
    {
      left = mid + 1;
    }
    else
    {
      right = mid - 1;
    }
  }
  return result;
}