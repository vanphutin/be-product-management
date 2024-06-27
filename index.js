const express = require("express");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const route = require("./routes/client/index.route");
const app = express();
const port = process.env.PORT; // Ensure this matches the case in your .env file
app.use(express.static("public"));
// Route
route(app);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
