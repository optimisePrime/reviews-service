const csvWriter = require('csv-write-stream');
const faker = require('faker');
const fs = require('fs');
const moment = require('moment');

const writer = csvWriter();

writer.pipe(fs.createWriteStream('./CSVfiles/seed17.csv'));

let count = 34099996;
let num1 = 9700000;
let num = 10000000;

for (let i = num1; i < num; i++) {
  for (let j = 0; j < 3; j++) {
    count++;
    const id = count;
    const productId = i;
    const username = faker.internet.userName() + i;
    const reviewText = faker.lorem.paragraph(1);
    const found_helpful = faker.random.number(25)
    const score = faker.random.number(4) + 1;
    const title = faker.lorem.words(3);
    const date = moment().subtract(faker.random.number(1000), 'day').format('YYYY-MM-DD');

    const data = {
      id: id,
      product_id : productId,
      username: username,
      review_text: reviewText,
      found_helpful: found_helpful,
      is_verified: 1,
      score: score,
      title: title,
      review_date: date
    };

    writer.write(data);
    }
  if ((i + 1) % 50000 === 0) {
    console.log(i+1, ' created');
  }
  if (i === num - 1) {
    console.log(count);
  }

  
}

writer.end();

// fs.appendFileSync('./CSVfiles/seed.csv')