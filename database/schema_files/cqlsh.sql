CREATE TABLE reviews (
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

CREATE INDEX ON reviews (product_id);

 