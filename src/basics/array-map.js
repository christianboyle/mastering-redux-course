const months = ['January', 'February', 'March', 'April']

const transformedArray = months.map(function (month) {
  return month.toUpperCase()
})

console.log(transformedArray)

// ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL']

const users = [
  {
    first_name: 'Mike',
    last_name: 'Sheridan',
    age: 30
  },
  {
    first_name: 'Tim',
    last_name: 'Lee',
    age: 45
  },
  {
    first_name: 'John',
    last_name: 'Carte',
    age: 25
  }
]

const surnames = users.map(function (user) {
  return user.last_name
})

console.log(surnames)

// ['Sheridan', 'Lee', 'Carte']
