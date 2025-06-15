const db = require('../models/db');

exports.getAllPosts = (req, res) => {
  db.query(`SELECT posts.*, authors.name, authors.email, authors.image 
            FROM posts 
            JOIN authors ON posts.author_id = authors.id`, 
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    });
};

exports.getPostsByAuthor = (req, res) => {
  const authorId = req.params.authorId;
  db.query(`SELECT * FROM posts WHERE author_id = ?`, [authorId],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    });
};

exports.createPost = (req, res) => {
  const { title, description, category, author_id } = req.body;
  db.query(`INSERT INTO posts (title, description, category, author_id) VALUES (?, ?, ?, ?)`,
    [title, description, category, author_id], (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ id: result.insertId });
    });
};