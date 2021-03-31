/// https://leetcode.com/problems/generate-parentheses/
test('should return all of valid match parentheses', () => {
  function backtracking(
    array: string[],
    n: number,
    visited: boolean[],
    visitedSet: Set<string>,
    value: number,
    allResults: string[],
    result: string,
  ) {
    if (result.length === 2 * n) {
      allResults.push(result)
      return true
    }

    for (let i = 0; i < array.length; i++) {
      if (visited[i]) continue
      const currValue = array[i]
      const newValue = currValue === '(' ? value + 1 : value - 1

      if (newValue >= 0) {
        const next = result + currValue
        if (visitedSet.has(next)) {
          continue
        } else {
          visitedSet.add(next)
        }

        visited[i] = true
        backtracking(array, n, visited, visitedSet, newValue, allResults, next)
        visited[i] = false
      } else {
        return
      }
    }
  }

  function generateParenthesis(n: number): string[] {
    const raw = new Array(n).fill('(').concat(new Array(n).fill(')'))
    const visited = new Array(2 * n).fill(false)
    const allValues: string[] = []
    // eslint-disable-next-line no-undef
    const visitedSet = new Set<string>()
    backtracking(raw, n, visited, visitedSet, 0, allValues, '')
    return allValues
  }

  expect(generateParenthesis(3)).toEqual([
    '((()))',
    '(()())',
    '(())()',
    '()(())',
    '()()()',
  ])
})
