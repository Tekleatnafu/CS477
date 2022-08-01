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

exports.update = async (req, res) => {
  let updatedBook = new Book(
    req.params.bId,
    req.body.title,
    req.body.isbn,
    req.body.publishedDate,
    req.body.author
  );
  await updatedBook.update();
  res.json(updatedBook);
};

exports.deleteById = async (req, res, next) => {
  await Book.deleteById(req.params.id);
  res.json({ _id: req.params.id });
};
