const express = require('express');
const axios = require('axios');

const app = express();

const authorize = (clientId, clientSecret, githubCode) => {
  return axios.post(
    `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${githubCode}`,
  );
};

app.get('/auth', (req, res) => {
  const clientId = '4421486ad44ad061fbed';
  const clientSecret = '62da27c043a88ca97ea8bd5f621396a21e3ada87';
  const { code } = req.query;
  authorize(clientId, clientSecret, code)
    .then((response) => res.redirect(`/?${response.data}`))
    .catch((error) => res.send(`Error: ${error.name}`));
});

app.get('/authdev', (req, res) => {
  const clientId = 'bd4f45a8fde0385a77a4';
  const clientSecret = '3e08be1cc188b55f52a58753bad6a6eb0b232fbb';
  const { code } = req.query;
  authorize(clientId, clientSecret, code)
    .then((response) => res.redirect(`http://localhost:3000/?${response.data}`))
    .catch((error) => res.send(`Error: ${error.name}`));
});

app.listen(8080, () => console.log('Backend server listening on port 8080!'));

module.exports = app;
