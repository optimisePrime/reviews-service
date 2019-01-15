CREATE TABLE products (
	id BIGSERIAL PRIMARY KEY
);

CREATE TABLE reviews (
	id BIGSERIAL PRIMARY KEY,
	product_id INT NOT NULL,
	username VARCHAR(40),
	is_verified INT NOT NULL,
	review_text TEXT,
	score INT NOT NULL,
	found_helpful INT,
	title VARCHAR (50),
	review_date DATE
);

