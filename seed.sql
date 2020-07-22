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
    salary DECIMAL(5, 2),
    department_id INT REFERENCES deparment (id),
    PRIMARY KEY (id)
);

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT REFERENCES rol (id),
    manager_id INT REFERENCES employee (id),
    PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("sales");

INSERT INTO department (name)
VALUES ("billing");

INSERT INTO department (name)
VALUES ("Marketing");

INSERT INTO department (name)
VALUES ("Production");

INSERT INTO rol (title, salary, department_id)
VALUES ("Enginer", 175.27, 1);

INSERT INTO rol (title, salary, department_id)
VALUES ("Manager", 75.76, 2);

INSERT INTO rol (title, salary, department_id)
VALUES ("Intern" ,45.29, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rony", "Funes", 1, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James", "Prado", 2, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Robert", "Jacks", 1, 3);