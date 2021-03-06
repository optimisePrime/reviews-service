require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const redis = require('../database/redis.js')
// const Cors = require('cors');

const app = express();

app.use('/:productid', express.static(path.join(__dirname, '../public')));
// app.use(bodyParser());

// psql routes
const psql = require('../database/psql.js')

// app.get('/reviews/all/:productid', (req, res) => {
//   const productId = req.params.productid;
//   const thisQuery = 'SELECT * FROM reviews WHERE product_id = $1';
//   redis.get(productId, (err, data)=>{
//     if (err){
//       console.log(err);
//       // psql.query(thisQuery, [productId], (error, results) => {
//       //   // console.log('Retriving data from psql because of redis error', productId)
//       //   if (error) {
//       //     res.send(error);
//       //   } else {
//       //     res.send(results);
//       //   }
//       // });
//     }
//     if (data) {
//       // console.log('Data retrived from redis', productId);
//       res.send(JSON.parse(data));
//     } else {
//       psql.query(thisQuery, [productId], (error, results) => {
//         // console.log('Retriving data from psql for redis ', productId)
//         if (error) {
//           res.send(error);
//         } else {
//           res.send(results);
//           redis.set(productId, JSON.stringify(results), (err) => {
//             if (err) {
//               console.log(err);
//             }
//             // console.log('Wrote data to redis ', productId);
//           })
//         }
//       });
//     }
//   })
// });

// app.get('/reviews/all/:productid', (req, res) => {
//   const productId = req.params.productid;
//   const thisQuery = 'SELECT * FROM reviews WHERE product_id = $1';
//   if (productId < 1001) {
//     redis.get(productId, (err, data)=>{
//       if (err){
//         console.log(err);
//         // psql.query(thisQuery, [productId], (error, results) => {
//         //   // console.log('Retriving data from psql because of redis error', productId)
//         //   if (error) {
//         //     res.send(error);
//         //   } else {
//         //     res.send(results);
//         //   }
//         // });
//       }
//       if (data) {
//         // console.log('Data retrived from redis', productId);
//         res.send(JSON.parse(data));
//       } else {
//         psql.query(thisQuery, [productId], (error, results) => {
//           // console.log('Retriving data from psql for redis ', productId)
//           if (error) {
//             res.send(error);
//           } else {
//             res.send(results);
//             redis.set(productId, JSON.stringify(results), (err) => {
//               if (err) {
//                 console.log(err);
//               }
//               // console.log('Wrote data to redis ', productId);
//             })
//           }
//         });
//       }
//     })
//   } else {
//       psql.query(thisQuery, [productId], (error, results) => {
//         // console.log('Retriving data from psql', productId)
//         if (error) {
//           res.send(error);
//         } else {
//           res.send(results);
//         }
//       });
//     }
// });


app.get('/reviews/all/:productid', (req, res) => {
  const productId = req.params.productid;
  const thisQuery = 'SELECT * FROM reviews WHERE product_id = $1';
  psql.query(thisQuery, [productId], (error, results) => {
    if (error) {
      res.send(error);
    } else {
      res.send(results);
    }
  });
});

app.put('/reviews/helpful/:reviewId', (req, res) => {
  const thisId = req.params.reviewId;
  const thisQuery = 'UPDATE reviews SET found_helpful = found_helpful + 1 WHERE id = $1';
  psql.query(thisQuery, [thisId], (err) => {
    if (err) {
      res.send(err);
    } else {
      const secondQuery = 'SELECT * FROM reviews WHERE id = $1';
      psql.query(secondQuery, [thisId], (error, results) => {
        if (error) {
          res.send(error);
        } else {
          res.send(results);
        }
      });
    }
  });
});

app.post('/reviews/helpful/:productid', (req, res) => {
  console.log('serving post request...')
  const productId = req.params.productid;
  const username = faker.internet.userName() + i;
  const reviewText = faker.lorem.paragraph(1);
  const foundHelpful = faker.random.number(25)
  const score = faker.random.number(4) + 1;
  const title = faker.lorem.words(3);
  const date = faker.date.between('2010-01-01', '2018-12-1');
  const fakeData = [productId, username, 1, reviewText, score, foundHelpful, title, date];
  const createReviewQuery = 'INSERT INTO reviews (product_id, username, is_verified, review_text, score, found_helpful, title, review_date) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)';
  psql.query(createReviewQuery, fakeData, (error, results) => {
    if (error) {
      console.log(error)
      res.send(error);
    } else {
      console.log('new review posted')
    }
  });
});

