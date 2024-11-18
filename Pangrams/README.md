
# Pangram Checker

## Problem Statement

A **pangram** is a string that contains every letter of the English alphabet at least once. Given a sentence, determine whether it is a pangram. Ignore case sensitivity.

You need to write a function `pangrams(s)` that returns:
- `"pangram"` if the input string contains all the letters from `a` to `z` at least once.
- `"not pangram"` otherwise.

### Example

**Input:**
```
s = "The quick brown fox jumps over the lazy dog"
```

**Output:**
```
pangram
```

### Function Description

#### `pangrams(s: string) -> string`

- **Parameter:**
  - `s`: A string to test (can contain letters, spaces, and other characters).

- **Returns:**
  - A string: `"pangram"` if the input string is a pangram, otherwise `"not pangram"`.

### Input Format

A single line containing the string `s`.

### Constraints

- `0 < length of s ≤ 10^3`
- Each character of `s` belongs to `{a-z, A-Z, space}`.

### Sample Input/Output

#### Sample Input 0:
```
We promptly judged antique ivory buckles for the next prize
```

#### Sample Output 0:
```
pangram
```

#### Explanation 0:
The string contains all the letters of the English alphabet.

---

#### Sample Input 1:
```
We promptly judged antique ivory buckles for the prize
```

#### Sample Output 1:
```
not pangram
```

#### Explanation 1:
The string does not contain the letter `x`.

---

### Solution Outline

1. Convert the input string to lowercase to ignore case.
2. Use a set to collect unique alphabetic characters in the string.
3. If the size of the set equals 26, the string is a pangram.
4. Otherwise, it is not a pangram.

### Example Code

```javascript
function pangrams(s) {
    const lowerCaseStr = s.toLowerCase();
    const letters = new Set();
    for (const char of lowerCaseStr) {
        if (char >= 'a' && char <= 'z') {
            letters.add(char);
        }
    }
    return letters.size === 26 ? "pangram" : "not pangram";
}
```

