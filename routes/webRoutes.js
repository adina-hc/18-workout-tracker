const router = require('express').Router();
const path = require("path");

router.get("/"),
  async (req, res) => {
    //code here to take to the exercise html page
    res.sendFile(path.join(__dirname, "../"))
  };


router.get('/exercise'), async (req, res) => {
    //code here to take to the exercise html page

}

router.get("/exercise"),
  async (req, res) => {
    //code here to take to the exercise html page
  };