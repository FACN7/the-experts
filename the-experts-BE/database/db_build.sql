BEGIN;
    DROP TABLE IF EXISTS Contractor, Users;

    CREATE TABLE
    IF NOT EXISTS Contractor
    (
        id SERIAL PRIMARY KEY,
        cont_name VARCHAR
    (50) NOT NULL,
        job TEXT NOT NULL,
        rating double precision	 DEFAULT 0
    );

    CREATE TABLE
    IF NOT EXISTS Users
    (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR
    (50) NOT NULL,
            last_name VARCHAR
    (50) NOT NULL,
        email TEXT NOT NULL,
        user_password TEXT NOT NULL
    );

INSERT INTO Users
    (first_name,last_name,email,user_password)
VALUES
    ('ebraheem', 'abbas', 'ebraheemabbas51@gmail.com', 'password');





INSERT INTO Contractor
    (cont_name,job,rating)
VALUES
    ('ali', 'plumber', 3.5);

INSERT INTO Contractor
    (cont_name,job,rating)
VALUES
    ('samih', 'plumber', 2);

COMMIT;