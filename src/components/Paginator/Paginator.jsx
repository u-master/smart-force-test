import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  paginationCurrentPageSelector,
  paginationLastPageSelector,
  paginationItemsPerPageSelector,
  paginationIsShowAllSelector,
} from '../../selectors';

import { setCurrentPage, setItemsPerPage, setShowAll } from '../../slices/pagination.slice';

import InputPerPage from './InputPerPage';

import PaginatorContainer from './PaginatorContainer';

const PageMore = () => (
  <li>
    <span>...</span>
  </li>
);
const PageHref = ({ num, onClick }) => (
  <li key={`page${num}`}>
    <a href="#" onClick={onClick}>
      {num}
    </a>
  </li>
);
const PageSpan = ({ num }) => (
  <li key={`page${num}`}>
    <span>{num}</span>
  </li>
);

const PagesSimple = ({ min, cur, max, handlerClicks }) =>
  [...Array(max - min + 1)].map((_e, i) =>
    cur === i + min ? (
      <PageSpan key={`page${i + min}`} num={i + min} />
    ) : (
      <PageHref key={`page${i + min}`} num={i + min} onClick={handlerClicks(i + min)} />
    ),
  );

const PagesAtStart = ({ cur, max, handlerClicks }) => (
  <>
    <PagesSimple min={1} cur={cur} max={5} handlerClicks={handlerClicks} />
    <PageMore key="pagermore" />
    <PageHref key={`page${max}`} num={max} onClick={handlerClicks(max)} />
  </>
);

const PagesAtEnd = ({ cur, max, handlerClicks }) => (
  <>
    <PageHref key="page1" num={1} onClick={handlerClicks(1)} />
    <PageMore key="pagelmore" />
    <PagesSimple min={max - 4} cur={cur} max={max} handlerClicks={handlerClicks} />
  </>
);

const PagesAtMiddle = ({ cur, max, handlerClicks }) => (
  <>
    <PageHref key="page1" num={1} onClick={handlerClicks(1)} />
    <PageMore key="pagelmore" />
    <PageHref key={`page${cur - 1}`} num={cur - 1} onClick={handlerClicks(cur - 1)} />
    <PageHref key={`page${cur}`} num={cur} onClick={handlerClicks(cur)} />
    <PageHref key={`page${cur + 1}`} num={cur + 1} onClick={handlerClicks(cur + 1)} />
    <PageMore key="pagermore" />
    <PageHref key={`page${max}`} num={max} onClick={handlerClicks(max)} />
  </>
);

const Paginator = () => {
  const currentPage = useSelector(paginationCurrentPageSelector);
  const lastPage = useSelector(paginationLastPageSelector);
  const itemsPerPage = useSelector(paginationItemsPerPageSelector);
  const isShowAll = useSelector(paginationIsShowAllSelector);

  const [formItemsPerPage, setFormItemsPerPage] = useState(itemsPerPage);
  useEffect(() => {
    setFormItemsPerPage(itemsPerPage);
  }, [itemsPerPage]);
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

  const handlerClicks = (i) => (e) => {
    e.preventDefault();
    dispatch(setCurrentPage({ currentPage: i }));
  };

  return (
    <PaginatorContainer>
      {isShowAll ? (
        <div></div>
      ) : (
        <ul>
          {lastPage < 8 ? (
            <PagesSimple min={1} cur={currentPage} max={lastPage} handlerClicks={handlerClicks} />
          ) : currentPage <= 4 ? (
            <PagesAtStart cur={currentPage} max={lastPage} handlerClicks={handlerClicks} />
          ) : currentPage >= lastPage - 3 ? (
            <PagesAtEnd cur={currentPage} max={lastPage} handlerClicks={handlerClicks} />
          ) : (
            <PagesAtMiddle cur={currentPage} max={lastPage} handlerClicks={handlerClicks} />
          )}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="perPage">Per page: </label>
        <InputPerPage
          type="text"
          id="perPage"
          name="perPage"
          disabled={isShowAll}
          value={formItemsPerPage}
          onChange={handleOnChange}
        />
        <input type="checkbox" checked={isShowAll} id="isAll" onChange={handleShowAll} />
        <label htmlFor="isAll">All</label>
      </form>
    </PaginatorContainer>
  );
};

export default Paginator;
