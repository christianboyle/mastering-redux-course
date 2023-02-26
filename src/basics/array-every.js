let numbers = [10, -30, 20, 50]

let allPosiive = numbers.every(function (number) {
  return number > 0
})

console.log(allPosiive) // false

numbers = [10, 30, 20, 50]

allPositive = numbers.every(function (number) {
  return number > 0
})

console.log(allPositive) // true
