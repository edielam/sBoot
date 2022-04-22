CREATE TABLE IF NOT EXISTS USERS (
  userId INT PRIMARY KEY auto_increment,
  username VARCHAR(20),
  password VARCHAR,
  firstname VARCHAR(20),
  lastname VARCHAR(20)
);