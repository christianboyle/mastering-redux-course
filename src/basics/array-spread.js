const first = ['monday', 'tuesday']
const second = ['wednesday', 'thursday', 'friday']
const combined = ['sunday', ...first, ...second, 'saturday']
console.log(combined) // [ 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ]
