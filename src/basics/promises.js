function createPromise(a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const sum = a + b
      if (isNaN(sum)) {
        reject('Error while calculating sum.')
      } else {
        resolve({
          a: a,
          b: b,
          sum
        })
      }
    }, 2000)
  })
}

createPromise(1, 8).then(function (output) {
  console.log(output) // { a: 1, b: 8, sum: 9 }
})

createPromise(10, 24).then(function (output) {
  console.log(output) // { a: 10, b: 24, sum: 34 }
})
