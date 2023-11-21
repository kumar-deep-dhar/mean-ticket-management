const express = require("express");
const router = express.Router();
const engineerController = require("../controller/engineerController");

// Route for creating an engineer
router.post("/create", engineerController.createEngineer);

module.exports = router;
