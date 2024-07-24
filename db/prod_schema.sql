DROP DATABASE IF EXISTS dinos_app_prod;
CREATE DATABASE dinos_app_prod;

\c dinos_app_prod;

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