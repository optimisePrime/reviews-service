const csvWriter = require('csv-write-stream');
const faker = require('faker');
const fs = require('fs');
const moment = require('moment');


const categories = ['electronics', 'clothes', 'accessories', 'appliances', 'furniture', 'games', 'books', 'handmade', 'officesupplies', 'software'];

// const createCSV = () => {
//   for (let i = 0; i < 10; i++) {
//     let bigString = '';
//     for (let j = 1; j <= 100; j++) {
//       let num = faker.random.number(3) + 2;
//       for (let k =0; k < num; k++){
//         const productId = i*100 + j;
//         const username = faker.internet.userName();
//         const reviewText = faker.lorem.paragraph(1);
//         const found_helpful = faker.random.number(25)
//         const score = faker.random.number(4) + 1;
//         const title = faker.lorem.words(2);
//         const date = moment().subtract(faker.random.number(1000), 'day').format('YYYY-MM-DD');
//         let string = [productId, username, reviewText, found_helpful, 1, score, title, date].join(',');
//         string += '\r\n';
//         bigString += string;
//       }
//       fs.appendFileSync('./psqlseed/psqlseed.csv', bigString);
//     }
//     console.log(i + '00 created');
//   }
// };


// createCSV();





// const writer = csvWriter();

// writer.pipe(fs.createWriteStream('./psqlseed/psqlseed.csv'));
let num1 = 1000000;
let num2 = 0;
for (let k=0; k<180; k++){
  num2 = num1 + 50000;
  for (let i = num1; i <= num2 ; i++) {
    let num = faker.random.number(2) + 2;
    for (let j = 0; j < num; j++) {
      const productId = i;
      const username = faker.internet.userName();
      const reviewText = faker.lorem.paragraph(1);
      const found_helpful = faker.random.number(25)
      const score = faker.random.number(4) + 1;
      const title = faker.lorem.words(2);
      const date = moment().subtract(faker.random.number(1000), 'day').format('YYYY-MM-DD');
  
      let string = [productId, username, reviewText, found_helpful, 1, score, title, date].join(',');
      string += '\r\n';
      fs.appendFileSync('./psqlseed/psqlseed1.csv', string)
    }
  
    if ((i+1) % 10000 === 0) {
      console.log(i+1, ' created');
    }
  }
  num1 = num2;
}


 // const data = {
    //   product_id : productId,
    //   username: username,
    //   review_text: reviewText,
    //   found_helpful: found_helpful,
    //   is_verified: 1,
    //   score: score,
    //   title: title,
    //   review_date: date
    // };
    // writer.write(data);

// writer.end();

// fs.appendFileSync('./CSVfiles/seed.csv')

