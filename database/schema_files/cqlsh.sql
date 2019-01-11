create table reviews (
  id int, 
  product_id int,
  username varchar, 
  is_verified int, 
  review_text varchar, 
  score int,
  found_helpful int, 
  title varchar, 
  review_date timestamp,
  primary key (id)
  );

  create table products (
  product_id int primary key,
  reviews 
  );

  insert into reviews (id, product_id, username, is_verified, review_text, score, found_helpful, title, review_date) 
  values (1, 1, 'dfjksf', 1, 'djkdfgsdkfhsjkdfhaks', 4, 23, 'dfgsdlkgfds', '2018-04-12T07:00:00.000Z') ;