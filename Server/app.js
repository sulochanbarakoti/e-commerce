const express = require("express");
const cors = require("cors");
const connectDb = require("./db/connect");
require("dotenv").config();
const route = require("./router/route");
const path = require("path");

const app = express();
app.use("service", express.static(path.join(__dirname, "service")));
// middleware
app.use(cors());
app.use(express.json()); // parse request body as JSON

//url route
app.use("/api/v1", route);

const start = async () => {
  try {
    await connectDb(process.env.DATABASE_URL);
    //SERVER ON
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  } catch (error) {
    console.error(error);
  }
};

start();
