const now = require('performance-now');
const faker = require('faker');

let sum = 0;

// psql test
// const db = require('./psql.js');
// let getQuery = 'SELECT * FROM reviews WHERE product_id = $1';
// let deleteQuery = 'DELETE FROM reviews where id = $1';
// let updateQuery = 'UPDATE reviews SET found_helpful = found_helpful + 1 WHERE id = $1';
// let createQuery = 'INSERT INTO reviews (product_id, username, is_verified, review_text, score, found_helpful, title, review_date) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)';

// const createTest = function(n) {
//   if (n === 10000) {
//     console.log ('Average Query Time for create in psql ' + (sum/n).toFixed(3) + ' ms')
//     return;
//   }
//   if (n % 500 === 0){
//     console.log(n + ' tests ran, current avg is ' + (sum/n).toFixed(3) + ' ms');
//   }
//   let productId = Math.floor(Math.random() * 10000000) + 1;
//   const username = faker.internet.userName() + n;
//   const reviewText = faker.lorem.paragraph(1);
//   const foundHelpful = faker.random.number(25)
//   const score = faker.random.number(4) + 1;
//   const title = faker.lorem.words(3);
//   const date = faker.date.between('2010-01-01', '2018-12-1');
//   const fakeData = [productId, username, 1, reviewText, score, foundHelpful, title, date];
//   let before = now();
//   db.query(createQuery, fakeData, (err) => {
//     if (err) {
//       console.log(err)
//     } else {
//       let after = now();
//       let difference = after - before;
//       sum += Number(difference);
//       n++;
//       createTest(n);
//     }
//   })
// }

// createTest(0);

// const updateTest = function(n) {
//   if (n === 10000) {
//     console.log ('Average Query Time for update in psql ' + (sum/n).toFixed(3) + ' ms')
//     return;
//   }
//   if (n % 500 === 0){
//     console.log(n + ' tests ran, current avg is ' + (sum/n).toFixed(3) + ' ms');
//   }
//   let randomRecord = Math.floor(Math.random() * 10000000) + 1;
//   let before = now();
//   db.query(updateQuery, [randomRecord], (err) => {
//     if (err) {
//       console.log(err)
//     } else {
//       let after = now();
//       let difference = after - before;
//       sum += Number(difference);
//       n++;
//       updateTest(n);
//     }
//   })
// }

// updateTest(0);

// const getTest = function(n) {
//   if (n === 10000) {
//     console.log ('Average Query Time for get in psql ' + (sum/n).toFixed(3) + ' ms')
//     return;
//   }
//   if (n % 500 === 0){
//     console.log(n + ' tests ran, current avg is ' + (sum/n).toFixed(3) + ' ms');
//   }
//   let randomRecord = Math.floor(Math.random() * 10000000) + 1;
//   let before = now();
//   db.query(getQuery, [randomRecord], (err) => {
//     if (err) {
//       console.log(err)
//     } else {
//       let after = now();
//       let difference = after - before;
//       sum += Number(difference);
//       n++;
//       getTest(n);
//     }
//   })
// }

// const deleteTest = function(n) {
//   if (n === 1000) {
//     console.log ('Average Query Time for delete in psql ' + (sum/n).toFixed(3) + ' ms')
//     return;
//   }
//   if (n % 100 === 0){
//     console.log(n + ' tests ran, current avg is ' + (sum/n).toFixed(3) + ' ms');
//   }
//   let randomRecord = Math.floor(Math.random() * 10000000) + 1;
//   let before = now();
//   db.query(deleteQuery, [randomRecord], (err) => {
//     if (err) {
//       console.log(err)
//     } else {
//       let after = now();
//       let difference = after - before;
//       sum += Number(difference);
//       n++;
//       deleteTest(n);
//     }
//   })
// }

// deleteTest(0);

