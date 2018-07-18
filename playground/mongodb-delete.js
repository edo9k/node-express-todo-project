const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      return console.log('Deu ruim, não conectou com o MongoDB')
    } else {
      console.log('Conectou com o bando de boas')
    }

    // deleteMany
    //db.collection('Todos').deleteMany({text: 'Eat lunch'}).then(result => {
    //  console.log(result)
    //})

    // deleteOne
    //db.colletion('Todos').deleteOne({text: 'Eat lunch'}).then(result => {
    //  console.log(result)
    //})

    // findOneAndDelete
    db.colletion('Todos').findOneAndDelete({completed: false}).then(result => {
      console.log(result)
    })

    db.close()
})

