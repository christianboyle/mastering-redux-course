function addNumbers(...numbers) {
  let sum = 0
  numbers.forEach(function (value) {
    sum += value
  })
  return sum
}

console.log(addNumbers(1, 2, 3, 4, 5)) // 15
