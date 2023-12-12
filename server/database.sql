CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(28) NOT NULL UNIQUE,
    passhash VARCHAR NOT NULL,
    email VARCHAR(28) NOT NULL UNIQUE
); 

INSERT INTO users(username, passhash, email) values($1,$2,$3)