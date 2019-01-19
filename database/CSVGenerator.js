const csvWriter = require('csv-write-stream');
const faker = require('faker');
const fs = require('fs');
const moment = require('moment');

const writer = csvWriter();

writer.pipe(fs.createWriteStream('./CSVfiles/seed18.csv'));

for (let i = 1; i <= 1000; i++) {
  for (let j = 0; j < 500; j++) {
    const productId = i;
    const username = faker.internet.userName();
    const reviewText = faker.lorem.paragraph(1);
    const found_helpful = faker.random.number(25)
    const score = faker.random.number(4) + 1;
    const title = faker.lorem.words(3);
    const date = moment().subtract(faker.random.number(1000), 'day').format('YYYY-MM-DD');

    const data = {
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
  if ((i + 1) % 100 === 0) {
    console.log(i+1, ' created');
  }

  
}

writer.end();

// fs.appendFileSync('./CSVfiles/seed.csv')