---
title: SIngle Missing Number using XOR 
date: '2022-11-29'
tags: ['HashMap', 'Bitwise XOR', 'Algorithms']
pattern: ['Bitwise XOR']
draft: false
summary: In a non-empty array of integers, every number appears twice except for one, find that single number.
---

# Single Number - XOR
## In a non-empty array of integers, every number appears twice except for one, find that single number.


**Example 1:**
```
Input: 1, 4, 2, 1, 3, 2, 3
Output: 4
```

**Example 2:**
```
Input: 7, 9, 7
Output: 9
```

### Solution:

1. Using Hashmap  ``<O(n), O(n)>``
2. Using XOR  ``<O(n), O(1)>``


#### (2) With XOR

Recall the following two properties of XOR:

-   It returns zero if we take XOR of two same numbers.
-   It returns the same number if we XOR with zero.

So we can XOR all the numbers in the input; duplicate numbers will zero out each other and we will be left with the single number.


### Code

```java
public static int findSingleNumber(int[] arr) {
    int num = 0;
    for(int i = 0; i < arr.length; i++) 
        num = num ^ arr[i];
    return num;
}
```

