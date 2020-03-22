import React from "react";

import Search from "./Components/Search";
import UserInfo from "./Components/User-Info";
import Actions from "./Components/Actions";
import Repos from "./Components/Repos";

const App = () => {
  return (
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
};

export default App;
