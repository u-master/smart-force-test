import express from 'express';
import axios from 'axios';

const app = express();

app.get('/auth', (req, res) => {
  // const query = window.location.query;
  // const code = /^code=(\w*)$/g.exec(query);
  const client_id = '4421486ad44ad061fbed';
  const client_secret = '62da27c043a88ca97ea8bd5f621396a21e3ada87';
  const { code } = req.query;
  axios
    .post(
      `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`,
    )
    .then((response) => res.redirect(`/?${response.data}`))
    .catch((error) => res.send(`Error: ${error.name}`));
});

export default app;
