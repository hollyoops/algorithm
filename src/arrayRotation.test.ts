/**
Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
 
**/

test('should rotate correct with mod', () => {
  const rotate = (array: number[], shift: number) => {
    const lengthOfArray = array.length
    const startIdx = lengthOfArray - shift
    const endIdx = lengthOfArray - 1 + startIdx
    const rotateArray: number[] = []

    for (let curIdx = startIdx; curIdx <= endIdx; curIdx++) {
      rotateArray.push(array[curIdx % lengthOfArray])
    }

    return rotateArray
  }

  expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4])
})
