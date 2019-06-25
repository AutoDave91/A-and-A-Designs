SELECT i.designer, o.order_id, i.product_name, o.quantity, c.email, c.first_name, c.last_name, o.delivered, o.notes, o.address, o.city, o.state, o.zip_code
FROM (SELECT order_id, customer_id, UNNEST(product_id) as product_id, UNNEST(quantity) as quantity, UNNEST(notes) as notes, delivered, address, city, state, zip_code FROM orders) AS o
INNER JOIN inventory as i
ON o.product_id = i.product_id
INNER JOIN customer AS c
ON o.customer_id = c.customer_id