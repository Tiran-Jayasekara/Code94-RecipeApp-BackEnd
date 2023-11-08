const express = require("express");
const database = require("./database/database");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(express.json());
//cors allows you to configure your server to explicitly allow requests from specific domains.
app.use(cors());
app.options("*", cors());

// Make connection with recipe.js file inside routes folder
const recipe = require("./routes/recipe");
app.use("/recipe", recipe);

//Run API in port
app.listen(port, () => {
  console.log(`Node JS app listening on port ${port}`);
});

// calling database() method for create Connection with MongoDB database
database();
