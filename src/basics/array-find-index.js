const employees = [
  { name: 'David Carlson', age: 30 },
  { name: 'John Cena', age: 34 },
  { name: 'Mike Sheridan', age: 25 },
  { name: 'John Carte', age: 50 }
]

const index = employees.findIndex(function (employee) {
  return employee.name.indexOf('John') > -1
})

console.log(index)
