import React from 'react';

const RepoItem = ({ item }) => {
  return (
    item && (
      <li>
        <h3>{item.name}</h3>
        <dl>
          <dt>URL:</dt>
          <dd>
            <a href={item.html_url}>{item.html_url}</a>
          </dd>
          {item.description && [<dt>Description:</dt>, <dd>{item.description}</dd>]}
          {item.language && [<dt>Language:</dt>, <dd>{item.language}</dd>]}
        </dl>
      </li>
    )
  );
};

export default RepoItem;
