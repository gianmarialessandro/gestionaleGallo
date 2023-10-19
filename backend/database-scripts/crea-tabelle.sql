CREATE DATABASE azienda1;
USE azienda;

-- Creazione della tabella dei dipendenti
CREATE TABLE dipendenti (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255),
  cognome VARCHAR(255)
);

-- Creazione della tabella delle ore lavorate
CREATE TABLE ore_lavorate (
  id INT PRIMARY KEY AUTO_INCREMENT,
  dipendente_id INT,
  data DATE,
  ore_lavorate INT,
  FOREIGN KEY (dipendente_id) REFERENCES dipendenti(id)
);