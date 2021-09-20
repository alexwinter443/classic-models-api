const express = require("express");
const mySqlConnect = require("./connection/mysql_connect");
const app = express();
const productlinesRoutes = require("./routes/productlines.route");

mySqlConnect.init();

// prepare to parse request body
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use("/api", productlinesRoutes);


app.listen(3000, () => {
  console.log("listening...");
});