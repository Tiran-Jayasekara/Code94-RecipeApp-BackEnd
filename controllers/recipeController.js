const express = require("express");
const Joi = require("joi");
const Recipe = require("../models/recipeModal");
const app = express();
app.use(express.json());

// Validation addRecipe data, come from POST req.body
function validateRecipeData(req) {
  const schema = Joi.object({
    recipeName: Joi.string().min(1).required(),
    ingredients: Joi.string(),
    description: Joi.string(),
  });
  return schema.validate(req);
}

// Method for add new Recipe
module.exports.addRecipe = async (req, res) => {
  try {
    //validate req.body data
    const { error } = validateRecipeData(req.body);
    if (error) {
      res.status(400).json({ message: error.message });
    } else {
      const { recipeName, ingredients, description } = req.body;
      const recipe = await Recipe.create({
        recipeName,
        ingredients,
        description,
      });

      if (recipe) {
        res.status(200).json({ message: "Recipe Add Successfull", recipe });
      } else {
        res.status(400).json({ message: "Unsuccess" });
      }
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Method for getAll Recipes data
module.exports.getAllRecipe = async (req, res) => {
  try {
    const allRecipes = await Recipe.find({});

    if (allRecipes) {
      res.status(200).json({ message: "All Recipes", allRecipes });
    } else {
      res.status(400).json({ message: "No Recipes" });
    }
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

// Method for Update Recipes
module.exports.updateRecipe = async (req, res) => {
  //checking Update Data , come from req.body
  function validateUpdateRecipeData(req) {
    const schema = Joi.object({
      RecipeId: Joi.string().min(3).required(),
      recipeName: Joi.string(),
      ingredients: Joi.string(),
      description: Joi.string(),
    });
    return schema.validate(req);
  }

  try {
    const { error } = validateUpdateRecipeData(req.body);
    if (error) {
      res.status(400).json({ message: error.message });
    } else {
      const { RecipeId, recipeName, ingredients, description } = req.body;
      const updateRecipe = await Recipe.findOneAndUpdate(
        { _id: RecipeId },
        { recipeName, ingredients, description },
        { new: true }
      );

      if (updateRecipe) {
        res.status(200).json({ message: "Update Success", updateRecipe });
      } else {
        res.status(400).json({ message: "Update Unsuccess" });
      }
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Method for Delete recipe By ID
module.exports.deleteRecipe = async (req, res) => {
  try {
    const productId = req.params.id;
    const deleteRecipe = await Recipe.findByIdAndDelete(productId);

    if (deleteRecipe) {
      res.status(200).json({ message: "Recipe Delete Successfull" });
    } else {
      res.status(400).json({ message: "Couldnt find Recipe" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
