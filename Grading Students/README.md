# Grading Students Problem

## Problem Description

HackerLand University has a grading policy as follows:

- Each student receives a grade in the range from 0 to 100.
- Any grade less than 40 is considered a failing grade.

Sam, a professor at the university, likes to round each student’s grade according to these rules:

1. If the difference between the grade and the next multiple of 5 is less than 3, round the grade up to the next multiple of 5.
2. If the grade is less than 38, no rounding occurs as the result will still be a failing grade.

### Examples

- **Input:** `grade = 84`  
  **Output:** `85` (rounded up because 85 - 84 < 3)
- **Input:** `grade = 29`  
  **Output:** `29` (no rounding because the grade is less than 40)

- **Input:** `grade = 57`  
  **Output:** `57` (no rounding because 60 - 57 is 3 or more)

## Function Description

Complete the `gradingStudents` function, which automates the rounding process for each grade.

### Parameters

- **grades (array of integers):** The list of grades before rounding.

### Returns

- **array of integers:** The list of grades after rounding as per the rules.

## Input Format

1. The first line contains a single integer, `n`, which represents the number of students.
2. Each of the next `n` lines contains a single integer, `grades[i]`, representing each student's grade.

### Constraints

- \( 1 \< n \< 60 \)
- \( 0 \< grades[i] \< 100 \)

## Solution Explanation

To solve the problem, we use the following steps:

1. Iterate through each grade in the `grades` array.
2. If the grade is less than 38, keep it as is since it's a failing grade.
3. If the grade is 38 or higher:
   - Calculate the next multiple of 5.
   - If the difference between the grade and this multiple is less than 3, round the grade up.
   - Otherwise, keep the grade unchanged.
