DELETE FROM inventory
WHERE product_id = $1;
SELECT * FROM inventory