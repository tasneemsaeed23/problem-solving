# Problem: Flipping Bits

You will be given a list of 32-bit unsigned integers. Flip all the bits (1 → 0 and 0 → 1) and return the result as an unsigned integer.

## Example

Given an integer `n = 9`:

- `n` in binary (32-bit): `00000000000000000000000000001001`
- After flipping all bits: `11111111111111111111111111110110`
- Result in decimal: `4294967286`

### Explanation

In binary, the integer 9 is represented as `00000000000000000000000000001001` (32 bits). After flipping all bits, we get `11111111111111111111111111110110`, which is equivalent to `4294967286` in decimal.

## Function Description

Complete the `flippingBits` function in the editor below.

- **Function Signature**: `flippingBits(n: int) -> int`
- **Parameters**:
  - `int n`: an integer to process
- **Returns**:
  - `int`: the unsigned decimal integer result after flipping all bits.

## Input Format

The first line of the input contains `q`, the number of queries. Each of the next `q` lines contains an integer, `n`, to process.

## Constraints

- `1 ≤ q ≤ 100`
- `0 ≤ n < 2^32`

## Sample Input

```
3
2147483647
1
0
```

## Sample Output

```
2147483648
4294967294
4294967295
```

### Explanation of Sample

1. For the input `2147483647`, the 32-bit binary representation is `01111111111111111111111111111111`. Flipping all bits yields `10000000000000000000000000000000`, which is `2147483648` in decimal.
2. For the input `1`, the 32-bit binary representation is `00000000000000000000000000000001`. Flipping all bits yields `11111111111111111111111111111110`, which is `4294967294` in decimal.
3. For the input `0`, the 32-bit binary representation is `00000000000000000000000000000000`. Flipping all bits yields `11111111111111111111111111111111`, which is `4294967295` in decimal.
