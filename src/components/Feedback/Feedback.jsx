import React from 'react';
import { useSelector } from 'react-redux';

import {
  reposIsFetchingSelector,
  reposIsFetchErrorSelector,
  reposFetchingErrorSelector,
} from '../../selectors';

import Message from './Message';

const Feedback = () => {
  const isFetching = useSelector(reposIsFetchingSelector);
  const isFetchError = useSelector(reposIsFetchErrorSelector);
  const fetchError = useSelector(reposFetchingErrorSelector);

  return (
    <>
      {isFetching && <Message>Fetching data...</Message>}
      {isFetchError && <Message error>{fetchError}</Message>}
    </>
  );
};

export default Feedback;
