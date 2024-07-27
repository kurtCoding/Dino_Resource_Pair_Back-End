DROP DATABASE IF EXISTS dinosite_back_end;
CREATE DATABASE dinosite_back_end;

\c dinosite_back_end;

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