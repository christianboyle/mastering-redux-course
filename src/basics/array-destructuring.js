const months = ['January', 'February', 'March', 'April']
const [firstMonth, secondMonth, ...restMonths] = months

console.log(firstMonth) // January
console.log(secondMonth) // February
console.log(restMonths) // [ 'March', 'April' ]
