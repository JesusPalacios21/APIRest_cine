CREATE DATABASE cine;
USE cine;

CREATE TABLE peliculas(
    id              INT AUTO_INCREMENT PRIMARY KEY,
    titulo          VARCHAR(200) NOT NULL,
    duracionmin     SMALLINT NOT NULL,
    clasificacion   ENUM('APT','+14','+18') NOT NULL DEFAULT 'APT',
    alanzamiento    CHAR(4) NOT NULL
)ENGINE = INNODB;

INSERT INTO peliculas(titulo, duracionmin, clasificacion,alanzamiento) 
  VALUES
    ('Sherk','110','APT','2001'),
    ('Volver al Futuro', '125', 'APT', '1980'),
    ('Avengers', '180', 'APT', '2022');

SELECT *FROM peliculas