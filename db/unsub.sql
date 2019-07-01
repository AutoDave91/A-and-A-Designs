UPDATE customer
SET newsletter = false
WHERE customer_id = $1
RETURNING *