"use strict";
import React from "react";

const UserInfo = () => {
  return (
    <div className="user-info">
      <img src="https://avatars3.githubusercontent.com/u/43193614?v=4" />
      <h1 className="username">
        <a href="https://github.com/ricardocaiuba">Ricardo Rodrigues</a>
      </h1>
      <ul className="repos-info">
        <li>Repositórios: 24</li>
        <li>Seguidores: 2</li>
        <li>Seguindo: 2</li>
      </ul>
    </div>
  );
};

export default UserInfo;
