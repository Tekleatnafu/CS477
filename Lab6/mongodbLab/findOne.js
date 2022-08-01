// const { MongoClient, ObjectId } = require('mongodb');
// MongoClient.connect('mongodb://127.0.0.1:27017')
// .then(client => {
// client.db('shopping').collection('products')
// .findOne({_id: new ObjectId
// ('62e42ff8c3ee4b5dce3596e6')})
// .then(prod => {
// console.log(prod);
// client.close();
// })
// });

//Async way
const { MongoClient, ObjectId } = require("mongodb");

async function run() {
  const client = await MongoClient.connect("mongodb://localhost:27017");
  const book = await client
    .db("bookStore")
    .collection("books")
    .findOne({ _id: new ObjectId("62e42fdec3ee4b5dce3596e5") });
  console.log(book);
  client.close();
}

run();
