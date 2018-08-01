const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

//remove all
//Todo.remove({}).then(result => {
//  console.log(result)
//})

//remove by id
//Todo.findOneAndRemove
Todo.findByIdAndRemove('5b6204c6c3030e42c1094eef').then(todo => {
  console.log(todo)
})


