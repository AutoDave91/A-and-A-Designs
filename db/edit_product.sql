UPDATE inventory SET
product_name = $2,
description = $3,
price = $4,
image = $5,
designer = $6
WHERE product_id = $1