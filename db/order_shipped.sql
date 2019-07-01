UPDATE orders
SET delivered = true
WHERE order_id = $1