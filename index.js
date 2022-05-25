//Include the express library
const express = require("express");
//Include the morgan middleware
const morgan = require("morgan");
//Include the cors middleware
const cors = require("cors");

//Create a new express application
const app = express();

const port = 3030;

const contacts = require("./data/contacts");

//Tell express we want to use the morgan library
app.use(morgan("dev"));
//Tell express we want to use the cors library
app.use(cors());

app.get("/", (req, res) => {
  console.log("Reqs", req);
  console.log("Res", res);
  console.log("got request!");
  res.json("Hello!");
});

app.get("/contacts", (req, res) => {
  res.json({ contacts: contacts });
});

//Start up our server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

// curl http://localhost:3030/
