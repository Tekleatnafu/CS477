const { MongoClient, ObjectId } = require("mongodb");
MongoClient.connect("mongodb://localhost:27017")
  .then((client) => {
    client
      .db("bookStore")
      .collection("books")
      .updateOne(
        { _id: new ObjectId("62e60e78bdf7409bb911d721") },
        { $set: { title: "DataStrucure", updated_date: new Date() } }
      )
      .then((result) => {
        console.log(result);
        client.close();
      });
  })
  .catch((error) => console.log(error));
