const express = require("express");
const router = express.Router();

// Navigate addRecipe , getAllRecipe , updateRecipe , deleteRecipe methods from recipeController file,
const {
  addRecipe,
  getAllRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

// Create Route to methods
router.post("/addRecipe", addRecipe);
router.get("/allRecipe", getAllRecipe);
router.put("/updateRecipe", updateRecipe);
router.delete("/deleteRecipe/:id", deleteRecipe);

module.exports = router;
