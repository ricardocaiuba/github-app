"use strict";
import React, { PropTypes } from "react";

const handlechange = (e) => {
  return console.log("change ", e.target.value);
};
const Search = ({ handleSearch }) => {
  return (
    <div className="search">
      <input
        type="search"
        placeholder="Digite o nome do usuário no GitHub"
        onChange={handlechange}
        onKeyUp={handleSearch}
      />
    </div>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Search;