app.delete('/reviews/helpful/:reviewId', (req, res) => {
  const thisId = req.params.reviewId;
  const deleteQuery = 'DELETE FROM reviews where id = $1';
  console.log('post recieved');
  psql.query(deleteQuery, [thisId], (err) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log('review deleted')
    }
  });
});

//cqlsh routes
// const cqlsh = require('../database/cqlsh.js')
// app.get('/reviews/all/:productid', (req, res) => {
//   const productId = req.params.productid;
//   const thisQuery = 'SELECT * FROM reviews WHERE product_id = ?';
//   cqlsh.execute(thisQuery, [productId], {prepare: true}, (error, results) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send(results);
//     }
//   });
// });

// app.put('/reviews/helpful/:reviewId', (req, res) => {
//   console.log('serving put request...')
//   const thisId = req.params.reviewId;
//   const firstQuery = 'SELECT * FROM reviews WHERE id = ?';
//   const secondQuery = 'UPDATE reviews SET found_helpful = ? WHERE id = ?';
//   cqlsh.execute(firstQuery, [thisId], {prepare: true}, (error, results) => {
//     if (error) {
//       console.log(error)
//     } else {
//       console.log(results.rows[0].found_helpful)
//       let found = results.rows[0].found_helpful + 1;
//       cqlsh.execute(secondQuery, [found, thisId], {prepare: true}, (error, results) => {
//         if (error) {
//           res.send(error);
//         } else {
//           res.send(results);
//         }
//       });
//     }
//   });
// });

// app.post('/reviews/all/:productid', (req, res) => {
//   console.log('serving get request...')
//   const productId = req.params.productid;
//   const id = productId * 10 + 1;
//   const username = faker.internet.userName();
//   const reviewText = faker.lorem.paragraph(1);
//   const foundHelpful = Math.round((Math.random() * 25));
//   const score = Math.floor(Math.random() * 5);
//   const title = faker.lorem.words(3);
//   const date = faker.date.between('2010-01-01', '2018-12-1');
//   const fakeData = [id, productId, username, 1, reviewText, score, foundHelpful, title, date];
//   const createReviewQuery = 'INSERT INTO reviews (id, product_id, username, is_verified, review_text, score, found_helpful, title, review_date) VALUES (?,?,?,?,?,?,?,?,?)';
//   cqlsh.execute(createReviewQuery, fakeData, {prepare: true}, (error, results) => {
//     if (error) {
//       console.log(error)
//       res.send(error);
//     } else {
//       console.log('new review posted')
//       res.send(results);
//     }
//   });
// });

// app.delete('/reviews/helpful/:reviewId', (req, res) => {
//   const thisId = req.params.reviewId;
//   const deleteQuery = 'DELETE FROM reviews where id = ?';
//   console.log('post recieved');
//   cqlsh.execute(deleteQuery, [thisId], (err) => {
//     if (err) {
//       console.log(err);
//       res.send(err);
//     } else {
//       console.log('review deleted')
//       res.send(results);
//     }
//   });
// });


//mysql routes

// const db = require('../database/db.js');
// app.get('/reviews/all/:productid', (req, res) => {
//   const productId = req.params.productid;
//   const thisQuery = 'SELECT * FROM reviews WHERE product_id = ?';
//   db.query(thisQuery, [productId], (error, results) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send(results);
//     }
//   });
// });

// app.get('/reviews/average/:productid', (req, res) => {
//   const productId = req.params.productid;
//   const thisQuery = 'SELECT * FROM reviews WHERE product_id = ?';
//   db.query(thisQuery, [productId], (error, results) => {
//     if (error) {
//       res.send(error);
//     } else {
//       let totalScore = 0;
//       for (let i = 0; i < results.length; i ++) {
//         totalScore += results[i].score
//       }
//       const average = totalScore / results.length;
//       const responseObject = {"averageScore": average, "totalReviews": results.length}
//       res.send(responseObject);
//     }
//   });
// });

// app.post('/reviews/helpful/:reviewId', (req, res) => {
//   const thisId = req.params.reviewId;
//   const thisQuery = 'UPDATE reviews SET found_helpful = found_helpful + 1 WHERE id = ?';
//   console.log('post recieved');
//   db.query(thisQuery, [thisId], (err) => {
//     if (err) {
//       res.send(err);
//     } else {
//       const secondQuery = 'SELECT * FROM reviews WHERE id = ?';
//       db.query(secondQuery, [thisId], (error, results) => {
//         if (error) {
//           res.send(error);
//         } else {
//           res.send(results);
//         }
//       });
//     }
//   });
// });

module.exports = app;
