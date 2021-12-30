const mongoose = require('mongoose');

const url = 'mongodb+srv://Lucas:benfantasmi@cluster0.p9bsy.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(url, {
    useNewUrlParser: true,
})





















// const mongodb = require('mongodb')

// const url = 'mongodb://localhost:27017'


// const MongoClient = mongodb.MongoClient;


// let getClient = (callback) => {
//     MongoClient.connect(url, (error, client) => {
//         if (error) return console.log('Error de conexion')
//         const db = client.db('test')
//         callback(db)
//     })
// }


// module.exports = getClient