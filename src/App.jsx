import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import RepoList from './components/RepoList/RepoList';
import Header from './components/Header';
import SearchForm from './components/SearchForm/SearchForm';

import reducer from './reducer';

const runApp = () => {
  const store = configureStore({
    reducer,
    devTools: true,
    preloadedState: {
      username: '',
      repos: [],
    },
  });

  const App = () => (
    <Provider store={store}>
      <Header>Github Repos Reader</Header>
      <SearchForm />
      <RepoList />
    </Provider>
  );
  ReactDOM.render(<App />, document.getElementById('root'));
};

export default runApp;
