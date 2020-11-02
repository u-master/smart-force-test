import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';

import Repos from './components/Repos';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Feedback from './components/Feedback';

import reducer from './reducer';

const runApp = () => {
  const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV === 'development',
    preloadedState: {
      username: '',
      repos: { data: [], fetchingState: null, fetchingError: null },
    },
  });

  const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    @media (max-width: 768px) {
      width: 100%;
    }
  `;

  const App = () => (
    <Provider store={store}>
      <Wrapper>
        <Header>Github Repos Reader</Header>
        <SearchForm />
        <Feedback />
        <Repos />
      </Wrapper>
    </Provider>
  );

  ReactDOM.render(<App />, document.getElementById('root'));
};

export default runApp;
