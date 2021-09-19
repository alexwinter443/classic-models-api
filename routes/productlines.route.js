const productlinesController = require("../controllers/productlines.controller");
const productLinesUri = "/productlines";
var express = require("express");

var router = express.Router();

router.get(productLinesUri, productlinesController.getProductLines).
post(productLinesUri, productlinesController.postProductLines);

// add the product line rounter to export
// 
module.exports = router;