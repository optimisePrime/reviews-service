var faker = require('faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "reviews_db"
});

connection.connect((err) => {
	if (err) {
		console.log(err)
	}
	else {
		console.log('connected');
	}
});


var createProductQuery = 'INSERT INTO products (ID) VALUES (?)';

for (var i = 0; i < 100; i++) {
	connection.query(createProductQuery, [i], (err, results) => {
		if (err ) {
			console.log(err);
		}
	});
}

var createReviewQuery = 'INSERT INTO reviews (product_id, username, is_verified, review_text, found_helpful, title, review_date) VALUES (?,?,?,?,?,?,?)';

for (var i = 0; i < 100; i++) {
	for (var j = 0; j < 10; j++) {
		var username = faker.internet.userName();
		var productId = i;
		var reviewText = faker.lorem.paragraph(1);
		var foundHelpful = faker.random.number(0, 100)
		var title = faker.lorem.words(3);
		var date = faker.date.between('2010-01-01', '2018-12-1');
		var fakeData = [productId, username, 1, reviewText, foundHelpful, title, date];
		connection.query(createReviewQuery, fakeData, (err, result) => {
			if (err) {
				console.log(err);
			}
		})
	}
}