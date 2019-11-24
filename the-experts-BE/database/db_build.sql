BEGIN;
    DROP TABLE IF EXISTS Contractor;

    CREATE TABLE
    IF NOT EXISTS Contractor
    (
        id SERIAL PRIMARY KEY,
        name VARCHAR
    (50) NOT NULL,
        job TEXT NOT NULL,
        rating double precision	 DEFAULT 0
    );
INSERT INTO Contractor
    (name,job,rating)
VALUES
    ('ali', 'plumber', 3.5);

INSERT INTO Contractor
    (name,job,rating)
VALUES
    ('samih', 'plumber', FALSE);

COMMIT;