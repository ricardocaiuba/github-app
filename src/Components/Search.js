"use strict";
import React, { PropTypes } from "react";

const handlechange = (e) => {
  return console.log("change ", e.target.value);
};
const Search = ({ isDisabled, handleSearch }) => {
  return (
    <div className="search">
      <input
        type="search"
        placeholder="Digite o nome do usuário no GitHub"
        disabled={isDisabled}
        onChange={handlechange}
        onKeyUp={handleSearch}
      />
    </div>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

export default Search;
