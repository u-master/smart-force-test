import express from 'express';

const app = express();

app.get('/auth', (req, res) => {
    console.log(req);
    res.send('Auth!!!'));
}

export default app;
