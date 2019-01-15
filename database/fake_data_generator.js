const faker = require('faker');

//mysql
// const connection = require('./db.js');
// const createProductQuery = 'INSERT INTO products (id) VALUES (?)';
// const createReviewQuery = 'INSERT INTO reviews (product_id, username, is_verified, review_text, score, found_helpful, title, review_date) VALUES (?,?,?,?,?,?,?,?)';
// use same query as psql with above query.

// //cqlsh
const connection = require('./cqlsh.js');
const createReviewQuery = 'INSERT INTO reviews (id, product_id, username, is_verified, review_text, score, found_helpful, title, review_date) VALUES (?,?,?,?,?,?,?,?,?)';
for (let i = 0; i < 10; i++) {
  for (let j = 0; j <= 10; j++) {
    const id = i * 10 + j;
    const productId = i;
    const username = faker.internet.userName();
    const reviewText = faker.lorem.paragraph(1);
    const foundHelpful = Math.round((Math.random() * 25));
    const score = Math.floor(Math.random() * 5);
    const title = faker.lorem.words(3);
    const date = faker.date.between('2010-01-01', '2018-12-1');
    const fakeData = [id, productId, username, 1, reviewText, score, foundHelpful, title, date];
    connection.execute(createReviewQuery, fakeData, {prepare: true}, (err) => {
      if (err) {
        console.log(err);
        console.log('error adding review data')
      } else {
      }
    });
  }
}


// // psql
// const connection = require('./psql.js');
// const createProductQuery = 'INSERT INTO products (id) VALUES ($1)';
// const createReviewQuery = 'INSERT INTO reviews (product_id, username, is_verified, review_text, score, found_helpful, title, review_date) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)';

// // for (let i = 20001; i <= 50000; i++) {
// //   const current = i;
// //   connection.query(createProductQuery, [current], (err) => {
// //     if (err) {
// //       console.log('error adding data')
// //       // console.log(err);
// //     } 
// //   });
// // }

// for (let i = 10000000; i <= 10000000; i++) {
//   for (let j = 0; j < 500; j++) {
//     const productId = i;
//     const username = faker.internet.userName() + i;
//     const reviewText = faker.lorem.paragraph(1);
//     const foundHelpful = faker.random.number(25)
//     const score = faker.random.number(4) + 1;
//     const title = faker.lorem.words(3);
//     const date = faker.date.between('2010-01-01', '2018-12-1');
//     const fakeData = [productId, username, 1, reviewText, score, foundHelpful, title, date];
//     connection.query(createReviewQuery, fakeData, (err) => {
//       if (err) {
//         console.log('error adding review data')
//         console.log(err);
//       } 
//     });
//   }
// }


//delete data (change product_id in query to delete all review data for the product_id)

//psql
// connection.query('DELETE FROM reviews where id = 1', (err) => {
//   if (err) {
//     console.log('error adding data')
//     console.log(err);
//   } 
// });

//cqlsh
// connection.execute('DELETE FROM reviews where id = 1', {prepare: true}, (err) => {
//   if (err) {
//     console.log('error adding review data')
//     console.log(err);
//   } else {
//     console.log('posted')
//   }
// });