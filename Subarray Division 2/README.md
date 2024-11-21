# Birthday Chocolate Problem

## Problem Description

Lily and Ron want to share a chocolate bar. The chocolate is divided into squares, each with an integer written on it. Lily wants to select a contiguous segment of the chocolate that satisfies the following conditions:

1. The length of the segment is equal to Ron's birth month (`m`).
2. The sum of the integers in the segment is equal to Ron's birth day (`d`).

The goal is to determine how many ways Lily can divide the chocolate to meet these criteria.

## Example

Given the chocolate squares as `s = [2, 2, 1, 3, 2]`, Ron's birth day `d = 4`, and birth month `m = 2`, there are two valid segments:

- `[2, 2]` (sum = 4, length = 2)
- `[1, 3]` (sum = 4, length = 2)

Thus, the output is `2`.

## Function Signature

```javascript
function birthday(s, d, m) {
  // s: array of integers representing the chocolate squares
  // d: integer, Ron's birth day
  // m: integer, Ron's birth month
  return count; // the number of ways the chocolate can be divided
}
```

## Solution Explanation

1. Use a sliding window approach to iterate over possible contiguous segments of length `m` in the array `s`.
2. For each segment, calculate its sum using the `reduce` method.
3. If the sum equals `d`, increment a counter.
4. Return the counter as the result.

## Implementation

```javascript
function birthday(s, d, m) {
  let count = 0; // To track valid segments

  for (let i = 0; i <= s.length - m; i++) {
    // Ensure we don't exceed bounds
    let segment = s.slice(i, i + m); // Get a segment of length m
    let sum = segment.reduce((acc, num) => acc + num, 0); // Calculate the sum

    if (sum === d) {
      // Check if the sum matches Ron's birth day
      count++;
    }
  }

  return count; // Return the total number of valid segments
}
```

## Input Format

1. First line: integer `n`, the number of squares in the chocolate bar.
2. Second line: space-separated integers, the numbers on the chocolate squares.
3. Third line: two space-separated integers, `d` (Ron’s birth day) and `m` (Ron’s birth month).

## Constraints

- `1 <= n <= 100`
- `1 <= s[i] <= 5` (where `0 <= i < n`)
- `1 <= d <= 31`
- `1 <= m <= 12`

## Example Input/Output

### Input

```
5
2 2 1 3 2
4 2
```

### Output

```
2
```

## Notes

- This solution ensures correctness by only iterating up to `s.length - m` to avoid accessing incomplete segments.
- The implementation is efficient for the given constraints.
