const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ 
  contactPoints: ['localhost'], 
  localDataCenter: 'datacenter1', 
  keyspace: 'reviews_db' 
});

client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected')
  }
});


// const query = 'SELECT name, email FROM users WHERE key = ?';
// client.execute(query, [ 'someone' ])
//   .then(result => console.log('User with email %s', result.rows[0].email));

module.exports = client;