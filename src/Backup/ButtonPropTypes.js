import React from "react";

const ButtonPropTypes = ({ children, handleClick }) => (
  <button onClick={handleClick}>{children}</button>
);

/*ButtonPropTypes.propTypes = {
  handleClick: React.PropTypes.func.isRequired
};
*/
export default ButtonPropTypes;
