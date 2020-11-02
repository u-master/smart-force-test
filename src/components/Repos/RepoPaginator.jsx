import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { reposCurrentPageSelector } from '../../selectors';

const Paginator = styled.ul`
    list-style: none;
    padding: 0 25px;
    display: flex;
    justify-content: space-evenly;
`;

const PaginatorItem = styled.li`
    margin: 0;
    padding: 0;
`;

const PaginatorItemLink = styled.a`
    display: inline-block;
    height: 1.5rem;
    line-height: 1.5rem;
    border: 1px solid #999;
    background: linear-gradient(to bottom, #ccc 0, #eee 100%) 0 0 no-repeat;
`;

const PaginatorItemSpan = styled.span`
    display: inline-block;
    height: 1.5rem;
    line-height: 1.5rem;
    border: 1px solid #999;
    background: white;
`;

const RepoPaginator = () => {
    const currentPage = useSelector(reposCurrentPageSelector);
};