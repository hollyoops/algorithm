/**
 * Select sort
 */

const selectSort = (nums: number[]) => {
  for (let cur = 0; cur < nums.length - 1; cur++) {
    let min = cur
    for (let next = cur + 1; next <= nums.length - 1; next++) {
      if (nums[min] > nums[next]) {
        min = next
      }
    }

    const tmp = nums[min]
    nums[min] = nums[cur]
    nums[cur] = tmp
  }

  return nums
}

test('should sort array correct', () => {
  expect(selectSort([4, 1, 3, 0])).toEqual([0, 1, 3, 4])
})
