INSERT INTO inventory (product_name, description, price, image, designer)
VALUES ($1, $2, $3, $4, $5)
RETURNING *