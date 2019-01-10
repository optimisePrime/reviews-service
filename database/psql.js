const Pool = require('pg').Pool
const pool = new Pool({
  user: 'zkliu',
  host: 'localhost',
  database: 'review_db',
  password: '',
  port: 5432,
})

pool.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected')
  }
})

module.exports = pool;
