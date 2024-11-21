# Sock Merchant Problem

## Problem Description

There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

### Example:

#### Input:

```
n = 7
ar = [1, 2, 1, 2, 1, 3, 2]
```

#### Output:

```
2
```

### Explanation:

- There is one pair of color `1` and one pair of color `2`.
- There are three odd socks left (one of each color).
- The number of pairs is `2`.

---

## Function Description

The function `sockMerchant` has the following parameters:

- `int n`: the number of socks in the pile.
- `int ar[n]`: the colors of each sock.

### Returns:

- `int`: the number of pairs.

---

## Constraints:

- \(1 \leq n \leq 100\)
- \(1 \leq ar[i] \leq 100\), where \(0 \leq i < n\).

---

## Sample Input and Output

### Input:

```
9
10 20 20 10 10 30 50 10 20
```

### Output:

```
3
```

### Explanation:

- Socks with color `10`: 4 → 2 pairs.
- Socks with color `20`: 3 → 1 pair.
- Socks with color `30`, `50`: No pairs.

---

## Solution in JavaScript

```javascript
function sockMerchant(n, ar) {
  const sockCounts = {};
  let pairs = 0;

  // Count socks by color
  for (const sock of ar) {
    if (sockCounts[sock]) {
      sockCounts[sock]++;
    } else {
      sockCounts[sock] = 1;
    }

    // If a pair is completed, increase the pair count
    if (sockCounts[sock] % 2 === 0) {
      pairs++;
    }
  }

  return pairs;
}
```
