var pool = require("./pool");

exports.query = (text, params) => {
  return new Promise((resolve, rejcted) => {
    pool
      .query(text, params)
      .then((res) => {
        console.log(resolve());
      })
      .catch((err) => {
        console.log(rejcted());
      });
  });
};
