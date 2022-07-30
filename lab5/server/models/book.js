let books = [];
let counter = 1;
module.exports = class Book {
  constructor(id, title, ISBN, publishedDate, author) {
    this.id = id;
    this.title = title;
    this.ISBN = ISBN;
    this.publishedDate = publishedDate;
    this.author = author;
  }
  static fetchAll() {
    return books;
  }
  static getById(bId) {
    const index = books.findIndex((bo) => bo.id === bId);
    if (index < -1) {
      throw new Error(`No book Found with id: ${bId}`);
    } else {
      return books[index];
    }
  }

  save() {
    this.id = counter++;
    books.push(this);
    return this;
  }
  update1() {
    const index = books.findIndex((bok) => bok.id == this.id);
    if (index < -1) {
      throw new Error(`No book Found with id: ${bId}`);
    } else {
      books[index] = this;
      return this;
    }
  }
  //OR
  update2() {
    const index = books.findIndex((bok) => bok.id === this.id);
    if (index < -1) {
      throw new Error(`Not book Found`);
    } else {
      books.splice(index, 1, this);
      return this;
    }
  }

  static deleteById(bId) {
    const index = books.findIndex((bok) => (bok.id = bId));
    if (index < -1) {
      throw new Error(`Not Found with id = ${bId}`);
    } else {
      //books = books.filter((bok) => bok.id !== bId);
      let temp = books[index];
      books.splice(index, 1);
      return temp;
    }
  }
};
