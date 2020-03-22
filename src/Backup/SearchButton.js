import React from "react";
import Button from "./Button";

const handleClick = () => {
  return alert("Search. Waiting...");
};
const SearchButton = () => <Button handleClick={handleClick}>Search</Button>;

export default SearchButton;
