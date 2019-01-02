const faker = require('faker');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'reviews_db',
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  }
});


const createProductQuery = 'INSERT INTO products (ID) VALUES (?)';

for (let i = 0; i < 100; i += 1) {
  const current = i;
  connection.query(createProductQuery, [current], (err) => {
    if (err ) {
      console.log(err);
    }
  });
}

const createReviewQuery = 'INSERT INTO reviews (product_id, username, is_verified, review_text, score, found_helpful, title, review_date) VALUES (?,?,?,?,?,?,?)';

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 10; j++) {
    const username = faker.internet.userName();
    const productId = i;
    const reviewText = faker.lorem.paragraph(1);
    const foundHelpful = Math.round((Math.random() * 25));
    const score = (Math.random() * 5).toFixed(1);
    const title = faker.lorem.words(3);
    
    const date = faker.date.between('2010-01-01', '2018-12-1');
    const fakeData = [productId, username, 1, reviewText, score, foundHelpful, title, date];
    connection.query(createReviewQuery, fakeData, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    });
  }
}
