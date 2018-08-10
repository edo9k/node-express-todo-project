const {ObjectID} = require('mongodb')
const jwt = require('jsonwebtoken')

const {Todo} = require('./../../models/todo')
const {User} = require('./../../models/user')

const userOneId = new ObjectID()
const userTwoId = new ObjectID()

const users = [{
  _id: userOneId,
  email: 'fulanera@email.com',
  password: 'userOnePass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, 'this-password-policy-is-shit').toString()
  }]
}, {
  _id: userTwoId,
  email: 'whatever2018@email.com',
  password: 'userTwoPass'
}]

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo'
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 333
}]

const populateTodos = done => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos)
  }).then(() => done())
}

const populateUsers = done => {
  User.remove({}).then(() => {
    let userOne = new User(users[0]).save()
    let userTwo = new User(users[1]).save()

    return Promise.all([userOne, userTwo])
  }).then(() => done())
}

// class 93 @3:18
module.exports = {todos, populateTodos, users, populateUsers}
