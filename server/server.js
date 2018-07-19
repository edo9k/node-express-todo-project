let mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp')

let Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
})

//let otherTodo = new Todo({
//  text: ' Test 2  ',
//  //completed: true,
//  //completedAt: 123
//})
//
//otherTodo.save().then((doc) => {
//  console.log(JSON.stringify(doc, undefined, 2))
//}, e => {
//  console.log('Unable to save', e)
//})

// User 
// email - require it - trim it - set type - set min length of 1
let User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
})


let user = new User({
  email: 'user1@example.com  '
})

user.save().then(doc => {
  console.log('User saved', doc)
}, e => {
  console.log('Unable to save user', e)
})


