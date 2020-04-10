import React, { Component } from "react";
import ajax from "@fdaciuk/ajax";
import AppContent from "./Components/App-Content";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
    };
  }

  getGitHubApiUrl = (user, type) => {
    const internalUser = user ? `/${user}` : "";
    const internalType = type ? `/${type}` : "";
    return `https://api.github.com/users${internalUser}${internalType}`;
  };

  handleSearch = (e) => {
    const value = e.target.value;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;
    const target = e.target;

    //e.persist();

    if (keyCode === ENTER) {
      target.disabled = true;
      ajax()
        .get(this.getGitHubApiUrl(value))
        .then((res) => {
          this.setState({
            userInfo: {
              userName: res.name,
              photo: res.avatar_url,
              login: res.login,
              repos: res.public_repos,
              followers: res.followers,
              following: res.following,
            },
            repos: [],
            starred: [],
          });
        })
        .always(() => {
          target.disabled = false;
        });
    }
  };

  getRepos = (type) => {
    return (e) => {
      const user = this.state.userInfo.login;
      ajax()
        .get(this.getGitHubApiUrl(user, type))
        .then((res) => {
          this.setState({
            [type]: res.map((repo) => {
              return {
                name: repo.name,
                link: repo.html_url,
              };
            }),
          });
        });
    };
  };

  render() {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={this.handleSearch}
        getRepos={this.getRepos("repos")}
        getStarred={this.getRepos("starred")}
      />
    );
  }
}

export default App;
