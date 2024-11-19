# Two Arrays Problem

## Problem Description

You are given two n-element arrays of integers, A and B. Permute them into some A' and B' such that the relation:
\[
A'[i] + B'[i] \geq k
\]
holds for all \( 0 \leq i < n \).

For each query, return "YES" if such a permutation exists. Otherwise, return "NO".

---

### Example

#### Input:

```
A = [0, 1]
B = [0, 2]
k = 1
```

#### Output:

```
YES
```

#### Explanation:

A valid permutation is:

- \( A' = [1, 0] \)
- \( B' = [0, 2] \)

For each pair:

- \( A'[0] + B'[0] = 1 + 0 \geq 1 \)
- \( A'[1] + B'[1] = 0 + 2 \geq 1 \)

---

## Function Description

Complete the `twoArrays` function.

### Function Parameters

- `int k`: An integer representing the minimum required sum.
- `int[] A`: An array of integers.
- `int[] B`: An array of integers.

### Returns

- A string, either "YES" or "NO".

---

## Input Format

1. The first line contains an integer \( q \), the number of queries.
2. Each query consists of:
   - Two integers \( n \) and \( k \), representing the size of the arrays and the required sum.
   - An array \( A \) of \( n \) integers.
   - An array \( B \) of \( n \) integers.

---

## Constraints

1. \( 1 \leq q \leq 10 \)
2. \( 1 \leq n \leq 1000 \)
3. \( 1 \leq k \leq 10^9 \)
4. \( 0 \leq A[i], B[i] \leq 10^9 \)

---

## Sample Input

```
2
3 10
2 1 3
7 8 9
4 5
1 2 2 1
3 3 3 4
```

## Sample Output

```
YES
NO
```

---

### Explanation

#### Query 1:

- Permuted arrays: \( A' = [1, 2, 3] \), \( B' = [9, 8, 7] \)
- Checking pairs:
  - \( 1 + 9 = 10 \geq 10 \)
  - \( 2 + 8 = 10 \geq 10 \)
  - \( 3 + 7 = 10 \geq 10 \)
- Output: `YES`

#### Query 2:

- Permuted arrays cannot satisfy the condition for all pairs.
- Output: `NO`

---

## Notes

To solve this problem efficiently:

1. Sort array \( A \) in ascending order.
2. Sort array \( B \) in descending order.
3. Verify the sum condition for each pair.
