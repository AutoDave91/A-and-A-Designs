CREATE TABLE customer (
customer_id SERIAL PRIMARY KEY,
first_name VARCHAR(255),
last_name VARCHAR(200),
username VARCHAR(200),
password VARCHAR(200),
phone_number VARCHAR(200),
email VARCHAR(200),
admin BOOLEAN,
newsletter BOOLEAN
)

INSERT INTO costomer (name_first, name_last, email, phone_number, admin, username, password, newsletter)
VALUES ('admin', 'admin', 'admin@admin.admin', '123-456-7890', true, 'admin', 'admin', true)



CREATE TABLE inventory (
product_id SERIAL PRIMARY KEY,
product_name VARCHAR(255),
description TEXT,
price DECIMAL,
image TEXT,
designer VARCHAR(200),
ordered_amount INT
)



CREATE TABLE orders(
id SERIAL PRIMARY KEY,
product_id INT[],
customer_id INT,
quantity INT[],
delivered BOOLEAN,
total DECIMAL,
address TEXT,
city TEXT,
state TEXT,
zip_code TEXT,
notes TEXT[],
FOREIGN KEY (product_id) REFERENCES inventory(product_id),
FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
)