//cqlsh test
const db = require('./cqlsh.js');
let getQuery = 'SELECT * FROM reviews WHERE product_id = ?';
let createQuery = 'INSERT INTO reviews (id, product_id, username, is_verified, review_text, score, found_helpful, title, review_date) VALUES (?,?,?,?,?,?,?,?,?)';
let updateQuery = 'UPDATE reviews SET found_helpful = ? WHERE id = ?';
let deleteQuery = 'DELETE FROM reviews where id = ?';

// const deleteTest = function(n) {
//   if (n === 10000) {
//     console.log ('Final average Query Time for delete in cqlsh ' + (sum/n).toFixed(3) + ' ms')
//     return;
//   }
//   if (n % 100 === 0){
//     console.log(n + ' tests ran, current avg is ' + (sum/n).toFixed(3) + ' ms');
//   }
//   let randomRecord = Math.floor(Math.random() * 35000000) + 1;
//   let before = now();
//   db.execute(deleteQuery, [randomRecord], {prepare: true}, (err, results) => {
//     if (err) {
//       console.log(err);
//     } else {
//       let after = now();
//       let difference = after - before;
//       sum += Number(difference);
//       n++;
//       deleteTest(n);
//     }
//   });
// }

// deleteTest(0);

// const updateTest = function(n) {
//   if (n === 10000) {
//     console.log ('Final average Query Time for update in cqlsh ' + (sum/n).toFixed(3) + ' ms')
//     return;
//   }
//   if (n % 500 === 0){
//     console.log(n + ' tests ran, current avg is ' + (sum/n).toFixed(3) + ' ms');
//   }
//   let randomRecord = Math.floor(Math.random() * 10000000) + 1;
//   let found = Math.floor(Math.random() * 25);
//   let before = now();
//   db.execute(updateQuery, [found, randomRecord], {prepare: true}, (err, results) => {
//     if (err) {
//       console.log(err);
//     } else {
//       let after = now();
//       let difference = after - before;
//       sum += Number(difference);
//       n++;
//       updateTest(n);
//     }
//   });
// }

// updateTest(0);


const createTest = function(n) {
  if (n === 10000) {
    console.log ('Final average Query Time for Create in cqlsh ' + (sum/n).toFixed(3) + ' ms')
    return;
  }
  if (n % 500 === 0){
    console.log(n + ' tests ran, current avg is ' + (sum/n).toFixed(3) + ' ms');
  }
  const productId = Math.floor(Math.random() * 10000000) + 1;
  const id = 34999998 + n + 10000;
  const username = faker.internet.userName();
  const reviewText = faker.lorem.paragraph(1);
  const foundHelpful = Math.round((Math.random() * 25));
  const score = Math.floor(Math.random() * 4) + 1;
  const title = faker.lorem.words(3);
  const date = faker.date.between('2010-01-01', '2018-12-1');
  const fakeData = [id, productId, username, 1, reviewText, score, foundHelpful, title, date];
  let before = now();
  db.execute(createQuery, fakeData, {prepare: true}, (err) => {
    if (err) {
      console.log(err)
    } else {
      let after = now();
      let difference = after - before;
      sum += Number(difference);
      n++;
      createTest(n);
    }
  })
}

createTest(0);

// const getTest = function(n) {
//   if (n === 10000) {
//     console.log ('Final average Query Time ' + (sum/n).toFixed(3) + ' ms')
//     return;
//   }
//   if (n % 500 === 0){
//     console.log(n + ' tests ran, current avg is ' + (sum/n).toFixed(3) + ' ms');
//   }
//   let randomRecord = Math.floor(Math.random() * 10000000) + 1;
//   let before = now();
//   db.execute(getQuery, [randomRecord], {prepare: true}, (err) => {
//     if (err) {
//       console.log(err)
//     } else {
//       let after = now();
//       let difference = after - before;
//       sum += Number(difference);
//       n++;
//       getTest(n);
//     }
//   })
// }

// getTest(0);

