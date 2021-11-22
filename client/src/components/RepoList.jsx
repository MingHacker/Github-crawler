import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    <ul>
      {props.repos.map((repo) => (
        <li>
          <a href={repo.url}>{repo.full_name}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default RepoList;
