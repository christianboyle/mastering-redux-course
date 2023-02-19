const post = {
  image: 'https://via.placeholder.com/250',
  likes: 200,
  comments: 400,
  date: '2019–12–20'
}

const {
  image = 'https://via.placeholder.com/150',
  likes,
  comments,
  date
} = post

console.log(image) // 'https://via.placeholder.com/250'
console.log(likes) // 200
console.log(comments) // 400
console.log(date) // '2019-12-20'
