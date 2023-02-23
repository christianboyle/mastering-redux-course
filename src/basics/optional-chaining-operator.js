const user = {
  name: 'David',
  location: {
    street: {
      number: 20,
      name: '11 wall street'
    }
  }
}

const streetName = user?.location?.street?.name
console.log(streetName)
