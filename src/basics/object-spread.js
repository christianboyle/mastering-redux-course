const user = {
  name: 'John',
  age: 36
}

const updatedUser = { ...user, age: 40, location: 'NY' }

console.log(updatedUser) // { name: 'John', age: 40, location: 'NY' }

const anotherUpdatedUser = { age: 40, ...user, location: 'San Diego' }

console.log(anotherUpdatedUser) // { age: 36, name: 'John', location: 'San Diego' }
