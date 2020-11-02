import React from 'react';
import { useSelector } from 'react-redux';

import {
  usernameSelector,
  reposIsFetchingSelector,
  reposIsFetchErrorSelector,
  reposFetchingErrorSelector,
  reposIsFetchEmptySelector,
} from '../../selectors';

import Message from './Message';

const Feedback = () => {
  const username = useSelector(usernameSelector);
  const isFetching = useSelector(reposIsFetchingSelector);
  const isFetchError = useSelector(reposIsFetchErrorSelector);
  const isFetchEmpty = useSelector(reposIsFetchEmptySelector);
  const fetchError = useSelector(reposFetchingErrorSelector);

  return (
    <>
      {isFetching && <Message>Fetching data...</Message>}
      {isFetchEmpty && username !== '' && <Message>No repositories</Message>}
      {isFetchError && <Message error>{fetchError}</Message>}
    </>
  );
};

export default Feedback;
