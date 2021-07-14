// Import needed libraries
const express = require("express");
const mongoose = require("mongoose");

// Define port
const PORT = process.env.PORT || 3000;

// Express definition
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(require('./routes'))

// Connect to the mongodb on local host (mongo mongoose)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// Connect to port
app.listen(PORT, () => {
    console.log(`App running on local port ${PORT}!`);
});









