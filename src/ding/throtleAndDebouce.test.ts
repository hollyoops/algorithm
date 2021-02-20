/* eslint-disable no-console */
function throttle(time: number, fn: () => void) {
  let timer: NodeJS.Timer | undefined = undefined

  return function() {
    if (!timer) {
      fn()
    } else {
      return
    }

    timer = setTimeout(() => {
      timer = undefined
    }, time)
  }
}

test('throttle', async () => {
  const fn = throttle(100, () => console.log(1))

  fn()
  fn()

  // eslint-disable-next-line no-undef
  await new Promise(resolve => {
    setTimeout(() => {
      resolve(undefined)
    }, 510)
  })

  fn()
  // eslint-disable-next-line no-undef
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(undefined)
    }, 500)
  })
})
