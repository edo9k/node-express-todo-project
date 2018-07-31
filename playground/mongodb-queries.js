const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')


let id = '5b60717b8470825531c2b3c8'

if (!ObjectID.isValid(id)) {
  console.log("This ID is not valid\n---")
}


//Todo.find({ 
//  _id : id 
//}).then(todos => {
//  console.log('Todos', todos)
//  console.log('---------------------------------')
//})
//
//
//Todo.findOne({
//  _id : id
//}).then(todo => {
//  console.log('Todo', todo)
//  console.log('---------------------------------')
//})
//
//Todo.findById(id).then(todo => {
//  if (!todo) {
//    return console.log('Id not found')
//  }
//  console.log('Todo by Id', todo)
//  console.log('---------------------------------')
//}).catch(e => console.log(e))

User.findById('5b607c4eced54c2a7f806985').then(user => {
  if (!user) {
    return console.log('Unable to find user')
  }
  console.log(JSON.stringify(user, undefined, 2))
}, e => {
  console.log(e)
})
