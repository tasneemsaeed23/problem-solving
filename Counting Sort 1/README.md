
# Counting Sort Problem

## Problem Description

You are given a list of integers where each integer lies within the range [0, 99]. Your task is to count how many times each integer appears in the list and return a frequency array of size 100. Each index in the frequency array represents a number, and the value at that index represents the count of the number in the input list.

### Input Format
- The first line contains an integer `n`, the number of items in the list `arr`.
- The second line contains `n` integers, separated by spaces, representing the values in the list.

### Output Format
- Return a list of size 100, where the value at each index is the count of the number corresponding to that index in the input list.

### Constraints
- \(100 \leq n \leq 10^6\)
- \(0 \leq arr[i] < 100\)

---

### Example

#### Input:
```
n = 10
arr = [1, 1, 3, 2, 1, 3, 0, 0, 99, 99]
```

#### Output:
```
[2, 3, 1, 2, 0, 0, 0, 0, 0, 0, ..., 0, 2]
```

Explanation:
- The number `0` appears **2 times**.
- The number `1` appears **3 times**.
- The number `2` appears **1 time**.
- The number `3` appears **2 times**.
- The number `99` appears **2 times**.
- All other numbers appear **0 times**.

---

## Instructions

Complete the function `countingSort` in the given template:

```javascript
function countingSort(arr) {
    let frequency = Array(100).fill(0);
    for (let num of arr) {
        frequency[num]++;
    }
    return frequency;
}
```

The function should take an integer array `arr` as input and return the frequency array as output.
