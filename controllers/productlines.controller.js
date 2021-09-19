const productLines = require("../services/productlines.service");

exports.getProductLines = (req, res, next) => {
  // Validation area
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailId: req.body.emailId,
    password: req.body.password,
  };
  productLines.getProductLines(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.postProductLines = (req, res, next) => {
    // Validation area
    const data = {
      description: req.body.description
    };
    productLines.postProductLines(data, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(400).send({ success: 0, data: "Bad request" });
      }
      return res.status(200).send({
        success: 1,
        data: results,
      });
    });
  };