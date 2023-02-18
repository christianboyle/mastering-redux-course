// arguments object doesn't work with arrow functions

function add() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  console.log(sum) // 15
}

// add(1, 2, 3, 4, 5)

const addArrow = () => {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  console.log(sum) // Uncaught ReferenceError: arguments is not defined
}

// addArrow(1, 2, 3, 4, 5)

// differences with this keyword

const display = () => {
  console.log(this) // window object
}

display()

const countries = {
  names: ['US', 'INDIA', 'JAPAN'],
  display: function () {
    console.log(this) // { names: Array(3) [ 'US', 'INDIA', 'JAPAN' ] }
  }
}

countries.display()

const countriesAnon = {
  names: ['US', 'INDIA', 'JAPAN'],
  display: function () {
    setTimeout(() => {
      console.log(this) // window object
      console.log(this.names) // [ 'US', 'INDIA', 'JAPAN' ]
    }, 1000)
  }
}

countriesAnon.display()
