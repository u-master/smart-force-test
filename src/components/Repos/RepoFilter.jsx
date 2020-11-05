import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from '../../slices/repos.slice';
import { reposFilterSelector } from '../../selectors';

import Input from '../Input';
import FormFilter from './FormFilter';

const RepoFilter = () => {
  const [formFilter, setFormFilter] = useState('');
  const filter = useSelector(reposFilterSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    setFormFilter(filter);
  }, [filter]);

  const handleChange = (e) => {
    setFormFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFilter({ filter: formFilter }));
  };

  return (
    <FormFilter onSubmit={handleSubmit}>
      <label htmlFor="reposfilter">Filter: </label>
      <Input
        type="text"
        name="reposfilter"
        id="reposfilter"
        placeholder="Keyword"
        onChange={handleChange}
        value={formFilter}
      />
    </FormFilter>
  );
};

export default RepoFilter;
