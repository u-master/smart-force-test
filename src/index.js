/* Entry point */
import { createServer } from 'miragejs';
import response from './../fixtures/response.mock';

import runApp from './App';

import './index.scss';

if (process.env.NODE_ENV === 'development') {
  // mocking requests while develop
  createServer({
    routes() {
      this.urlPrefix = 'https://api.github.com';
      this.get('/users/:username/repos', (_s, request) => response(request.params.username));
    },
  });
}

runApp();
