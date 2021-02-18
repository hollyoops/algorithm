/**
实现一个随机符串生成函数 randomStr()，要求如下：
1. 生成的随机的字符串应该以字母开头，并包含 [a-z][0-9] 这些字符。
2. 生成的字符串长度为 8。
3. 生成的字符串不能够在程序运行的生命周期中存在重复的情形。
*/

const randomTable = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('')

function randomStr() {
  const result = []
  // eslint-disable-next-line no-undef
  const generatedSet = new Set<string>()

  function doGen(times: number) {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const maxIndex = times === 0 ? 26 : 36
      const idx = Math.floor(Math.random() * 100) % maxIndex
      const v = randomTable[idx]

      if (!generatedSet.has(v)) {
        generatedSet.add(v)
        return v
      }
    }
  }

  for (let i = 0; i < 8; i++) {
    result.push(doGen(i))
  }

  return result.join('')
}

test('randomString', () => {
  // eslint-disable-next-line no-console
  console.log(randomStr())
})
