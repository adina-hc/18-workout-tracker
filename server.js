// Import needed libraries
const express = require("express");
const mongoose = require("mongoose");
const mongojs = require("mongojs");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Connect to the mongodb on local host (mongo mongoose)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessdb", { useNewUrlParser: true });


// Routes - remove if it does not work
app.use(require("./routes/apiRoutes"));

// Connect to port
app.listen(PORT, () => {
    console.log(`App running on local port ${PORT}!`);
});









