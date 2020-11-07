import express from 'express';

const app = express();

app.get('/auth', (req, res) => {
  const query = window.location.query;
  const code = /^code=(\w*)$/g.exec(query);
  console.log(' >>> Auth', req, query, code);
  res.send('Auth!!!');
});

export default app;
