const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

router.get('/', postsController.getAllPosts);
router.get('/author/:authorId', postsController.getPostsByAuthor);
router.post('/', postsController.createPost);

module.exports = router;