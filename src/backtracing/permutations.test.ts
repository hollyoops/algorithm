/**
 * https://leetcode.com/problems/permutations/
 */

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

test('should find all permutations', () => {
  expect(permutations([1, 2, 3])).toEqual([
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ])
})
