const db = require("../config/db.config");
const mySqlConnect = require("../connection/mysql_connect");

exports.getProductLines = (req, callback) => {
  let error = false;
  mySqlConnect.acquire((error, connection) => {
    // failed to acquire connection from pool
    if (error) {
      callback(error, null);
    } else {
      connection.query(
        "SELECT productLine from productlines",
        (error, data) => {
          // put the connection back in the pool
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
      // The ?? operator puts the id in backtics so the MySQL server won't see the values as Strings
      let insertQuery = connection.format(
        'INSERT INTO productlines (??, ??) VALUES (?, ?)',
        [
          "productLine",
          "textDescription",
          data.productLine,
          data.textDescription
        ]);

      // This will give you a query that's ready to run in Workbench
      // Good for debugging  
      console.log(insertQuery);
      connection.query(insertQuery, (error, data) => {
        connection.release();
        callback(error, data);
      });
    }
  });
};
