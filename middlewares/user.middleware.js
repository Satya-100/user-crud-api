const fs = require("fs");

function logReq(filename) {
  return (req, res, next) => {
    fs.appendFile(
      "log.txt",
      `${Date.now()} - ${req.method} - ${req.path}\n`,
      (err, data) => {
        next();
      }
    );
  };
}

module.exports = { logReq };
