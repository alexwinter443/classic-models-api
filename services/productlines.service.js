const db = require("../config/db.config");
const mySqlConnect = require("../connection/mysql_connect");

exports.getProductLines = (req, callback) => {
  let error = false;
  mySqlConnect.acquire((error, connection) => {
    if (error) {
      callback(error, null);
    } else {
      connection.query(
        "SELECT productLine from productlines",
        (error, data) => {
          connection.release();
          callback(error, data);
        }
      );
    }
  });
};

exports.getProductLine = (req, callback) => {
  mySqlConnect.acquire((error, connection) => {
    if (error) {
      callback(error, null);
    } else {
      connection.query(connection.format(
        'SELECT * FROM productlines WHERE productLine = ?',
        [
          req.params.id,
        ]
      ), (error, data) => {
        connection.release();
        callback(error, data);
      });
    }
  });
};

exports.createProductLine = (data, callback) => {
  mySqlConnect.acquire((error, connection) => {
    if (error) {
      callback(error, null);
    } else {
      let insertQuery = connection.format(
        'INSERT INTO productlines (??, ??) VALUES (?, ?)',
        [
          "productLine",
          "textDescription",
          data.productLine,
          data.textDescription
        ]);
      console.log(insertQuery);
      connection.query(insertQuery, (error, data) => {
        connection.release();
        callback(error, data);
      });
    }
  });
};
