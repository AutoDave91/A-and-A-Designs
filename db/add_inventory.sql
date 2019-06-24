INSERT INTO inventory (product_name, description, price, image, designer, ordered_amount)
VALUES ($1, $2, $3, $4, $5, 0)
RETURNING *