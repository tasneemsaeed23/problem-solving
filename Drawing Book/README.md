# Minimum Page Turns Problem

## Problem Description

A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page 1 is always on the right side.

When they flip page 1, they see pages 2 and 3. Each page, except the last page, will always be printed on both sides. The last page may only be printed on the front, given the length of the book.

Given a book with `n` pages, and a student wants to turn to page `p`, the task is to determine the **minimum number of pages** the student must turn.

## Input Format

1. An integer `n` - the total number of pages in the book.
2. An integer `p` - the page number to turn to.

## Constraints

- \(1 \leq n \leq 10^5\)
- \(1 \leq p \leq n\)

## Output Format

An integer representing the minimum number of pages that must be turned.

## Example

### Input

```
n = 5
p = 3
```

### Output

```
1
```

### Explanation

If the student starts from the beginning, they flip 1 page to reach page 3.  
If the student starts from the end, they also flip 1 page to reach page 3.  
Thus, the minimum number of pages to turn is **1**.

## Solution

The solution involves calculating the number of turns from both the start and the end of the book:

1. **From the front**: Calculate the number of pages to turn as `p // 2`.
2. **From the back**: Calculate as `(n // 2) - (p // 2)`.
3. Return the minimum of the two values.

## Code Implementation

Below is the implementation in JavaScript:

```javascript
function pageCount(n, p) {
  // Calculate turns from the front
  const turnsFromStart = Math.floor(p / 2);

  // Calculate turns from the back
  const turnsFromEnd = Math.floor(n / 2 - Math.floor(p / 2));

  // Return the minimum
  return Math.min(turnsFromStart, turnsFromEnd);
}
```
