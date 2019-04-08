-- DROP DATABASE IF EXISTS exampledb;
-- CREATE DATABASE exampledb;

-- DROP DATABASE IF EXISTS testdb;
-- CREATE DATABASE testdb;


DROP DATABASE IF EXISTS fithub_db;
CREATE DATABASE fithub_db;

USE fithub_db;

CREATE TABlE Profiles(
    id INTEGER(100) AUTO_INCREMENT NOT NULL,
    name VARCHAR (100) NOT NULL,
    age INTEGER(10) NOT NULL,
    weight DECIMAL(10) NOT NULL,
    height DECIMAL(10) NOT NULL,
    water_glasses INTEGER(10) NOT NULL,
    exercise_days INTEGER(10) NOT NULL,
    veggies INTEGER(10) NOT NULL,
    fruits INTEGER(10) NOT NULL,
    sleep_hours INTEGER(10) NOT NULL,
    gender VARCHAR (10) NOT NULL,
    createdAt datetime DEFAULT NULL COMMENT 'created time',
    updatedAt datetime DEFAULT NULL COMMENT 'updated time',
    PRIMARY KEY(id)
);



