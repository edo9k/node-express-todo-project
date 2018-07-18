// const MongoClient = require('mongodb').MongoClient
const {MongoClient} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Deu ruim nessa merda, conectou com o Mongo não.')
  } else {
    console.log('Conectado com o MongoDB.')

    // INSERTING A RECORD
    //    db.collection('Todos').insertOne({
    //      text: `Something to do ${Date.now()}`,
    //      completed: Boolean(Date.now() % 2)
    //    }, (err, result) => {
    //      if (err) {
    //        return console.log('Unable to insert todo', err)
    //      }
    //
    //      console.log(JSON.stringify(result.ops, undefined, 2))
    //    })
    
    // RETRIEVING RECORDS          
    //  db.collection('Todos').find({completed: true}).toArray().then( docs => {
    //    console.log('Todos') console.log(JSON.stringify(docs, undefinedi, 2)) 
    //  }, err => {
    //      console.log('Não conseguiu recuperar os registros', err)
    //  })
    //        

     COUNTING RECORDS IN DATABASE
    db.collection('Todos').find().count().then( count => {
      console.log(`Todos count: ${count}`)
    }, err => {
        console.log('Não conseguiu recuperar os registros', err)
    })

  db.close()
  }
})


