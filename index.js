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

const meetings = require("./data/meetings");

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

app.get("/contacts/:id", (req, res) => {
  //0. extract id from the path
  //1. search the contacts array
  //2. find the contact
  //console.log("params", req.params);
  //console.log("id", req.params.id);
  const contact = contacts.find((item) => item.id === +req.params.id);
  res.json({ contact: contact });
});

app.get("/contacts/:id/meetings", (req, res) => {
  const meetingsList = meetings.filter(
    (item) => item.contactId === req.params.id
  );
  console.log("meetings", meetingsList);
  res.json({ meetings: meetingsList });
});

/* app.get("/contacts/:id/meetings", (req, res) => {
  console.log("got meetings");
  const id = req.params.id;
  console.log(id);
  const meetings = meetingsOne.filter((contact) => {
    console.log();
    return contact.contactId === id;
  });
  console.log("meeting:", { meetings });
  res.json({ meetings });
}); */

//Start up our server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

// curl http://localhost:3030/
