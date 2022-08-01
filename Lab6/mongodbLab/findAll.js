// const mongoClient = require("mongodb").mongoClient;
// mongoClient
// .connect("mongodb://localhost:27017")
// .then((client) => {
// console.log("connected...");
// const db = client.db("bookStore");
// db.collection("books")
// .find()
// .toArray()
// .then((boks) => {
// console.log(boks);
// client.close();
// });
// })
// .catch((error) => console.log(error));
//
//findAll async
const { MongoClient } = require("mongodb");

(async function () {
  const client = await MongoClient.connect("mongodb://localhost:27017");
  console.log("connected...");

  const products = await client
    .db("bookStore")
    .collection("books")
    .find()
    .toArray();
  console.log(products);

  client.close();
})();
