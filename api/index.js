import express from 'express';

const app = express();

app.get('/auth', (req, res) => {
  // const query = window.location.query;
  // const code = /^code=(\w*)$/g.exec(query);
  const result = '<p>Auth!!!</p>' + (JSON.stringify(req) || 'null');
  res.send(result);
  // <p>${window.location}</p> <p>${query}</p> <p>${code}</p> `);
});

export default app;
