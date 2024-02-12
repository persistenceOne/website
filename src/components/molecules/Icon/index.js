import React from "react";
const symbol_defs = "/images/icon-symbols.svg";

const Icon = (props) => {
  return (
    <svg
      viewBox={props.viewBox ? props.viewBox : "0 0 16 16"}
      className={`icon icon-${props.viewClass}`}
    >
      <use xlinkHref={`${symbol_defs}#icon-${props.icon}`} />
    </svg>
  );
};

export default Icon;
