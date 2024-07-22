DROP DATABASE IF EXISTS dinos_dev;
CREATE DATABASE dinos_dev;

\c dinos_dev;

CREATE TABLE dinos (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    era TEXT,
    diet TEXT,
    length INT,
    weight INT,
    habitat TEXT,
    year_discovered INT,
    bipedal BOOLEAN
);