"use strict";
import React from "react";

const Repos = ({ className, title, repos }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <ul>
        {repos.map((r, index) => (
          <li key={index}>
            <a href={r.link}>{r.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

Repos.defaultProps = {
  className: ""
};
Repos.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array
};

export default Repos;
