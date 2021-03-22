import React from "react";

const Button = (props) => {
  const { color, text, onClick } = props;
 
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

export default Button;
