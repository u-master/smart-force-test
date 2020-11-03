import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  paginationCurrentPageSelector,
  paginationLastPageSelector,
  paginationItemsPerPageSelector,
  paginationIsShowAllSelector,
} from '../../selectors';

import { setItemsPerPage, setShowAll } from '../../slices/pagination.slice';

import PaginatorContainer from './PaginatorContainer';

const PageMore = () => (
  <li>
    <span>...</span>
  </li>
);
const PageHref = ({ num }) => (
  <li key={`page${num}`}>
    <a href="#">{num}</a>
  </li>
);
const PageSpan = ({ num }) => (
  <li key={`page${num}`}>
    <span>{num}</span>
  </li>
);

const PagesSimple = ({ min, cur, max }) =>
  [...Array(max - min + 1)].map((_e, i) =>
    cur === i + min ? (
      <PageSpan key={`page${i + min}`} num={i + min} />
    ) : (
      <PageHref key={`page${i + min}`} num={i + min} />
    ),
  );

const PagesAtStart = ({ cur, max }) => (
  <>
    <PagesSimple min={1} cur={cur} max={5} />
    <PageMore key="pagermore" />
    <PageHref key={`page${max}`} num={max} />
  </>
);

const PagesAtEnd = ({ cur, max }) => (
  <>
    <PageHref key="page1" num={1} />
    <PageMore key="pagelmore" />
    <PagesSimple min={max - 4} cur={cur} max={max} />
  </>
);

const PagesAtMiddle = ({ cur, max }) => (
  <>
    <PageHref key="page1" num={1} />
    <PageMore key="pagelmore" />
    <PageHref key={`page${cur - 1}`} num={cur - 1} />
    <PageHref key={`page${cur}`} num={cur} />
    <PageHref key={`page${cur + 1}`} num={cur + 1} />
    <PageMore key="pagermore" />
    <PageHref key={`page${max}`} num={max} />
  </>
);

const Paginator = () => {
  const currentPage = useSelector(paginationCurrentPageSelector);
  const lastPage = useSelector(paginationLastPageSelector);
  const itemsPerPage = useSelector(paginationItemsPerPageSelector);
  const isShowAll = useSelector(paginationIsShowAllSelector);

  const [formItemsPerPage, setFormItemsPerPage] = useState(itemsPerPage);
  const dispatch = useDispatch();

  const handleShowAll = (e) => {
    dispatch(setShowAll({ isShowAll: e.target.checked }));
  };

  const handleOnChange = (e) => {
    const newVal = +e.target.value;
    if (Number.isInteger(newVal)) setFormItemsPerPage(newVal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setItemsPerPage({ itemsPerPage: formItemsPerPage }));
  };

  return (
    <PaginatorContainer>
      {isShowAll ? (
        <div></div>
      ) : (
        <ul>
          {lastPage < 8 ? (
            <PagesSimple min={1} cur={currentPage} max={lastPage} />
          ) : currentPage <= 4 ? (
            <PagesAtStart cur={currentPage} max={lastPage} />
          ) : currentPage >= lastPage - 3 ? (
            <PagesAtEnd cur={currentPage} max={lastPage} />
          ) : (
            <PagesAtMiddle cur={currentPage} max={lastPage} />
          )}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          disabled={isShowAll}
          value={formItemsPerPage}
          onChange={handleOnChange}
        ></input>
        <input type="checkbox" checked={isShowAll} id="isAll" onChange={handleShowAll} />
        <label htmlFor="isAll">All</label>
      </form>
    </PaginatorContainer>
  );
};

export default Paginator;
