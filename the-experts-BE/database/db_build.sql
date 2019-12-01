BEGIN;

DROP TABLE IF EXISTS Contractor,
Reviews,
Users;

CREATE TABLE IF NOT EXISTS Contractor (
    id SERIAL PRIMARY KEY,
    cont_name VARCHAR (50) NOT NULL,
    job TEXT NOT NULL,
    rating double precision DEFAULT 0
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
    FOREIGN KEY (contractor_id) REFERENCES Contractor (id),
    FOREIGN KEY (user_id) REFERENCES Users (id)
);

INSERT INTO
    Users (first_name, last_name, email, user_password)
VALUES
    (
        'ebraheem',
        'abbas',
        'ebraheemabbas51@gmail.com',
        'password'
    );

INSERT INTO
    Contractor (cont_name, job, rating)
VALUES
    ('ali', 'plumber', 3.5);

INSERT INTO
    Contractor (cont_name, job, rating)
VALUES
    ('samih', 'plumber', 2);

INSERT INTO
    Reviews (user_id, contractor_id, reviewBody, isliked)
VALUES
    (1, 1, 'Ali is expert plumber', True);

COMMIT;