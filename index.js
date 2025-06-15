const express = require('express');
const app = express();
const postsRoutes = require('./routes/postsRoutes');
const authorsRoutes = require('./routes/authorsRoutes');

app.use(express.json());

app.use('/api/posts', postsRoutes);
app.use('/api/authors', authorsRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));