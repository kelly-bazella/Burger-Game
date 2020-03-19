CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	id INTEGER not null auto_increment PRIMARY KEY,
    burger_name VARCHAR (100),
    devoured BOOLEAN
);

