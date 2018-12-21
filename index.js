const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = 3001;
const app = express();

app.use(express.static(path.join(__dirname, 'public/index.html')));

app.use(bodyParser());

app.listen(port, () => { console.log(`listening on port ${port}`); });
