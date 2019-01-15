const now = require('performance-now');

let sum = 0;

//psql test
const db = require('./psql.js');
let query = 'SELECT * FROM reviews WHERE product_id = $1'

const test = function(n) {
  if (n === 10000) {
    console.log ('Average Query Time ' + (sum/n).toFixed(3) + ' ms')
    return;
  }
if (n % 500 === 0){
  console.log(n + ' tests ran, current avg is ' + (sum/n).toFixed(3) + ' ms');
}
  let randomRecord = Math.floor(Math.random() * 10000000) + 1;
  let before = now();
  db.query(query, [randomRecord], (err) => {
    if (err) {
      console.log(err)
    } else {
      let after = now();
      let difference = after - before;
      sum += Number(difference);
      n++;
      test(n);
    }
  })
}

//cqlsh test
// const db = require('./cqlsh.js');
// let query = 'SELECT * FROM reviews WHERE product_id = ?'

// const test = function(n) {
//   if (n === 10000) {
//     console.log ('Final average Query Time ' + (sum/n).toFixed(3) + ' ms')
//     return;
//   }
//   if (n % 500 === 0){
//     console.log(n + ' tests ran, current avg is ' + (sum/n).toFixed(3) + ' ms');
//   }
//   let randomRecord = Math.floor(Math.random() * 10000000) + 1;
//   let before = now();
//   db.execute(query, [randomRecord], {prepare: true}, (err) => {
//     if (err) {
//       console.log(err)
//     } else {
//       let after = now();
//       let difference = after - before;
//       sum += Number(difference);
//       n++;
//       test(n);
//     }
//   })
// }

test(0);