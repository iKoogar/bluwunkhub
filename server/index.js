// server/src/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Sample route
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
