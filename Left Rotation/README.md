# Left Rotation Problem

## Problem Description

A left rotation operation on an array of size `n` shifts each of the array's elements 1 unit to the left.
Given an integer `d`, perform `d` left rotations on the array and return the updated array.

### Input Format

1. The first line contains two space-separated integers:
   - `n`: the number of elements in the array.
   - `d`: the number of left rotations to perform.
2. The second line contains `n` space-separated integers describing the array `arr`.

### Constraints

- 1 ≤ n ≤ 10^5
- 1 ≤ d ≤ n
- 1 ≤ arr[i] ≤ 10^6

### Output Format

The function should return the updated array after `d` left rotations.

---

## Example

### Input

```
5 4
1 2 3 4 5
```

### Output

```
5 1 2 3 4
```

### Explanation

To perform 4 left rotations, the array undergoes the following changes:

1. [1, 2, 3, 4, 5] → [2, 3, 4, 5, 1]
2. [2, 3, 4, 5, 1] → [3, 4, 5, 1, 2]
3. [3, 4, 5, 1, 2] → [4, 5, 1, 2, 3]
4. [4, 5, 1, 2, 3] → [5, 1, 2, 3, 4]

---

## Solution

Here is the optimized solution:

```javascript
function rotateLeft(d, arr) {
  d = d % arr.length; // Handle cases where d > n
  let leftPart = arr.slice(0, d); // Elements to move to the end
  let rightPart = arr.slice(d); // Remaining elements
  return rightPart.concat(leftPart);
}
```

### Explanation of the Code

1. `d = d % arr.length`: Ensures the number of rotations doesn't exceed the size of the array.
2. `slice(0, d)`: Extracts the first `d` elements to be moved to the end.
3. `slice(d)`: Extracts the remaining elements.
4. `concat()`: Combines the two parts to form the rotated array.

---

## Test Case

```javascript
let arr = [1, 2, 3, 4, 5];
let d = 4;

console.log(rotateLeft(d, arr)); // Output: [5, 1, 2, 3, 4]
```

---

## Notes

- The solution has a time complexity of O(n) and a space complexity of O(n), making it efficient for large inputs.
- Ensure input validation and edge case handling (e.g., `d = 0` or `d = n`).
