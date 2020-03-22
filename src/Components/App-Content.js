"use strict";
import React from "react";

import Search from "./Search";
import UserInfo from "./User-Info";
import Actions from "./Actions";
import Repos from "./Repos";

const AppContent = () => (
  <div className="app">
    <Search />

    <UserInfo />

    <Actions />

    <Repos
      className="repos"
      title="Repositórios:"
      repos={[
        {
          name: "Nome do Repositório",
          link: "#"
        },
        {
          name: "Nome do Repositório 2",
          link: "#"
        }
      ]}
    />

    <Repos
      className="starred"
      title="Favoritos:"
      repos={[
        {
          name: "Nome do Repositório",
          link: "#"
        },
        {
          name: "Nome do Repositório 2",
          link: "#"
        },
        {
          name: "Nome do Repositório 3",
          link: "#"
        }
      ]}
    />
  </div>
);
export default AppContent;
