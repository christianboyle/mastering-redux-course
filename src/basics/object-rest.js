const movie = {
  name: "Harry Potter and the Philosopher's Stone",
  release_year: 2001,
  actor: 'Daniel Radcliffe',
  actress: 'Emma Watson'
}

function display({ name, release_year, ...remaining }) {
  console.log(name) // 'Harry Potter and the Philosopher\'s Stone'
  console.log(release_year) // 2001
  console.log(remaining) // { actor: 'Daniel Radcliffe', actress: 'Emma Watson' }
}

display(movie)
