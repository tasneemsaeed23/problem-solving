# Mars Exploration Problem

A space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help.
Letters in some of the SOS messages are altered by cosmic radiation during transmission.
Given the signal received by Earth as a string `s`, determine how many letters of the SOS message have been changed by radiation.

## Function Description

Complete the `marsExploration` function in the editor below.

### marsExploration Function

```javascript
function marsExploration(s) {
  // Your implementation here
}
```

**Parameters**:

- `string s`: the string as received on Earth

**Returns**:

- `int`: the number of letters changed during transmission

## Input Format

There is one line of input: a single string, `s`.

## Constraints

- \( 1 \leq ext{length of } s \leq 99 \)
- \( ext{length of } s \mod 3 = 0\)
- `s` will contain only uppercase English letters (ASCII[A-Z]).

## Explanation

### Example 1

```plaintext
Input:
S = SOSSPSSQSSOR
Output:
3

Explanation:
- The original signal is expected to be: SOSSOSSOSSOS
- The received signal is: SOSSPSSQSSOR
- Three letters were changed in transmission: P, Q, and R.
```

### Example 2

```plaintext
Input:
S = SOSSOT
Output:
1

Explanation:
- The original signal is expected to be: SOSSOS
- The received signal is: SOSSOT
- One letter was changed in transmission: T instead of S.
```
