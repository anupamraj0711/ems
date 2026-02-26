const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://anupam4:anupam123@anupam.y2tah.mongodb.net/Medi_HX_database?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Atlas Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});