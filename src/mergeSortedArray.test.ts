/** Merge two sorted array into one **/

const mergeSortedArray = (left: number[], right: number[]) => {
  let lCursor = 0
  let rCursor = 0
  const mergedArray: number[] = []

  while (lCursor < left.length || rCursor < right.length) {
    const lFinal = lCursor >= left.length ? Number.MAX_VALUE : left[lCursor]
    const rFinal = rCursor >= right.length ? Number.MAX_VALUE : right[rCursor]

    if (lFinal <= rFinal) {
      mergedArray.push(left[lCursor++])
    } else {
      mergedArray.push(right[rCursor++])
    }
  }

  return mergedArray
}

test('should merge two array successfully', () => {
  expect(mergeSortedArray([5, 6, 7], [1, 3, 4])).toEqual([1, 3, 4, 5, 6, 7])
})
