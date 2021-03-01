//评测题目: 无
// 题目
// 实现函数parseCoord，给定Excel单元格字符串，输出对应的行列值。
// 输入输出样例
// 样例一
// 输入：parseCoord('A1')
// 输出：{ col: 1, row: 1 }
// 样例二
// 输入：parseCoord('AB123')
// 输出：{ col: 28, row: 123 }

function indexOf(text: string, reg: RegExp) {
  return text.search(reg)
}

function parseRow(rowValue: string) {
  if (!rowValue) return undefined

  return parseInt(rowValue)
}

function parseCol(colValue: string) {
  if (!colValue) return undefined

  let value = 0
  const len = colValue.length
  for (let i = len - 1, j = 0; i >= 0; i--, j++) {
    value += (colValue.charCodeAt(j) - 'A'.charCodeAt(0) + 1) * Math.pow(26, i)
  }

  return value
}

function parseCell(coordinate: string) {
  const val = indexOf(coordinate, /[0-9]/)
  const colStr = val !== -1 ? coordinate.slice(0, val) : coordinate
  const rowStr = val !== -1 ? coordinate.slice(val) : ''

  return { col: parseCol(colStr), row: parseRow(rowStr) }
}

test('should return correct object when have row and value', () => {
  expect(parseCell('A1')).toEqual({ col: 1, row: 1 })
})

test('should return correct object when have row and value', () => {
  expect(parseCell('AB123')).toEqual({ col: 28, row: 123 })
})
