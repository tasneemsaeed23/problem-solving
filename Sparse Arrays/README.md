## Problem Statement

You are given a collection of input strings and a collection of query strings. For each query string, determine how many times it appears in the list of input strings. Return an array of the results.

### Example

**Input:**

```plaintext
strings = ['ab', 'ab', 'abc']
queries = ['ab', 'abc', 'bc']
```

**Explanation:**

- The string `'ab'` appears **2 times** in `strings`.
- The string `'abc'` appears **1 time**.
- The string `'bc'` does not appear in `strings`.

**Output:**

```plaintext
[2, 1, 0]
```

### Function Description

Implement the function `matchingStrings` with the following parameters:

- **string strings[n]**: an array of strings to search.
- **string queries[q]**: an array of query strings.

**Returns:**

- **int[q]**: an array of integers where each integer represents the frequency of occurrence of each query string in `strings`.

### Input Format

- The first line contains an integer `n`, the size of `strings`.
- Each of the next `n` lines contains a string `strings[i]`.
- The next line contains an integer `q`, the size of `queries`.
- Each of the next `q` lines contains a string `queries[i]`.

### Constraints

- \(1 \leq n \leq 1000\)
- \(1 \leq q \leq 1000\)
- \(1 \leq \text{length of each } strings[i], queries[i] \leq 20\)

### Sample Input

```plaintext
4
aba
baba
aba
xzxb
3
aba
xzxb
ab
```

### Sample Output

```plaintext
2
1
0
```

---

### Explanation

In this example:

- The string `'aba'` appears **2 times** in `strings`.
- The string `'xzxb'` appears **1 time**.
- The string `'ab'` does not appear, so its count is **0**.
