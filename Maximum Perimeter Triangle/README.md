# Maximum Perimeter Triangle

## Problem Description

Given an array of stick lengths, use **3 of them** to construct a **non-degenerate triangle** with the maximum possible perimeter. Return an array of the lengths of its sides as **3 integers in non-decreasing order**.

### Rules:

1. If there are several valid triangles having the maximum perimeter:
   - Choose the one with the **longest maximum side**.
   - If more than one has that maximum, choose the one with the **longest minimum side**.
   - If more than one has that maximum as well, print **any one** of them.
2. If no non-degenerate triangle exists, return `[-1]`.

### Input Format:

- The first line contains a single integer `n`, the size of the array `sticks`.
- The second line contains `n` space-separated integers `sticks[i]`, each representing a stick length.

### Constraints:

- \(3 \leq n \leq 50\)
- \(1 \leq sticks[i] \leq 10^9\)

### Output Format:

- Return an array of 3 integers representing the lengths of the chosen triangle in **non-decreasing order**, or `[-1]` if no triangle can be formed.

---

## Examples:

### Example 1:

**Input:**  
`sticks = [1, 2, 3, 4, 5, 10]`

**Output:**  
`[3, 4, 5]`

**Explanation:**

- Possible triangles: \(2, 3, 4\) (perimeter = 9) and \(3, 4, 5\) (perimeter = 12).
- The triangle with the largest perimeter is \(3, 4, 5\).

### Example 2:

**Input:**  
`sticks = [1, 1, 1, 3, 3]`

**Output:**  
`[1, 3, 3]`

**Explanation:**

- Possible triangles: \(1, 1, 1\) (perimeter = 3) and \(1, 3, 3\) (perimeter = 7).
- The triangle with the largest perimeter is \(1, 3, 3\).

### Example 3:

**Input:**  
`sticks = [1, 2, 3]`

**Output:**  
`[-1]`

**Explanation:**

- No valid triangle can be formed as \(1 + 2 = 3\), which does not satisfy the triangle inequality.

---

## Solution Outline:

1. **Sort the Array:**

   - Sort the stick lengths in descending order.

2. **Check for Triangle Condition:**

   - Iterate through every 3 consecutive stick lengths.
   - Check if they satisfy the triangle inequality: \(a + b > c\).

3. **Return Result:**
   - If a valid triangle is found, return the lengths sorted in ascending order.
   - If no valid triangle exists, return `[-1]`.

---

## Complexity:

- **Time Complexity:** \(O(n \log n)\) for sorting, and \(O(n)\) for checking the triangle condition. Total: \(O(n \log n)\).
- **Space Complexity:** \(O(1)\) additional space.

---

## Example Implementation:

```javascript
function maximumPerimeterTriangle(sticks) {
  // Sort the sticks in descending order
  sticks.sort((a, b) => b - a);

  // Iterate through every 3 consecutive sticks
  for (let i = 0; i < sticks.length - 2; i++) {
    if (sticks[i] < sticks[i + 1] + sticks[i + 2]) {
      // If valid, return the sides in ascending order
      return [sticks[i + 2], sticks[i + 1], sticks[i]];
    }
  }

  // If no triangle can be formed
  return [-1];
}
```
