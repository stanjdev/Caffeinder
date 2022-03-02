import React from "react";
import "./Button.css";

function Button({ onClick, customWidth, customText, color, textColor }) {
  return (
    <>
      <button className="pure-button c-l-button" onClick={onClick}>
        {customText}
      </button>
    </>
  );
}

export default Button;
