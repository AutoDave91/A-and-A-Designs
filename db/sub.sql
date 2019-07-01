UPDATE customer
SET newsletter = true
WHERE customer_id = $1
RETURNING *