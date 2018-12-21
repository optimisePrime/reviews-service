const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/db.js');

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser());

app.get('/reviews/:productid', (req, res) => {
  const productId = req.params.productid;
  const thisQuery = 'SELECT * FROM reviews WHERE product_id = ?';
  db.query(thisQuery, [productId], (error, results) => {
    if (error) {
      res.send(error);
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => { console.log(`listening on port + ${port}`); });
