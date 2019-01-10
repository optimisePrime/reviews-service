CREATE SCHEMA reviewsdb;

CREATE TABLE products (
	id BIGSERIAL PRIMARY KEY
);

CREATE TABLE reviews (
	id BIGSERIAL PRIMARY KEY,
	product_id INT NOT NULL,
	username VARCHAR(25),
	is_verified INT NOT NULL,
	review_text TEXT,
	score INT NOT NULL,
	found_helpful INT,
	title VARCHAR (50),
	review_date DATE,
	FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE test (
	id BIGSERIAL PRIMARY KEY,
	score INT NOT NULL,
	title VARCHAR (50),
);