var express = require('express');
var bodyParser = require('body-parser');
var db = require('./')
var path = require('path');
var port = 3001;
var app = express();
var db = require('../database/db.js');

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser());

app.get('/reviews/:productid', (req, res) => {
	var productId = req.params.productid;
	var thisQuery = 'SELECT * FROM reviews WHERE product_id = ?'
	db.query(thisQuery, [productId], (error, results) => {
		if (error) {
			res.send(error);
		} else {
			res.send(results);
		}
	})

})

app.listen(port, ()=>{console.log('listening on port ' + port)});
