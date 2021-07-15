// Imports
const router = require('express').Router();
const path = require("path");

router.get("/"),
  async (req, res) => {
    // Redirects to index page
    res.sendFile(path.join(__dirname, "../public/index.html"))
  };

router.get("/exercise"),
  async (req, res) => {
    // Redirects to exercise page
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  };

router.get("/stats"),
  async (req, res) => {
    // Redirects to stats page
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  };

  module.exports = router;