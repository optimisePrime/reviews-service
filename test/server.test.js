const request = require('supertest');
const app = require('./../server/app.js');

describe('GET / ', () => {
  test('It should respond to get requests', async () => {
    const response = await request(app).get('/reviews/average/:productid', { productid: 1 });
    expect(response.statusCode).toBe(200);
  });
});