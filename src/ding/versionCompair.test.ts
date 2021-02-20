// https://www.lintcode.com/problem/compare-version-numbers/

function compareVersions(version1: string, version2: string) {
  const version1Arr = version1.split('.')
  const version2Arr = version2.split('.')

  if (version1Arr.length !== version2Arr.length) {
    let diffOfLen = Math.abs(version1Arr.length - version2Arr.length)
    const target =
      version1Arr.length < version2Arr.length ? version1Arr : version2Arr

    while (diffOfLen-- > 0) {
      target.push('0')
    }
  }

  for (let i = 0; i < version1Arr.length; i++) {
    const number1 = parseInt(version1Arr[i])
    const number2 = parseInt(version2Arr[i])

    if (number1 > number2) return 1
    if (number1 < number2) return -1
  }

  return 0
}

test('should return 0', () => {
  expect(compareVersions('1', '01')).toEqual(0)
})

test('should return 1 when version 1 > version 2', () => {
  expect(compareVersions('4.9', '4.5')).toEqual(1)
})
