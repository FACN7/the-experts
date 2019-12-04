BEGIN;

DROP TABLE IF EXISTS Contractor,
Reviews,
Users,
jobs;

CREATE TABLE IF NOT EXISTS Contractor (
    id SERIAL PRIMARY KEY,
    cont_name VARCHAR (50) NOT NULL,
    job TEXT NOT NULL,
    likes double precision DEFAULT 0
);

CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR (50) NOT NULL,
    last_name VARCHAR (50) NOT NULL,
    email TEXT NOT NULL UNIQUE,
    user_password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Reviews (
    id SERIAL,
    user_id int NOT NULL,
    contractor_id int NOT NULL,
    reviewBody TEXT,
    isliked BOOLEAN,
    reviewtime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (contractor_id) REFERENCES Contractor (id),
    FOREIGN KEY (user_id) REFERENCES Users (id)
);

CREATE TABLE IF NOT EXISTS jobs (
    id SERIAL PRIMARY KEY,
    job TEXT NOT NULL UNIQUE
);

INSERT INTO
    jobs (job)
VALUES
    ('plumber'),
    ('wood-worker'),
    ('electric'),
    ('painter');

INSERT INTO
    Contractor (cont_name, job, likes)
VALUES
    ('ali', 'plumber', 3.5);

INSERT INTO
    Contractor (cont_name, job, likes)
VALUES
    ('samih', 'plumber', 2);

COMMIT;