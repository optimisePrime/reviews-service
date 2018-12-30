const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/db.js');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser());

app.get('/reviews', (req, res) => {
  const productId = 1;
  const thisQuery = 'SELECT * FROM reviews WHERE product_id = ?';
  db.query(thisQuery, [productId], (error, results) => {
    if (error) {
      res.send(error);
    } else {
      res.send(results);
    }
  });
});

app.get('/reviews/average/:productid', (req, res) => {
  const productId = req.params.productid;
  const thisQuery = 'SELECT * FROM reviews WHERE product_id = ?';
  db.query(thisQuery, [productId], (error, results) => {
    if (error) {
      res.send(error);
    } else {
      let totalScore = 0;
      for (let i = 0; i < results.length; i ++) {
        totalScore += results[i].score
      }
      const average = totalScore / results.length;
      const responseObject = {"averageScore": average, "totalReviews": results.length}
      res.send(responseObject);
    }
  });
});

module.exports = app;
