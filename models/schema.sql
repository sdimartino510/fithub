
DROP DATABASE IF EXISTS fithub_db;
CREATE DATABASE fithub_db;

USE fithub_db;

CREATE TABlE profile(
    id INTEGER(100) AUTO_INCREMENT NOT NULL,
    name VARCHAR (100) NOT NULL,
    gender VARCHAR (10) NOT NULL,
    age INTEGER(10) NOT NULL,
    weight DECIMAL(10) NOT NULL,
    height DECIMAL(10) NOT NULL,
    PRIMARY KEY(id)
);

USE fithub_db;

CREATE TABLE survey(
    
);

