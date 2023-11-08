const mongoose = require("mongoose");

//Recipe Schema
const RecipeSchema = new mongoose.Schema(
  {
    recipeName: {
      type: String,
      required: [true, "Please Enter Recipe Name"],
    },
    ingredients: {
      type: String,
      required: [true, "Please Enter Ingredients"],
    },
    description: {
      type: String,
      required: [true, "Please Enter Description"],
    },
  },
  { timestamp: true }
);

const Recipe = mongoose.model.Recipe || mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
