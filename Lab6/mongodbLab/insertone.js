const mongoClient = require("mongodb").MongoClient;
mongoClient
  .connect("mongodb://localhost:27017")
  .then((client) => {
    console.log("connected...");
    const obj = {
      title: "ServerSideProgramming",
      ISBN: "N555",
      publishedDate: "05/07/2002",
    };
    const db = client.db("bookStore");
    db.collection("books")
      .insertOne(obj)
      .then((result) => {
        console.log(result);
        obj._id = result.insertedId;
        console.log(obj);
        client.close();
      });
  })
  .catch((error) => console.log(error));
