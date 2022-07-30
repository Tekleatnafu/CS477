const Book = require("../models/book");

exports.getBooks = async (req, res, next) => {
  res.json(Book.fetchAll());
};
exports.getById = (req, res, next) => {
  res.json(Book.getById(req.params.bId));
};

exports.save = (req, res, next) => {
  let savedBook = new Book(
    null,
    req.body.title,
    req.body.isbn,
    req.body.publishedDate,
    req.body.author
  ).save();
  res.json(savedBook);
};

exports.update1 = (req, res) => {
  let updatedBook = new Book(
    req.params.bId,
    req.body.title,
    req.body.isbn,
    req.body.publishedDate,
    req.body.author
  ).update1();
  res.json(updatedBook);
};

exports.update2 = (req, res, next) => {
  const updatedBook = new Book(
    req.params.bookId,
    req.body.title,
    req.body.isbn,
    req.body.publishedDate,
    req.body.author
  ).update2();
  res.json(updatedBook);
};

exports.deleteById = (req, res, next) => {
  res.json(Book.deleteById(req.params.bId));
};
