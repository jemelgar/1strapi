const express = require("express");
const router = express.Router();
const moviesController = require("../../controllers/api/moviesController");

router.post("/", moviesController.create);
router.delete("/:id", moviesController.destroy);

module.exports = router;
