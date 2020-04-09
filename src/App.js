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

  handleSearch = (e) => {
    const value = e.target.value;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;
    if (keyCode === ENTER) {
      ajax()
        .get(`https://api.github.com/users/${value}`)
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
          });
          // userInfo: {
          //   userName: "Ricardo Rodrigues dos Santos",
          //   photo: "https://avatars3.githubusercontent.com/u/43193614?v=4",
          //   login: "ricardocaiuba",
          //   repos: 12,
          //   followers: 10,
          //   following: 10,
          // },
          // repos: [
          //   {
          //     name: "Repositório",
          //     link: "#",
          //   },
          // ],
          // starred: [
          //   {
          //     name: "Repo",
          //     link: "#",
          //   },
          // ],
        });
    }
  };

  render() {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={this.handleSearch}
      />
    );
  }
}

export default App;
