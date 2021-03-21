/**
 * https://leetcode.com/problems/permutations/
 * This problem also can be solved with backtracking
 */

test('should find all permutations', () => {
  function dfs(ret: number[][], rest: number[], saved: number[]) {
    if (rest.length === 0) {
      return ret.push(saved)
    }

    for (let i = 0; i < rest.length; i++) {
      const restList = rest.filter((v, idx) => i !== idx)
      dfs(ret, restList, saved.concat(rest[i]))
    }
  }

  function permutations(num: number[]) {
    const results: number[][] = []
    dfs(results, num, [])
    return results
  }

  expect(permutations([1, 2, 3])).toEqual([
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ])
})

/**
 * https://leetcode.com/problems/permutations-ii/
 */
test('should find all permutations without duplicated', () => {
  function dfs(ret: number[][], rest: number[], saved: number[]) {
    if (rest.length === 0) {
      return ret.push(saved)
    }

    const visited: number[] = []
    for (let i = 0; i < rest.length; i++) {
      if (visited.indexOf(rest[i]) !== -1) continue
      visited.push(rest[i])
      const restList = rest.filter((v, idx) => i !== idx)
      dfs(ret, restList, saved.concat(rest[i]))
    }
  }

  function permutations(num: number[]) {
    const results: number[][] = []
    dfs(results, num, [])
    return results
  }

  expect(permutations([1, 1, 2])).toEqual([
    [1, 1, 2],
    [1, 2, 1],
    [2, 1, 1],
  ])
})
