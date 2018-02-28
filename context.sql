CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id int AUTO_INCREMENT,
  product_name varchar(30) NOT NULL,
  department_name varchar(30) NOT NULL,
  price int(10) NOT NULL,
  stock_quantity int(10) NOT NULL,
  PRIMARY KEY(item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Drum Set", "Music", 1200, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Snowboard", "Sports", 450, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Coffee Table", "Furniture", 275, 6);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Ping Pong Set", "Sports", 200, 18);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Air Purifier", "Lifestyle", 210, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Computer Monitor", "Electronics", 495, 23);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Water Bottle", "Food & Bev", 25, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Food Processor", "Food & Bev", 160, 12);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Area Rug", "Furniture", 310, 7);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Framed Painting", "Art", 2300, 1);

SELECT * FROM products;