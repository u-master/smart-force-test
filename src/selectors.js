import { createSelector } from 'reselect';

const usernameSelector = ({ username }) => username;

const allReposSelector = ({ repos: { data } }) => data;

export { usernameSelector, allReposSelector };
