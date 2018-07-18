const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      return console.log('Deu ruim, não conectou com o MongoDB')
    } else {
      console.log('Conectou com o bando de boas')
    }

    // ObjectId("5b4de4470d27482fb9184cf8")

    db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID("5b4de4470d27482fb9184cf8")
    }, {
      $set: {
        completed: true
      }
    }, {
      returnOriginal: false
    }).then(result => {
      console.log(result)
    })

    // db.close()
})

