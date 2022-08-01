const { MongoClient } = require("mongodb");

(async function () {
  const client = await MongoClient.connect("mongodb://localhost:27017");
  console.log("connected...");

  const docs = [
    { title: "Paython", ISBN: "P257", publishedDate: "05/07/1998" },
    { title: "C++", ISBN: "C373", publishedDate: "07/03/1989" },
  ];
  const result = await client
    .db("bookStore")
    .collection("books")
    .insertMany(docs);
  console.log(result);

  client.close();
})();
