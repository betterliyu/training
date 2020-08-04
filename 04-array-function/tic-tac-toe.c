#include <stdio.h>

int main()
{
  const int SIZE = 3;
  int chessboard[SIZE][SIZE];
  printf("Please input the chess one by one: \n");
  for (int i = 0; i < SIZE; i++)
  {
    for (int j = 0; j < SIZE; j++)
    {
      scanf("%d", &chessboard[i][j]);
    }
  }

  int result = 0;
  // 检查行列
  for (int i = 0; i < SIZE; i++)
  {
    int numOfO_H = 0, // 横向直线
        numOfX_H = 0,
        numOfO_V = 0, // 纵向直线
        numOfX_V = 0;
    for (int j = 0; j < SIZE; j++)
    {
      if (chessboard[i][j] == 1)
      {
        numOfO_H += 1;
      }
      else if (chessboard[i][j] == -1)
      {
        numOfX_H += 1;
      }
      if (chessboard[j][i] == 1)
      {
        numOfO_V += 1;
      }
      else if (chessboard[j][i] == -1)
      {
        numOfX_V += 1;
      }
    }
    if (numOfO_H == SIZE || numOfO_V == SIZE)
    {
      result = 1;
      break;
    }
    else if (numOfX_H == SIZE || numOfX_V == SIZE)
    {
      result = -1;
      break;
    }
  }

  // 检查对角
  int numOfO_F = 0, // 正向对角
      numOfX_F = 0,
      numOfO_B = 0, // 反向对角
      numOfX_B = 0;
  if (result == 0)
  {
    for (int i = 0; i < SIZE; i++)
    {
      if (chessboard[i][i] == 1)
      {
        numOfO_F += 1;
      }
      else if (chessboard[i][i] == -1)
      {
        numOfX_F += 1;
      }
    }
    if (numOfO_F == SIZE)
    {
      result = 1;
    }
    else if (numOfX_F == SIZE)
    {
      result = -1;
    }
  }
  if (result == 0)
  {
    for (int i = 0; i < SIZE; i++)
    {
      if (chessboard[i][SIZE - 1 - i] == 1)
      {
        numOfO_B += 1;
      }
      else if (chessboard[i][SIZE - 1 - i] == -1)
      {
        numOfX_B += 1;
      }
    }
    if (numOfO_B == SIZE)
    {
      result = 1;
    }
    else if (numOfX_B == SIZE)
    {
      result = -1;
    }
  }
  if (result == 1)
  {
    printf("Winner is O!");
  }
  else if (result == -1)
  {
    printf("Winner is X!");
  }
  else
  {
    printf("The game has drawn.");
  }
  return 0;
}