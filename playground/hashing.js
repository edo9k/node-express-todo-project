const {SHA256} = require('crypto-js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const password = 'somesecretpassphraseshit'

/*
bcrypt.genSalt(10, (err, salt) => {
  console.log(`salt: ${salt}`)
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(`password: ${password}\nhash: ${hash}\n`)
  })
})
*/

const hashedPassword = '$2a$10$Bhx3Q.HU52LtrnXnxRgYt.D5iYg4EpuoKI3MaYNz/54VniZm0a0gi'

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res)
})

//
//const data = {
//  id: 10
//}
//
//const token = jwt.sign(data, 'weakafpassword')
//console.log(token)
//
//const decoded = jwt.verify(token, 'weakafpassword')
//console.log('decoded: ',decoded)
//
//const message = 'I am user number 3'
//const hash = SHA256(message).toString()
//
//console.log(`Message: ${message}`)
//console.log(`Hash: ${hash}`)
//
//const data = {
//  id: 4
//}
//
//let token = {
//  data,
//  hash: SHA256(JSON.stringify(data) + 'somesecretpassphrase').toString()
//}
//
////token.data.id = 5
////token.hash = SHA256(JSON.stringify(token.data)).toString()
//
//let resultHash = SHA256(JSON.stringify(token.data) + 'somesecretpassphrase').toString()
//
//if (resultHash === token.hash) {
//  console.log('Data was not changed.')
//} else {
//  console.log('Data was changed. Do not trust!')
//}
