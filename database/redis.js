var redis = require("redis"),
client = redis.createClient();

client.on("error", function (err) {
  if(err){
    console.log(err);
    console.log('redis error')
  } else {
    console.log('connected to redis')
  }
});

module.exports = client;