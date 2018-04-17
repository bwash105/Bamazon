DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM products

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("DJI Mavic Pro", "Electronics", 899.95, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hang Drum", "Instruments", 2399.95, 40);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Casio Keyboard", "Instruments", 449.95, 35);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Matches", "Miscellaneous", 0.95, 300);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bitcoin", "Cryptocurrency", 6899.68, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ethereum", "Cryptocurrency", 335.45, 1000);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Autobiography of a Yogi", "Books", 9.95, 88);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Basketball", "Sports", 19.99, 60);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tamagachi", "Electronics", 29.95, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Holographic Charzard", "Playing Cards", 899.95, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tesla Model 4", "Automotive", 89999.95, 1);

SELECT * FROM products

UPDATE tablename set mycolumn='' where mycolumn is null and Id is not null;

/* DELETE FROM products WHERE price = 899.95;


