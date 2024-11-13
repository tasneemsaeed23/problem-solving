# Lonely Integer Problem

## Problem Description

Given an array of integers where all elements appear twice except for one unique element that appears only once, find and return the unique element.

### Example

If the input is:
a = [1, 2, 3, 4, 3, 2, 1]

The output should be:
4

Explanation: The number `4` is the only element that does not repeat in the array.

## Function Description

You need to complete the function `lonelyinteger` which takes:

- **a (array of integers)**: an array of integers.

### Function Output

- **Returns (integer)**: the integer that occurs only once in the array.

## Input Format

1. The first line contains a single integer, `n`, representing the number of integers in the array.
2. The second line contains `n` space-separated integers, which are the values in `a`.

### Constraints

- \(1 \< n < 100\)
- `n` is guaranteed to be an odd number, meaning there is always one unique element.
- \(0 \< a[i] \< 100\), for all \(0 \< i < n\).

## Solution Explanation

To solve this problem, we can use the XOR bitwise operation due to its unique properties:

- **`x ^ x = 0`**: Any number XORed with itself results in 0.
- **`x ^ 0 = x`**: Any number XORed with 0 remains unchanged.

Since every number in the array appears twice except for one, XORing all the numbers together will cancel out the numbers that appear twice, leaving only the unique number.
