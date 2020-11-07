import express from 'express';

const app = express();

app.get('/auth', (req, res) => res.send('Auth!!!'));

export default app;
