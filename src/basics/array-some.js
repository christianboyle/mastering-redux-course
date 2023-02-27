const employees = [
  { name: 'David Carlson', age: 30 },
  { name: 'John Cena', age: 34 },
  { name: 'Mike Sheridon', age: 25 },
  { name: 'John Carte', age: 50 }
]

let indexValue = -1
const employee = employees.some(function (employee, index) {
  const isFound = employee.name.indexOf('John') > -1
  if (isFound) {
    indexValue = index
  }
  return isFound
})

console.log(employee, indexValue) // true 1
