SELECT i.designer, i.product_name, c.email, c.first_name, o.* FROM orders as o
INNER JOIN inventory as i
ON o.product_id = i.product_id
INNER JOIN customer AS c
ON o.customer_id = c.customer_id