const express = require('express');
const router = express.Router();

// Import controller functions
const { one, two, three, four } = require("../controllers/controller");

// Define routes with middleware functions calling the controller functions
router.route("/")
  .get((req, res) => one(req, res)) // Middleware function calling the 'one' controller function for handling GET requests to "/"
  .put((req, res) => four(req, res)); // Middleware function calling the 'four' controller function for handling PUT requests to "/"

router.route("/:id")
  .post((req, res) => two(req, res)) // Middleware function calling the 'two' controller function for handling POST requests to "/:id"
  .delete((req, res) => three(req, res)); // Middleware function calling the 'three' controller function for handling DELETE requests to "/:id"

module.exports = router;
