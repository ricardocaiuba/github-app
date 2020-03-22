import React from "react";
import Button from "./Button";

const handleClick = () => {
  return alert("Like this. great!");
};
const LikeButton = () => <Button handleClick={handleClick}>Curtir</Button>;

export default LikeButton;
