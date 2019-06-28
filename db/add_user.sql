INSERT INTO customer (first_name, last_name, username, password, email, phone_number, admin, newsletter)
VALUES ($1, $2, $3, $4, $5, $6, false, false)
RETURNING *