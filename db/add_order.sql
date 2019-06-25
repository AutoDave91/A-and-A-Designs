INSERT INTO orders (product_id, customer_id, quantity, delivered, total, address , city , state , zip_code)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
RETURNING