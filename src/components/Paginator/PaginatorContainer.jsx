import React from 'react';
import styled from 'styled-components';

const PaginatorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 270px;
  width: 100%;
  margin: 25px 0;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      height: 1.5rem;
      border: 1px solid #aaa;
      border-radius: 7px;
      margin: 0 4px;
      overflow: hidden;

      a,
      span {
        width: 100%;
        height: 100%;
        padding: 0.25rem 0.5rem;
        line-height: 1.5rem;
        color: black;
      }

      a {
        background-color: #eee;
        text-decoration: none;

        &:hover {
          background-color: #bbb;
        }
      }
    }
  }
`;

export default PaginatorContainer;
