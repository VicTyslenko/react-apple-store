const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
const apiRouter = require("./routers/products.api");
// const usersApiRouter = require("./routers/users.api");
// const authApiRouter = require("./routers/auth.api");

app.use(cors());
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
// const urlencodedParser = express.urlencoded({ extended: false });
const PORT = process.env.PORT || 4444;

const MONGO_URL =
  "mongodb+srv://VTyslenko:drummerbass4000@cluster0.weallwn.mongodb.net/apple-products";
app.use(apiRouter);
// app.use("/api", urlencodedParser, usersApiRouter);
// app.use("/auth", urlencodedParser, authApiRouter);

app.all("*", (request, response) => {
  response.status(404).send("resource not");
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
