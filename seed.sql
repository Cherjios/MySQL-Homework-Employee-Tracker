DROP DATABASE IF EXISTS companyDB;

CREATE DATABASE companyDB;

USE companyDB;

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE rol(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NULL,
    salary DECIMAL,
    department_id INT REFERENCES deparment (id),
    PRIMARY KEY (id)
);

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT,
    fist_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT REFERENCES rol (id),
    manager_id INT REFERENCES employee (id) NULL ,
    PRIMARY KEY (id)
);

