function binarySearch(list, target) {
  if (list == null || list.length == 0) {
    return null;
  }

  let left = 0;
  let mid = 0;
  let right = list.length - 1;

  while (left <= right) {
    mid = parseInt((left + right) / 2);
    if (list[mid] === target) {
      return mid;
    } else if (list[mid] > target) {
      right = mid - 1;
    } else if (list[mid] < target) {
      left = mid + 1;
    }
  }

  return null;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));