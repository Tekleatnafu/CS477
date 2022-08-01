const { MongoClient, ObjectId } = require("mongodb");

(async function () {
  const client = await MongoClient.connect("mongodb://localhost:27017");
  console.log("connected...");

  const result = await client
    .db("bookStore")
    .collection("books")
    .deleteOne({ _id: new ObjectId("62e60da6bdf7409bb911d71f") });
  console.log(result);
  client.close();
})();
