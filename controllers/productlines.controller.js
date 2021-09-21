const productLines = require("../services/productlines.service");

exports.getProductLines = (req, res, next) => {
  // Validation area
  // Calling getProductLines with the req and the callback function
  productLines.getProductLines(req, (error, results) => {
    if (error) {
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};


exports.getProductLine = (req, res, next) => {
  productLines.getProductLine(req, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad Request: " + error  });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};


exports.postProductLines = (req, res, next) => {
    // Validation area
    if (!(req.body.productLine && req.body.textDescription)) {
      return res.status(400).send({ success: 0, data: "Request must specify all values" })
    }
    
  
    productLines.createProductLine(req.body, (error, results) => {
      if (error) {
        return res.status(400).send({ success: 0, data: "Bad Request" + error});
      }
      return res.status(200).send({
        success: 1,
        data: results,
      });
    });
  };