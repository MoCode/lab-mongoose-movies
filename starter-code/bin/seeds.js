const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

mongoose.connect("mongodb://localhost/celebrity-project", {
  useNewUrlParser: true
})

const celebrity = [{
    name: "Leonardo di Caprio",
    occupation: "actor",
    catchPhrase: "Which would be worse — to live as a monster, or to die as a good man?"
  },

  {
    name: "Samuel L Jackson",
    occupation: "actor",
    catchPhrase: "Mother Fucker"
  },

  {
    name: "Master Min",
    occupation: "unknown",
    catchPhrase: "Put your shit together"
  },

];

Celebrity.insertMany(celebrity).then(data => {
  console.log("success " + data)
  mongoose.connection.close();
}).catch(err => {
  console.log("error")
})