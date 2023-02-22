function getProduct(a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(a * b)
    }, 1000)
  })
}

const printResult = async () => {
  try {
    const product = await getProduct(2, 4)
    const finalResult = await getProduct(product, 2)
    console.log('final_result', finalResult) // 'final_result', 16
  } catch (error) {
    console.log(error)
  }
}

printResult()
