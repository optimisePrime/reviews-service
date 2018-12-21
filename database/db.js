var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "reviews_db"
});

module.exports = connection