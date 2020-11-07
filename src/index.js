/* Entry point */
import { createServer } from 'miragejs';
import response from './../fixtures/response.mock';

import runApp from './App';

import './index.scss';

if (process.env.NODE_ENV === 'development') {
  // mocking requests while develop
  // createServer({
  //   routes() {
  //     this.urlPrefix = 'https://api.github.com';
  //     this.get('/users/:username/repos', (_s, request) => {
  //       if (request.params.username === 'unknown')
  //         throw new Error('Request failed with status code 404');
  //       return response(request.params.username);
  //     });
  //   },
  // });
}

const curloc = new URL(window.location.href);
const access_token = curloc.searchParams.get('access_token');
console.log(access_token);

runApp({ access_token });
