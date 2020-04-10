import React, { PropTypes } from "react";

import Search from "./Search";
import UserInfo from "./User-Info";
import Actions from "./Actions";
import Repos from "./Repos";

const AppContent = ({
  userInfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStarred,
}) => (
  <div className="app">
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}
    {!!userInfo && <UserInfo userInfo={userInfo} />}
    {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}
    {!!repos.length && (
      <Repos className="repos" title="Repositórios:" repos={repos} />
    )}
    {!!starred.length && (
      <Repos className="starred" title="Favoritos:" repos={starred} />
    )}
  </div>
);

AppContent.propTypes = {
  userInfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
};

export default AppContent;
