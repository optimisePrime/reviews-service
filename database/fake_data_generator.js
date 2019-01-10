const faker = require('faker');

//mysql
// const connection = require('./db.js');
// const createProductQuery = 'INSERT INTO products (id) VALUES (?)';
// // // // // // // // const createReviewQuery = 'INSERT INTO reviews (product_id, username, is_verified, review_text, score, found_helpful, title, review_date) VALUES (?,?,?,?,?,?,?,?)';

//psql
const connection = require('./psql.js');
const createProductQuery = 'INSERT INTO products (id) VALUES ($1)';
const createReviewQuery = 'INSERT INTO reviews (product_id, username, is_verified, review_text, score, found_helpful, title, review_date) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)';

for (let i = 1; i <= 100; i++) {
  const current = i;
  connection.query(createProductQuery, [current], (err) => {
    if (err) {
      console.log('error adding data')
      console.log(err);
    } 
  });
}

for (let i = 1; i <= 100; i++) {
  for (let j = 0; j < 10; j++) {
    const productId = i;
    const username = faker.internet.userName();
    const reviewText = faker.lorem.paragraph(1);
    const foundHelpful = Math.round((Math.random() * 25));
    const score = Math.floor(Math.random() * 5);
    const title = faker.lorem.words(3);
    const date = faker.date.between('2010-01-01', '2018-12-1');
    const fakeData = [productId, username, 1, reviewText, score, foundHelpful, title, date];
    connection.query(createReviewQuery, [productId, username, 1, reviewText, score, foundHelpful, title, date], (err) => {
      if (err) {
        console.log('error adding review data')
        console.log(err);
      } else {
        console.log('posted')
      }
    });
  }
}


//delete data (change product_id in query to delete all review data for the product_id)

// connection.query('DELETE FROM reviews where product_id = 1', [current], (err) => {
//   if (err) {
//     console.log('error adding data')
//     console.log(err);
//   } 
// });