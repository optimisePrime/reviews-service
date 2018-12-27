const app = require('./../server/app.js');

app.listen(3100, () => {
  console.log('test server i listening on port 3100');
});

module.exports = app;
