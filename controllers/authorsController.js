const db = require('../models/db');

exports.getAllAuthors = (req, res) => {
  db.query(`SELECT * FROM authors`, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.createAuthor = (req, res) => {
  const { name, email, image } = req.body;
  db.query(`INSERT INTO authors (name, email, image) VALUES (?, ?, ?)`,
    [name, email, image], (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ id: result.insertId });
    });
};