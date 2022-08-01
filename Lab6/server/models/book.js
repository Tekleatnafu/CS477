const { getDB } = require("../utils/database");
const { ObjectId } = require("mongodb");
module.exports = class Book {
  constructor(id, title, ISBN, publishedDate, author) {
    this.id = id;
    this.title = title;
    this.ISBN = ISBN;
    this.publishedDate = publishedDate;
    this.author = author;
  }
  static fetchAll() {
    return getDB().collection("books").find().toArray();
  }

  static getById(bId) {
    return getDB()
      .collection("books")
      .findOne({ _id: new ObjectId(bId) });
  }

  save() {
    return getDB().collection("books").insertOne(this);
  }

  update() {
    // return getDB().collection('books')
    //     .updateOne({_id: new ObjectId(this._id)},
    //       {$set: {title: this.title,this.ISBN = ISBN; , this.publishedDate = publishedDate, this.author = author}});

    const self = Object.assign({}, this);
    delete self._id;
    return getDB()
      .collection("books")
      .updateOne({ _id: new ObjectId(this._id) }, { $set: self });
  }

  static deleteById(bId) {
    return getDB()
      .collection("books")
      .deleteOne({ _id: new ObjectId(bId) });
  }
};
