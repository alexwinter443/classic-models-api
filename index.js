const express = require("express");

const app = express();
const productlinesRoutes = require("./routes/productlines.route");

// prepare to parse request body
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use("/api", productlinesRoutes);

app.listen(3000, () => {
  console.log("listening...");
});