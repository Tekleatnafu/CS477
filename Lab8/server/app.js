const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const bookRouter = require("./routes/bookRouter");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/books", bookRouter);
app.use((req, res, next) => {
  res.status(404).send({ error: "API NOT SUPPORTED" });
});

mongoose.connect("mongodb://127.0.0.1:27017/bookStore").then(() => {
  app.listen(3000);
});
