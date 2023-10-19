const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

// Configura il parser per gestire i dati JSON
app.use(bodyParser.json());

// Crea una connessione al database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password', // La password del tuo database
  database: 'azienda',
});

// Connessione al database
db.connect((err) => {
  if (err) {
    console.error('Errore di connessione al database:', err);
  } else {
    console.log('Connessione al database riuscita');
  }
});

// API per aggiungere un dipendente
app.post('/aggiungi-dipendente', (req, res) => {
  const { nome, cognome } = req.body;

  const sql = 'INSERT INTO dipendenti (nome, cognome) VALUES (?, ?)';
  db.query(sql, [nome, cognome], (err, result) => {
    if (err) {
      console.error('Errore durante l\'inserimento del dipendente:', err);
      res.status(500).json({ error: 'Errore durante l\'inserimento del dipendente' });
    } else {
      console.log('Dipendente aggiunto con successo');
      res.json({ message: 'Dipendente aggiunto con successo' });
    }
  });
});

// API per aggiungere le ore lavorate
app.post('/aggiungi-ore', (req, res) => {
  const { dipendente_id, data, ore_lavorate } = req.body;

  const sql = 'INSERT INTO ore_lavorate (dipendente_id, data, ore_lavorate) VALUES (?, ?, ?)';
  db.query(sql, [dipendente_id, data, ore_lavorate], (err, result) => {
    if (err) {
      console.error('Errore durante l\'inserimento delle ore lavorate:', err);
      res.status(500).json({ error: 'Errore durante l\'inserimento delle ore lavorate' });
    } else {
      console.log('Ore lavorate aggiunte con successo');
      res.json({ message: 'Ore lavorate aggiunte con successo' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
