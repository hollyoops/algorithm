/**
 * https://leetcode.com/problems/subsets/
 */
test('should return all subset of array', () => {
  // https://zhuanlan.zhihu.com/p/308398438
  function dfs(
    ret: number[][],
    nums: number[],
    saved: number[],
    start: number,
  ) {
    if (start >= nums.length) {
      return
    }

    for (let i = start; i < nums.length; i++) {
      saved.push(nums[i])
      ret.push(saved.concat([]))
      dfs(ret, nums, saved, i + 1)
      saved.pop()
    }
  }

  function getSubset(nums: number[]) {
    const results: number[][] = []
    results.push([])
    dfs(results, nums, [], 0)
    return results
  }

  expect(getSubset([1, 2, 3])).toEqual([
    [],
    [1],
    [1, 2],
    [1, 2, 3],
    [1, 3],
    [2],
    [2, 3],
    [3],
  ])
})

test('should return all subset of array', () => {
  function isSame(left: number[], right: number[]) {
    if (left.length !== right.length) return false

    for (let i = 0; i < left.length; i++) {
      if (left[i] !== right[i]) return false
    }

    return true
  }

  function contains(ret: number[][], target: number[]) {
    for (let i = 0; i < ret.length; i++) {
      if (isSame(ret[i], target)) return true
    }

    return false
  }

  function dfs(ret: number[][], saved: number[], rest: number[]) {
    if (rest.length === 0) {
      return
    }

    for (let i = 0; i < rest.length; i++) {
      const values = saved.concat(rest[i]).sort()
      if (contains(ret, values)) continue
      ret.push(values)
      const restList = rest.filter((_, idx) => i !== idx)
      dfs(ret, values, restList)
    }
  }

  function getSubset(num: number[]) {
    const results: number[][] = []
    results.push([])
    dfs(results, [], num)
    return results
  }

  expect(getSubset([1, 2, 3])).toEqual([
    [],
    [1],
    [1, 2],
    [1, 2, 3],
    [1, 3],
    [2],
    [2, 3],
    [3],
  ])
})
