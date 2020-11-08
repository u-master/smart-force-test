import React from 'react';

import RepoItemHeader from './RepoItemHeader';
import RepoItemListItem from './RepoItemListItem';
import RepoItemDescList from './RepoItemDescList';

const RepoItem = ({ item }) => {
  return (
    item && (
      <RepoItemListItem>
        <RepoItemHeader>{item.name}</RepoItemHeader>
        <RepoItemDescList>
          <dt key="url_term">URL:</dt>
          <dd key="url_desc">
            <a href={item.html_url}>{item.html_url}</a>
          </dd>
          {item.description && [
            <dt key="desc_term">Description:</dt>,
            <dd key="desc_desc">{item.description}</dd>,
          ]}
          {item.language && [
            <dt key="lang_term">Language:</dt>,
            <dd key="lang_desc">{item.language}</dd>,
          ]}
          <dt key="vis_term">Visibility:</dt>
          <dd key="vis_desc">{item.privale ? 'private' : 'public'}</dd>
        </RepoItemDescList>
      </RepoItemListItem>
    )
  );
};

export default RepoItem;
