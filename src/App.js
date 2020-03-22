import React from "react";

const App = () => {
  return (
    <div className="app">
      <div className="search">
        <input type="search" placeholder="Digite o nome do usuário no GitHub" />
      </div>
      <div className="user-info">
        <img src="https://avatars3.githubusercontent.com/u/43193614?v=4" />
        <h1>
          <a href="https://github.com/ricardocaiuba">Ricardo Rodrigues</a>
        </h1>
        <ul className="repos-info">
          <li>Repositórios: 24</li>
          <li>Seguidores: 2</li>
          <li>Seguindo: 2</li>
        </ul>
        <hr />
        <div className="actions">
          <button>Ver repositórios</button>
          <button>Ver favoritos</button>
        </div>
        <hr />
        <div className="repos">
          <h2>Repositórios</h2>
          <ul>
            <li>
              <a href="#">Nome do repositório</a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="starred">
          <h2>Favoritos</h2>
          <ul>
            <li>
              <a href="#">Nome do repositório</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
