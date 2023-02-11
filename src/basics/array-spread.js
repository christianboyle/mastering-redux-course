const numbers = [1000, -20, 0, 40, 800]
const max = Math.max(...numbers)
console.log(max) // 1000

const first = ['monday', 'tuesday']
const second = ['wednesday', 'thursday', 'friday']
const combined = ['sunday', ...first, ...second, 'saturday']
console.log(combined) // [ 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ]
