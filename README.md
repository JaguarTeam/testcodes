# Challenges
# Array Complement and Indexes Functions

This repository contains two functions implemented in TypeScript for finding array complements and indexes.

## Table of Contents

- [Introduction](#introduction)
- [Functions](#functions)
  - [getArrayComplement](#getarraycomplement)
  - [getArrayIndexes](#getarrayindexes)
- [Testing](#testing)

- [Live Preview](#live-preview)
- [Thoughts on implementation](#thoughts-on-implementation)


## Introduction

The two functions provided in this repository are designed to solve specific problems related to arrays.

### Prerequisites

Before running the functions, make sure you have the following:

- [Bun runtime](https://bun.sh/) installed on your system.


## Functions

### getArrayComplement

The `getArrayComplement` function takes an array as input and returns an array that contains the complement of the input array. The complement array consists of all the positive integers that are not present in the input array.

### getArrayIndexes
The `getArrayIndexes` function takes two arguments: a target number and an array of numbers. It returns an array of two indexes from the input array, where the elements at those indexes add up to the target number. If no such indexes are found, an empty array is returned.
## Testing
In order to run tests in Bun runtime execute next command in project directory:
```
bun test
```
this command will lookup for .test.ts file and run them.

## Live preview
- here goes link to live preview 
## Thoughts on implementation
### breaking down getArrayComplement function
The first step is created an object where each element of the input array
is converted into a key in the `keyEntries` object and set the value to `true` that way we can keep track of every number that already exists without the need for using a second loop to check whether a number exists or not.
Next I crafted a piece of for loop from 1 to length of the input array + 1 
this way I created a `virtual array` that represents the complete range of positive integers up to the size of the input array(I added one due to the loop is starting at 1, Since it iterates through the array once, the time complexity of this loop is O(n)). For each element in the virtual array I check if it does not exist in the `keyEntries` Object if it does not exists then I added that element to a complementArray in order to store the elements that are not in the original array. 
As the most significant factor determining the time complexity is the loop that runs through the array, the overall time complexity of the function is O(n).

### breaking down getArrayIndexes function
The object `numMap` will initialize data structure(such as `{ number:number }`where the key is each element from the input array(nums) and the value is the index of the current element).
Next the loop runs from index 0 to the length of the nums array. 
Since it iterates through the array once, the time complexity of this loop is O(n).
Inside the for loop, the first step is to compute the complement beetwen the target and the current element, then that I retrieve the index of the complement from the `numMap`. 
Then it checks if the complement value exists in the numMap and ensures that the current element's index is not the same as the index of the complement, if the condition in the previous step is true, we return the pair of indexes as an array, if the condition is not met, we add the current element and its index to the `numMap`, if the condition in the previous step is true, we return the pair of indexes as an array
As the most significant factor determining the time complexity is the loop that runs through the nums array, the overall time complexity of the function is O(n).
