import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  res.send("Hello!")
});

app.listen(3003, () => console.log('Listening on port 3003'));
