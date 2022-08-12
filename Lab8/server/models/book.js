const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    ISBN: String,
    publishedDate: Date,
    author: String,
  },
  {
    versionKey: false,
  }
);
bookSchema.methods.saveWithTitleChecking = function () {
  if (this.title.length < 4) {
    throw new Error("Product Title must be greater than 4");
  } else {
    return this.save();
  }
};

bookSchema.statics.filterByPublishedDate = function (publishedDate) {
  return this.find().where("publishedDate").gt(publishedDate);
};

bookSchema.pre(["save", "saveWithTitleChecking"], function (next) {
  this.created = new Date();
  this.updated = new Date();
  next();
});

const Model = mongoose.model("Book", bookSchema);

module.exports = Model;
