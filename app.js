const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/vapes-routes");
const cors = require ('cors');
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/vapes", router); //localhost:4000/vapes 

mongoose
  .connect(
    "mongodb+srv://Vape-Store:Vape2022@cluster0.irlc1y5.mongodb.net/Vape-Store"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(4000);
  })
  .catch((err) => console.log(err));