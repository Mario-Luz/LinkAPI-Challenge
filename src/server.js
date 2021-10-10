const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const routes = require("./routes");

const server = express();

mongoose
  .connect(`mongodb://localhost:27017`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connection succeed");
  })
  .catch(err => {
    console.log("Erro ao conectar ao MongoDB");
  });

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);

server.listen(3000, () => {
  console.log("server online...");
});
