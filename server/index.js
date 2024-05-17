const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

app.use(express.json());
const apiRouter = require("./routers/products.api");
const usersApiRouter = require("./routers/users.api");
// const authApiRouter = require("./routers/auth.api");

app.use(cors());
app.use(express.static("./build"));
app.use(express.urlencoded({ extended: true }));
const urlencodedParser = express.urlencoded({ extended: false });
const PORT = process.env.PORT || 4444;

const MONGO_URL = process.env.MONGO_URL;

app.use(apiRouter);
app.use("/api", urlencodedParser, usersApiRouter);
// app.use("/auth", urlencodedParser, authApiRouter);

app.all("*", (request, response) => {
  response.status(404).send("resource not found");
});

const start = async () => {
  try {
    mongoose
      .connect(MONGO_URL, {
        useNewUrlParser: true,
      })
      .then(() => {
        console.log("DB OK");
      })
      .catch((err) => console.log("DB error", err));

    app.listen(PORT, () => {
      console.log(`Server is running on :${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
