CRUD Operation for Postgre
1. Create - uncomment the postgre section and run run fake_data_generator.js to create and seed 
  the postgre database with 100 product id and 1000 product reviews.
2. Read - after data is generated, set up server and webpack, and run client from localhost, 
  the correct data should be generated on client to demostrate reading data from database.
3. Update - click on the 'helpful' button for a review and the found helpful count should be 
  updated in the database (refresh page to verify).
4. Delete - There is no delete review function on client, but on the bottom of fake_data_generator.js,
  there is code to delete reviews or products, uncomment the code and run the file to run the delete operation. 

CRUD Operation for Cassandra